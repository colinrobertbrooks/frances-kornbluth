import { adapter } from './utils';
import {
  ISerializedCollectionRecord,
  ICollectionRecord,
  MediumGroup,
  SizeGroup,
} from '../types';

const deriveMediumGroup = (medium: string): MediumGroup => {
  const lowercaseMedium = medium.toLowerCase();
  if (lowercaseMedium.includes('acrylic')) return MediumGroup.Acrylic;
  if (lowercaseMedium.includes('charcoal')) return MediumGroup.Charcoal;
  if (lowercaseMedium.includes('collage')) return MediumGroup.Collage;
  if (lowercaseMedium.includes('ink')) return MediumGroup.Ink;
  if (lowercaseMedium.includes('mixed media'))
    return MediumGroup['Mixed Media'];
  if (lowercaseMedium.includes('monotype')) return MediumGroup.Monotype;
  if (lowercaseMedium.includes('oil')) return MediumGroup.Oil;
  if (lowercaseMedium.includes('pastel')) return MediumGroup.Pastel;
  if (lowercaseMedium.includes('watercolor')) return MediumGroup.Watercolor;
  return MediumGroup.Unknown;
};

const getArea = (dimensions: string): number => {
  if (!dimensions.includes('"')) return 0;
  const $dimensions = dimensions.replace('"', '').toLowerCase();

  if ($dimensions.includes('x')) {
    const [h, w] = $dimensions.split('x');
    const area = Number(h) * Number(w);
    if (Number.isNaN(area)) return 0;
    return area;
  }

  if ($dimensions.includes('diameter')) {
    const [h] = $dimensions.split('diameter');
    const area = Number(h) * Number(h);
    if (Number.isNaN(area)) return 0;
    return area;
  }

  return 0;
};

const deriveSizeGroup = (dimensions: string): SizeGroup => {
  const area = getArea(dimensions);

  if (area === 0) return SizeGroup.Unknown;
  if (area < 75) return SizeGroup['Very Small'];
  if (area < 200) return SizeGroup.Small;
  if (area < 500) return SizeGroup.Medium;
  if (area < 1000) return SizeGroup.Large;
  return SizeGroup['Very Large'];
};

const deserializeCollection = (
  entry: ISerializedCollectionRecord[]
): ICollectionRecord[] =>
  entry
    .filter(({ gsx$showonwebsite }) => gsx$showonwebsite.$t)
    .map(
      ({
        gsx$id,
        gsx$title,
        gsx$minimgsrc,
        gsx$year,
        gsx$medium,
        gsx$dimensions,
        gsx$status,
        gsx$holder,
      }) => {
        const medium = gsx$medium.$t;
        const dimensions = gsx$dimensions.$t;

        return {
          id: Number(gsx$id.$t),
          title: gsx$title.$t || 'Untitled',
          minImgSrc: gsx$minimgsrc.$t,
          year: gsx$year.$t ? Number(gsx$year.$t) : null,
          medium,
          mediumGroup: deriveMediumGroup(medium),
          dimensions: dimensions || 'finished size unavailable',
          sizeGroup: deriveSizeGroup(dimensions),
          status: gsx$status.$t,
          holder: gsx$holder.$t || null,
        };
      }
    );

export const getCollection = async (): Promise<ICollectionRecord[]> => {
  try {
    const response = await adapter.get(
      '/list/1IzGaO3pLokvuiuKkS2UccK4KuYvnQwM-osJf3WfciJU/1/public/full?alt=json'
    );
    return deserializeCollection(response.data.feed.entry);
  } catch (error) {
    throw new Error('Error fetching collection');
  }
};
