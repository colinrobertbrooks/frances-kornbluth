import { adapter } from './utils';
import { ICollectionGoogleSheetRow, ICollectionRecord } from '../types';

const deserializeCollection = (
  entry: ICollectionGoogleSheetRow[]
): ICollectionRecord[] =>
  entry
    .filter(({ gsx$showonwebsite }) => gsx$showonwebsite.$t)
    .map(({ gsx$id, gsx$title, gsx$minimgsrc }) => ({
      id: Number(gsx$id.$t),
      title: gsx$title.$t ? gsx$title.$t : 'Untitled',
      minImgSrc: gsx$minimgsrc.$t,
    }));

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
