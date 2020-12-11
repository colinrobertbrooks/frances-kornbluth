import { adapter } from './utils';
import { $T, ICollectionGoogleSheetRow, ICollectionRecord } from '../types';

const $tAccessor = (gsx$any: $T): string => gsx$any.$t;

const deserializeCollection = (
  entry: ICollectionGoogleSheetRow[]
): ICollectionRecord[] =>
  entry
    .filter(({ gsx$showonwebsite }) => gsx$showonwebsite.$t)
    .map(({ gsx$id, gsx$title, gsx$minimgsrc }) => {
      const title$t = $tAccessor(gsx$title);

      return {
        id: Number($tAccessor(gsx$id)),
        title: title$t || 'Untitled',
        minImgSrc: $tAccessor(gsx$minimgsrc),
      };
    });

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
