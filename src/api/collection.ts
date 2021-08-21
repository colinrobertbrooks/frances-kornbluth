import { adapter } from './utils';
import { Decade, Status, ICollectionRecord, TItem } from '../types';
import { deriveMediumGroup, deriveSizeGroup, generateTags } from '../utils';

const deserializeCollection = (values: string[][]): ICollectionRecord[] => {
  const [headRow, ...bodyRows] = values;
  const collection: TItem[] = [];
  bodyRows.forEach((row) => {
    const item: TItem = {};
    row.forEach((val, valIdx) => {
      item[headRow[valIdx]] = val;
    });
    collection.push(item);
  });

  return collection.map(
    ({
      id,
      title,
      minImgSrc,
      year,
      decade,
      medium,
      dimensions,
      status,
      holder,
      newOnWebsite,
      ...rest
    }) => {
      return {
        id: Number(id),
        title: title || 'Untitled',
        minImgSrc,
        year: year ? Number(year) : null,
        decade: decade ? (decade as Decade) : Decade.Unknown,
        medium,
        mediumGroup: deriveMediumGroup(medium),
        dimensions: dimensions || 'finished size unavailable',
        sizeGroup: deriveSizeGroup(dimensions),
        status: status as Status,
        holder: holder || null,
        tags: generateTags(rest),
        isNew: !!newOnWebsite,
      };
    }
  );
};

export const getCollection = async (): Promise<ICollectionRecord[]> => {
  const worksheetId = '1IzGaO3pLokvuiuKkS2UccK4KuYvnQwM-osJf3WfciJU';
  const tabName = 'Collection';
  const keyValue = 'AIzaSyBGc0LCzZbPludpcRCualkt0gxOWQ0RBVI';

  try {
    const response = await adapter.get(
      `${worksheetId}/values/${tabName}?alt=json&key=${keyValue}`
    );
    return deserializeCollection(response.data.values);
  } catch (error) {
    throw new Error('Error fetching collection');
  }
};
