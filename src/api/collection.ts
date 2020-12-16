import { adapter } from './utils';
import {
  Decade,
  ISerializedCollectionRecord,
  ICollectionRecord,
} from '../types';
import { deriveMediumGroup, deriveSizeGroup, generateTags } from '../utils';

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
        gsx$decade,
        gsx$medium,
        gsx$dimensions,
        gsx$status,
        gsx$holder,
        gsx$newonwebsite,
        ...gsx$rest
      }) => {
        const year = gsx$year.$t;
        const decade = gsx$decade.$t;
        const medium = gsx$medium.$t;
        const dimensions = gsx$dimensions.$t;

        return {
          id: Number(gsx$id.$t),
          title: gsx$title.$t || 'Untitled',
          minImgSrc: gsx$minimgsrc.$t,
          year: year ? Number(year) : null,
          decade: decade ? (decade as Decade) : Decade.Unknown,
          medium,
          mediumGroup: deriveMediumGroup(medium),
          dimensions: dimensions || 'finished size unavailable',
          sizeGroup: deriveSizeGroup(dimensions),
          status: gsx$status.$t,
          holder: gsx$holder.$t || null,
          tags: generateTags(gsx$rest),
          isNew: !!gsx$newonwebsite.$t,
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
