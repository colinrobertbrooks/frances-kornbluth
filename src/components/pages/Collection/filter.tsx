import React, { useMemo } from 'react';
import { useQueryParam, StringParam, ArrayParam } from 'use-query-params';
import {
  Decade,
  MediumGroup,
  SizeGroup,
  ICollectionRecord,
} from '../../../types';
import { unique } from '../../../utils';
import { FormGroup, Label, Input, Select, ISelectOption } from '../../styled';

/*
 *  TODO:
 *    - tag filter
 *    - status filter
 *    - reset method
 */

/*
 *  types
 */
type Collection = ICollectionRecord[];

type QueryTitle = string | null | undefined;
type QueryMediums = (string | null)[] | null | undefined;
type QuerySizes = (string | null)[] | null | undefined;
type QueryDecades = (string | null)[] | null | undefined;

interface IQueryFilters {
  title: QueryTitle;
  mediums: QueryMediums;
  sizes: QuerySizes;
  decades: QueryDecades;
}

/*
 *  method
 */
const filterCollection = (
  collection: Collection,
  filters: Partial<IQueryFilters>
): Collection => {
  const { title, mediums, sizes, decades } = filters;

  return collection.filter((record) => {
    const booleans = [];

    if (title) {
      booleans.push(
        record.title.toLocaleLowerCase().includes(title.trim().toLowerCase())
      );
    }

    if (mediums?.length) {
      const validMediums = mediums.filter((value) =>
        Object.values(MediumGroup).includes(value as MediumGroup)
      );

      if (validMediums.length) {
        booleans.push(validMediums.includes(record.mediumGroup));
      }
    }

    if (sizes?.length) {
      const validSizes = sizes.filter((value) =>
        Object.values(SizeGroup).includes(value as SizeGroup)
      );

      if (validSizes.length) {
        booleans.push(validSizes.includes(record.sizeGroup));
      }
    }

    if (decades?.length) {
      const validDecades = decades.filter((value) =>
        Object.values(Decade).includes(value as Decade)
      );

      if (validDecades.length) {
        booleans.push(validDecades.includes(record.decade));
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
  sizes: QuerySizes;
  setSizes: (nextSizes: QuerySizes) => void;
  decades: QueryDecades;
  setDecades: (nextDecades: QuerySizes) => void;
}

interface IFilterState {
  filters: IQueryFilters;
  filteredCollection: Collection;
  filterProps: IFilterProps;
}

export const useFilterState = (collection: Collection): IFilterState => {
  const [title, setTitle] = useQueryParam('title', StringParam);
  const [mediums, setMediums] = useQueryParam('mediums', ArrayParam);
  const [sizes, setSizes] = useQueryParam('sizes', ArrayParam);
  const [decades, setDecades] = useQueryParam('decades', ArrayParam);

  const filters = useMemo(
    () => ({
      title,
      mediums,
      sizes,
      decades,
    }),
    [title, mediums, sizes, decades]
  );

  const filteredCollection = useMemo(
    () => filterCollection(collection, filters),
    [collection, filters]
  );

  return {
    filters,
    filteredCollection,
    filterProps: {
      ...filters,
      setTitle,
      setMediums,
      setSizes,
      setDecades,
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

const getSizeOptions = (
  collection: Collection,
  filters: IQueryFilters
): ISelectOption[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { sizes, ...restFilters } = filters;
  const filteredValues = unique(
    filterCollection(collection, restFilters).map((record) => record.sizeGroup)
  );
  const allOptions = Object.entries(SizeGroup).map(([label, value]) => ({
    label,
    value,
  }));
  return allOptions.filter((option) => filteredValues.includes(option.value));
};

const getDecadeOptions = (
  collection: Collection,
  filters: IQueryFilters
): ISelectOption[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { decades, ...restFilters } = filters;
  const filteredValues = unique(
    filterCollection(collection, restFilters).map((record) => record.decade)
  );
  const allOptions = Object.entries(Decade).map(([label, value]) => ({
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
  sizes,
  setSizes,
  decades,
  setDecades,
}) => {
  const mediumOptions = useMemo(() => getMediumOptions(collection, filters), [
    collection,
    filters,
  ]);
  const sizeOptions = useMemo(() => getSizeOptions(collection, filters), [
    collection,
    filters,
  ]);
  const decadeOptions = useMemo(() => getDecadeOptions(collection, filters), [
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
          onChange={(event) => {
            const { value } = event.target;
            if (!value) {
              setTitle(undefined);
            } else {
              setTitle(value);
            }
          }}
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
      <FormGroup>
        <Label htmlFor="size-select">Size</Label>
        <Select
          isMulti
          id="size-select"
          placeholder="select sizes"
          options={sizeOptions}
          value={
            sizeOptions && sizes
              ? sizeOptions.filter((option) => sizes.includes(option.value))
              : []
          }
          onChange={(options: ISelectOption[]) =>
            setSizes(
              options
                ? options.map(({ value }: { value: string }) => value)
                : []
            )
          }
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="decade-select">Decade</Label>
        <Select
          isMulti
          id="decade-select"
          placeholder="select decades"
          options={decadeOptions}
          value={
            decadeOptions && decades
              ? decadeOptions.filter((option) => decades.includes(option.value))
              : []
          }
          onChange={(options: ISelectOption[]) =>
            setDecades(
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
