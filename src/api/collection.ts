import { adapter } from './utils';
import { ISerializedCollectionRecord, ICollectionRecord } from '../types';

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
        const dimensions = gsx$dimensions.$t || 'finished size unavailable';
        const holder = gsx$holder.$t || null;

        return {
          id: Number(gsx$id.$t),
          title,
          minImgSrc: gsx$minimgsrc.$t,
          year,
          medium: gsx$medium.$t,
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
