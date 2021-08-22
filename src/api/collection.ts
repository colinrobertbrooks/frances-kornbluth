import { adapter } from './utils';
import { TSpreadsheetDatum, Decade, Status, ICollectionRecord } from '../types';
import { deriveMediumGroup, deriveSizeGroup, generateTags } from '../utils';

const deserializeCollection = (values: string[][]): ICollectionRecord[] => {
  const [headRow, ...bodyRows] = values;
  const data: TSpreadsheetDatum[] = [];
  bodyRows.forEach((row) => {
    const datum: TSpreadsheetDatum = {};
    row.forEach((val, valIdx) => {
      datum[headRow[valIdx]] = val;
    });
    data.push(datum);
  });

  return data.map(
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
  // https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
  const spreadsheetId = '1IzGaO3pLokvuiuKkS2UccK4KuYvnQwM-osJf3WfciJU';
  const range = 'Collection';
  const key = 'AIzaSyBGc0LCzZbPludpcRCualkt0gxOWQ0RBVI';

  try {
    const response = await adapter.get(
      `${spreadsheetId}/values/${range}?key=${key}`
    );
    return deserializeCollection(response.data.values);
  } catch (error) {
    throw new Error('Error fetching collection');
  }
};
