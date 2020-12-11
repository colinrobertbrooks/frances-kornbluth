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
        const title = gsx$title.$t;

        return {
          id: Number(gsx$id.$t),
          title: title || 'Untitled',
          minImgSrc: gsx$minimgsrc.$t,
          year: Number(gsx$year.$t),
          medium: gsx$medium.$t,
          dimensions: gsx$dimensions.$t,
          status: gsx$status.$t,
          holder: gsx$holder.$t,
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
