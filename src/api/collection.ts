import { adapter } from './utils';
import { SpreadsheetDatum, Decade, Status, CollectionRecord } from '../types';
import { deriveMediumGroup, deriveSizeGroup, generateTags } from '../utils';

const deserializeCollection = (values: string[][]): CollectionRecord[] => {
  const [headRow, ...bodyRows] = values;
  const data: SpreadsheetDatum[] = [];
  bodyRows.forEach((row) => {
    const datum: SpreadsheetDatum = {};
    row.forEach((val, valIdx) => {
      datum[headRow[valIdx]] = val;
    });
    data.push(datum);
  });

  return data
    .filter(({ showOnWebsite }) => !!showOnWebsite)
    .map(
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
      }) => ({
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
      })
    );
};

export const getCollection = async (): Promise<CollectionRecord[]> => {
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
