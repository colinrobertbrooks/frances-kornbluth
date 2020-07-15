import { adapter } from './utils';

// TODO: type
export const getCollection = async (): Promise<any> => {
  try {
    const response = await adapter.get(
      '/cells/1yNdxLFz26TptpSay0tzeX82G9PNmDmdcEwPk-kiMZjQ/1/public/full?alt=json'
    );
    return response.data.feed.entry;
  } catch (error) {
    throw new Error('Error fetching collection');
  }
};
