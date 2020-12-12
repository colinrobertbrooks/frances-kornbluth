import React from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import { ICollectionRecord } from '../../../types';
import { Label, Input } from '../../styled';

/*
 *  TODO:
 *    - medium filter
 *    - size filter
 *    - decade filter
 *    - tag filter
 *    - status filter
 */

/*
 *  types
 */
type Title = string | null | undefined;

/*
 *  method
 */
interface ICollectionFilters {
  title: Title;
}

const filterCollection = (
  collection: ICollectionRecord[],
  filters: ICollectionFilters
): ICollectionRecord[] => {
  const { title } = filters;

  return collection.filter((record) => {
    const booleans = [];

    if (title) {
      booleans.push(
        record.title.toLocaleLowerCase().includes(title.trim().toLowerCase())
      );
    }

    return booleans.every(Boolean);
  });
};

/*
 *  state
 */
interface IFilterProps {
  title: Title;
  setTitle: (nextTitle: Title) => void;
}

interface IFilterState {
  filteredCollection: ICollectionRecord[];
  filterProps: IFilterProps;
}

export const useFilterState = (
  collection: ICollectionRecord[]
): IFilterState => {
  const [title, setTitle] = useQueryParam('title', StringParam);

  return {
    filteredCollection: filterCollection(collection, {
      title,
    }),
    filterProps: {
      title,
      setTitle,
    },
  };
};

/*
 *  component
 */
export const Filters: React.FC<IFilterProps> = ({ title, setTitle }) => {
  return (
    <>
      {/* TODO: clear */}
      <Label htmlFor="title-search">Title</Label>
      <Input
        id="title-search"
        placeholder="search by title"
        value={title || ''}
        onChange={(event) => setTitle(event.target.value)}
      />
    </>
  );
};
