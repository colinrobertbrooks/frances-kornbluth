import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';
import {
  useQueryParam,
  StringParam,
  ArrayParam,
  BooleanParam,
} from 'use-query-params';
import { media, MIN_SCREEN_WIDTH_PX } from '../../../styles';
import {
  Decade,
  MediumGroup,
  SizeGroup,
  Status,
  Tag,
  ICollectionRecord,
} from '../../../types';
import { unique } from '../../../utils';
import {
  FormGroup,
  Label,
  Input,
  ClearIndicator,
  Select,
  ISelectOption,
  Button,
  OutlineButton,
} from '../../styled';
import { useSlideContext } from './slide';

/*
 *  types
 */
type Collection = ICollectionRecord[];

type QueryTitle = string | null | undefined;
type QueryMedium = string | null | undefined;
type QuerySize = string | null | undefined;
type QueryDecade = string | null | undefined;
type QueryStatus = string | null | undefined;
type QueryTags = (string | null)[] | null | undefined;
type QueryIsNew = boolean | null | undefined;

interface IQueryFilters {
  title: QueryTitle;
  medium: QueryMedium;
  size: QuerySize;
  decade: QueryDecade;
  status: QueryStatus;
  tags: QueryTags;
  isNew: QueryIsNew;
}

/*
 *  method
 */
const filterCollection = (
  collection: Collection,
  filters: Partial<IQueryFilters>
): Collection => {
  const { title, medium, size, decade, status, tags, isNew } = filters;

  const mediumIsValid = Object.values(MediumGroup).includes(
    medium as MediumGroup
  );
  const sizeIsValid = Object.values(SizeGroup).includes(size as SizeGroup);
  const decadeIsValid = Object.values(Decade).includes(decade as Decade);
  const statusIsValid = Object.values(Status).includes(status as Status);
  const validTags = tags?.filter((value) =>
    Object.values(Tag).includes(value as Tag)
  );

  return collection.filter((record) => {
    const booleans = [];

    if (title) {
      booleans.push(
        record.title.toLocaleLowerCase().includes(title.trim().toLowerCase())
      );
    }

    if (mediumIsValid) {
      booleans.push(medium === record.mediumGroup);
    }

    if (sizeIsValid) {
      booleans.push(size === record.sizeGroup);
    }

    if (decadeIsValid) {
      booleans.push(decade === record.decade);
    }

    if (statusIsValid) {
      booleans.push(status === record.status);
    }

    if (validTags?.length) {
      booleans.push(validTags.every((tag) => record.tags.includes(tag as Tag)));
    }
    if (isNew) {
      booleans.push(!!record.isNew);
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
  medium: QueryMedium;
  setMedium: (nextMedium: QueryMedium) => void;
  size: QuerySize;
  setSize: (nextSizes: QuerySize) => void;
  decade: QueryDecade;
  setDecade: (nextDecades: QuerySize) => void;
  status: QueryStatus;
  setStatus: (nextStatuses: QueryStatus) => void;
  tags: QueryTags;
  setTags: (nextTags: QueryTags) => void;
}

interface IFilterState {
  filters: IQueryFilters;
  filteredCollection: Collection;
  filterProps: IFilterProps;
  resetFilters: () => void;
}

export const useFilterState = (collection: Collection): IFilterState => {
  const [title, setTitle] = useQueryParam('title', StringParam);
  const [medium, setMedium] = useQueryParam('medium', StringParam);
  const [size, setSize] = useQueryParam('size', StringParam);
  const [decade, setDecade] = useQueryParam('decade', StringParam);
  const [status, setStatus] = useQueryParam('status', StringParam);
  const [tags, setTags] = useQueryParam('tags', ArrayParam);
  const [isNew, setIsNew] = useQueryParam('isNew', BooleanParam);

  const filters = useMemo(
    () => ({
      title,
      medium,
      size,
      decade,
      status,
      tags,
      isNew,
    }),
    [title, medium, size, decade, status, tags, isNew]
  );

  const filteredCollection = useMemo(
    () => filterCollection(collection, filters),
    [collection, filters]
  );

  const resetFilters = () => {
    setTitle(undefined);
    setMedium(undefined);
    setSize(undefined);
    setDecade(undefined);
    setStatus(undefined);
    setTags(undefined);
    setIsNew(undefined);
  };

  return {
    filters,
    filteredCollection,
    filterProps: {
      ...filters,
      setTitle,
      setMedium,
      setSize,
      setDecade,
      setStatus,
      setTags,
    },
    resetFilters,
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
  const { medium, ...restFilters } = filters;
  const refilteredCollection = filterCollection(collection, restFilters);
  const availableValues = unique(
    refilteredCollection.map((record) => record.mediumGroup)
  );
  return Object.entries(MediumGroup).map(([label, value]) => ({
    label,
    value,
    isDisabled: !availableValues.includes(value),
  }));
};

const getSizeOptions = (
  collection: Collection,
  filters: IQueryFilters
): ISelectOption[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { size, ...restFilters } = filters;
  const refilteredCollection = filterCollection(collection, restFilters);
  const availableValues = unique(refilteredCollection).map(
    (record) => record.sizeGroup
  );
  return Object.entries(SizeGroup).map(([label, value]) => ({
    label,
    value,
    isDisabled: !availableValues.includes(value),
  }));
};

const getDecadeOptions = (
  collection: Collection,
  filters: IQueryFilters
): ISelectOption[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { decade, ...restFilters } = filters;
  const refilteredCollection = filterCollection(collection, restFilters);
  const availableValues = unique(
    refilteredCollection.map((record) => record.decade)
  );
  return Object.entries(Decade).map(([label, value]) => ({
    label,
    value,
    isDisabled: !availableValues.includes(value),
  }));
};

const getStatusOptions = (
  collection: Collection,
  filters: IQueryFilters
): ISelectOption[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { status, ...restFilters } = filters;
  const refilteredCollection = filterCollection(collection, restFilters);
  const availableValues = unique(
    refilteredCollection.map((record) => record.status)
  );
  return Object.entries(Status).map(([label, value]) => ({
    label,
    value,
    isDisabled: !availableValues.includes(value),
  }));
};

const getTagsOptions = (
  collection: Collection,
  filters: IQueryFilters
): ISelectOption[] => {
  const filteredCollection = filterCollection(collection, filters);
  const availableValues = unique(
    filteredCollection.map((record) => record.tags).flat()
  );
  return Object.entries(Tag).map(([label, value]) => ({
    label,
    value,
    isDisabled: !availableValues.includes(value),
  }));
};

/*
 *  component
 */
interface IFiltersProps extends IFilterProps {
  collection: Collection;
  filters: IQueryFilters;
  reset: () => void;
}

export const Filters = ({
  collection,
  filters,
  title,
  setTitle,
  medium,
  setMedium,
  size,
  setSize,
  decade,
  setDecade,
  status,
  setStatus,
  tags,
  setTags,
  reset,
}: IFiltersProps) => {
  /*
   *  options
   */
  const mediumOptions = useMemo(
    () => getMediumOptions(collection, filters),
    [collection, filters]
  );
  const sizeOptions = useMemo(
    () => getSizeOptions(collection, filters),
    [collection, filters]
  );
  const decadeOptions = useMemo(
    () => getDecadeOptions(collection, filters),
    [collection, filters]
  );
  const statusOptions = useMemo(
    () => getStatusOptions(collection, filters),
    [collection, filters]
  );
  const tagsOptions = useMemo(
    () => getTagsOptions(collection, filters),
    [collection, filters]
  );

  /*
   *  focus management
   */
  const titleInputRef = useRef<HTMLInputElement>(null);

  /*
   *  slide management
   */
  const { close } = useSlideContext();

  return (
    <Wrapper>
      <FormGroup>
        <Label htmlFor="title-input">Title</Label>
        <ClearIndicatorWrapper>
          <Input
            innerRef={titleInputRef}
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
          {title && (
            <ClearIndicator
              onClick={() => {
                setTitle(undefined);
                // replicate react-select's behavior on clear
                if (titleInputRef.current) titleInputRef.current.focus();
              }}
            />
          )}
        </ClearIndicatorWrapper>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="medium-select">Medium</Label>
        <Select
          id="medium-select"
          placeholder="select medium"
          options={mediumOptions}
          value={
            medium
              ? mediumOptions.find((option) => medium === option.value)
              : null
          }
          onChange={(option: ISelectOption) => setMedium(option?.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="size-select">Size</Label>
        <Select
          id="size-select"
          placeholder="select size"
          options={sizeOptions}
          value={
            size ? sizeOptions.find((option) => size === option.value) : null
          }
          onChange={(option: ISelectOption) => setSize(option?.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="decade-select">Decade</Label>
        <Select
          id="decade-select"
          placeholder="select decade"
          options={decadeOptions}
          value={
            decade
              ? decadeOptions.find((option) => decade === option.value)
              : null
          }
          onChange={(option: ISelectOption) => setDecade(option?.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="status-select">Status</Label>
        <Select
          id="status-select"
          placeholder="select status"
          options={statusOptions}
          value={
            status
              ? statusOptions.find((option) => status === option.value)
              : null
          }
          onChange={(option: ISelectOption) => setStatus(option?.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="tag-multi-select">Tags</Label>
        <Select
          isMulti
          id="tag-multi-select"
          placeholder="select tags"
          options={tagsOptions}
          value={
            tags
              ? tagsOptions.filter((option) => tags.includes(option.value))
              : null
          }
          onChange={(options: ISelectOption[]) =>
            setTags(options?.map(({ value }: ISelectOption) => value))
          }
        />
      </FormGroup>
      <ButtonsWrapper>
        <Button block className="mb-3" onClick={close}>
          Apply
        </Button>
        <OutlineButton block onClick={reset}>
          Reset
        </OutlineButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: ${MIN_SCREEN_WIDTH_PX - 16}px;

  ${media.md`
    min-width: 0;
  `}
`;

const ClearIndicatorWrapper = styled.div`
  position: relative;
`;

const ButtonsWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 120px;

  ${media.md`
    margin-bottom: 40px;
  `}
`;
