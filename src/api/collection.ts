import { adapter } from './utils';
import { ISerializedCollectionRecord, ICollectionRecord } from '../types';
import { deriveMediumGroup, deriveSizeGroup } from '../utils';

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
