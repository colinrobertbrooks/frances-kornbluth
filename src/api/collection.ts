import { adapter } from './utils';

// TODO: type
export const getCollection = async (): Promise<any> => {
  try {
    const response = await adapter.get(
      '/cells/1IzGaO3pLokvuiuKkS2UccK4KuYvnQwM-osJf3WfciJU/1/public/full?alt=json'
    );
    return response.data.feed.entry;
  } catch (error) {
    throw new Error('Error fetching collection');
  }
};
