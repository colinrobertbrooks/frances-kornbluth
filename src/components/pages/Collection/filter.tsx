import React, { useMemo } from 'react';
import { useQueryParam, StringParam, ArrayParam } from 'use-query-params';
import {
  Decade,
  MediumGroup,
  SizeGroup,
  Status,
  Tag,
  ICollectionRecord,
} from '../../../types';
import { unique } from '../../../utils';
import { FormGroup, Label, Input, Select, ISelectOption } from '../../styled';

/*
 *  TODO:
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
type QueryStatuses = (string | null)[] | null | undefined;
type QueryTags = (string | null)[] | null | undefined;

interface IQueryFilters {
  title: QueryTitle;
  mediums: QueryMediums;
  sizes: QuerySizes;
  decades: QueryDecades;
  statuses: QueryStatuses;
  tags: QueryTags;
}

/*
 *  method
 */
const filterCollection = (
  collection: Collection,
  filters: Partial<IQueryFilters>
): Collection => {
  const { title, mediums, sizes, decades, tags, statuses } = filters;

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

    if (statuses?.length) {
      const validStatuses = statuses.filter((value) =>
        Object.values(Status).includes(value as Status)
      );
      if (validStatuses.length) {
        booleans.push(validStatuses.includes(record.status));
      }
    }

    if (tags?.length) {
      const validTags = tags.filter((value) =>
        Object.values(Tag).includes(value as Tag)
      );
      if (validTags.length) {
        booleans.push(
          validTags.every((tag) => record.tags.includes(tag as Tag))
        );
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
  statuses: QueryStatuses;
  setStatuses: (nextStatuses: QueryStatuses) => void;
  tags: QueryTags;
  setTags: (nextTags: QueryTags) => void;
}

interface IFilterState {
  filteredCollection: Collection;
  filterProps: IFilterProps;
}

export const useFilterState = (collection: Collection): IFilterState => {
  const [title, setTitle] = useQueryParam('title', StringParam);
  const [mediums, setMediums] = useQueryParam('mediums', ArrayParam);
  const [sizes, setSizes] = useQueryParam('sizes', ArrayParam);
  const [decades, setDecades] = useQueryParam('decades', ArrayParam);
  const [statuses, setStatuses] = useQueryParam('statuses', ArrayParam);
  const [tags, setTags] = useQueryParam('tags', ArrayParam);

  const filters = useMemo(
    () => ({
      title,
      mediums,
      sizes,
      decades,
      statuses,
      tags,
    }),
    [title, mediums, sizes, decades, statuses, tags]
  );

  const filteredCollection = useMemo(
    () => filterCollection(collection, filters),
    [collection, filters]
  );

  return {
    filteredCollection,
    filterProps: {
      ...filters,
      setTitle,
      setMediums,
      setSizes,
      setDecades,
      setStatuses,
      setTags,
    },
  };
};

/*
 *  options
 */
const getMediumOptions = (records: Collection): ISelectOption[] => {
  const filteredValues = unique(records.map((record) => record.mediumGroup));
  const allOptions = Object.entries(MediumGroup).map(([label, value]) => ({
    label,
    value,
  }));
  return allOptions.filter((option) => filteredValues.includes(option.value));
};

const getSizeOptions = (records: Collection): ISelectOption[] => {
  const filteredValues = unique(records.map((record) => record.sizeGroup));
  const allOptions = Object.entries(SizeGroup).map(([label, value]) => ({
    label,
    value,
  }));
  return allOptions.filter((option) => filteredValues.includes(option.value));
};

const getDecadeOptions = (records: Collection): ISelectOption[] => {
  const filteredValues = unique(records.map((record) => record.decade));
  const allOptions = Object.entries(Decade).map(([label, value]) => ({
    label,
    value,
  }));
  return allOptions.filter((option) => filteredValues.includes(option.value));
};

const getStatusOptions = (records: Collection): ISelectOption[] => {
  const filteredValues = unique(records.map((record) => record.status).flat());
  const allOptions = Object.entries(Status).map(([label, value]) => ({
    label,
    value,
  }));
  return allOptions.filter((option) => filteredValues.includes(option.value));
};

const getTagOptions = (records: Collection): ISelectOption[] => {
  const filteredValues = unique(records.map((record) => record.tags).flat());
  const allOptions = Object.entries(Tag).map(([label, value]) => ({
    label,
    value,
  }));
  return allOptions.filter((option) => filteredValues.includes(option.value));
};

/*
 *  component
 */
interface IFiltersProps extends IFilterProps {
  records: Collection;
}

export const Filters: React.FC<IFiltersProps> = ({
  records,
  title,
  setTitle,
  mediums,
  setMediums,
  sizes,
  setSizes,
  decades,
  setDecades,
  statuses,
  setStatuses,
  tags,
  setTags,
}) => {
  const mediumOptions = useMemo(() => getMediumOptions(records), [records]);
  const sizeOptions = useMemo(() => getSizeOptions(records), [records]);
  const decadeOptions = useMemo(() => getDecadeOptions(records), [records]);
  const statusOptions = useMemo(() => getStatusOptions(records), [records]);
  const tagOptions = useMemo(() => getTagOptions(records), [records]);

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
          placeholder="select medium"
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
          placeholder="select size"
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
          placeholder="select decade"
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
      <FormGroup>
        <Label htmlFor="status-select">Status</Label>
        <Select
          isMulti
          id="status-select"
          placeholder="select status"
          options={statusOptions}
          value={
            statusOptions && statuses
              ? statusOptions.filter((option) =>
                  statuses.includes(option.value)
                )
              : []
          }
          onChange={(options: ISelectOption[]) =>
            setStatuses(
              options
                ? options.map(({ value }: { value: string }) => value)
                : []
            )
          }
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="tag-select">Tags</Label>
        <Select
          isMulti
          id="tag-select"
          placeholder="select tags"
          options={tagOptions}
          value={
            tagOptions && tags
              ? tagOptions.filter((option) => tags.includes(option.value))
              : []
          }
          onChange={(options: ISelectOption[]) =>
            setTags(
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
