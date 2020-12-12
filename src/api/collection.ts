import { adapter } from './utils';
import {
  ISerializedCollectionRecord,
  ICollectionRecord,
  MediumGroup,
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
        const title = gsx$title.$t || 'Untitled';
        const year = gsx$year.$t ? Number(gsx$year.$t) : null;
        const medium = gsx$medium.$t;
        const dimensions = gsx$dimensions.$t || 'finished size unavailable';
        const holder = gsx$holder.$t || null;

        return {
          id: Number(gsx$id.$t),
          title,
          minImgSrc: gsx$minimgsrc.$t,
          year,
          medium,
          mediumGroup: deriveMediumGroup(medium),
          dimensions,
          status: gsx$status.$t,
          holder,
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
