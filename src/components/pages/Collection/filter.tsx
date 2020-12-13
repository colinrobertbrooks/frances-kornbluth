import React, { useMemo } from 'react';
import { useQueryParam, StringParam, ArrayParam } from 'use-query-params';
import { MediumGroup, ICollectionRecord } from '../../../types';
import { unique } from '../../../utils';
import { FormGroup, Label, Input, Select, ISelectOption } from '../../styled';

/*
 *  TODO:
 *    - size filter
 *    - decade filter
 *    - tag filter
 *    - status filter
 *    - reset method
 *    - clear invalid filter query filters
 */

/*
 *  types
 */
type Collection = ICollectionRecord[];

type QueryTitle = string | null | undefined;
type QueryMediums = (string | null)[] | null | undefined;

interface IQueryFilters {
  title: QueryTitle;
  mediums: QueryMediums;
}

/*
 *  method
 */
const filterCollection = (
  collection: Collection,
  filters: Partial<IQueryFilters>
): Collection => {
  const { title, mediums } = filters;

  return collection.filter((record) => {
    const booleans = [];

    if (title) {
      booleans.push(
        record.title.toLocaleLowerCase().includes(title.trim().toLowerCase())
      );
    }

    if (mediums?.length) {
      const validatedMediums = mediums.filter((value) =>
        Object.values(MediumGroup).includes(value as MediumGroup)
      );

      if (validatedMediums.length) {
        booleans.push(validatedMediums.includes(record.mediumGroup));
      }
    }

    return booleans.every(Boolean);
  });
};

/*
 *  state
 */
interface IFilterProps {
  title: QueryTitle;
  setTitle: (nextTitle: QueryTitle) => void;
  mediums: QueryMediums;
  setMediums: (nextMediums: QueryMediums) => void;
}

interface IFilterState {
  filters: IQueryFilters;
  filteredCollection: Collection;
  filterProps: IFilterProps;
}

export const useFilterState = (collection: Collection): IFilterState => {
  const [title, setTitle] = useQueryParam('title', StringParam);
  const [mediums, setMediums] = useQueryParam('mediums', ArrayParam);

  const filters = {
    title,
    mediums,
  };

  return {
    filters,
    filteredCollection: filterCollection(collection, filters),
    filterProps: {
      title,
      setTitle,
      mediums,
      setMediums,
    },
  };
};

/*
 *  options
 */
const getMediumOptions = (
  collection: Collection,
  filters: IQueryFilters
): ISelectOption[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mediums, ...restFilters } = filters;
  const filteredValues = unique(
    filterCollection(collection, restFilters).map(
      (record) => record.mediumGroup
    )
  );
  const allOptions = Object.entries(MediumGroup).map(([label, value]) => ({
    label,
    value,
  }));
  return allOptions.filter((option) => filteredValues.includes(option.value));
};

/*
 *  component
 */
interface IFiltersProps extends IFilterProps {
  collection: Collection;
  filters: IQueryFilters;
}

export const Filters: React.FC<IFiltersProps> = ({
  collection,
  filters,
  title,
  setTitle,
  mediums,
  setMediums,
}) => {
  const mediumOptions = useMemo(() => getMediumOptions(collection, filters), [
    collection,
    filters,
  ]);

  return (
    <>
      <FormGroup>
        <Label htmlFor="title-input">Title</Label>
        <Input
          id="title-input"
          placeholder="enter title"
          value={title || ''}
          onChange={(event) => setTitle(event.target.value)}
          spellCheck={false}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="medium-select">Medium</Label>
        <Select
          isMulti
          id="medium-select"
          placeholder="select mediums"
          options={mediumOptions}
          value={
            mediumOptions && mediums
              ? mediumOptions.filter((option) => mediums.includes(option.value))
              : []
          }
          onChange={(options: ISelectOption[]) =>
            setMediums(
              options
                ? options.map(({ value }: { value: string }) => value)
                : []
            )
          }
        />
      </FormGroup>
    </>
  );
};
