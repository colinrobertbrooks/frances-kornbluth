import React from 'react';
import ReactSelect, { NamedProps as ReactSelectProps } from 'react-select';
import styled from 'styled-components';
import { lighten } from 'polished';
import { colors, media, typography } from '../../styles';

export interface ISelectOption {
  value: string;
  label: string;
  isDisabled?: boolean;
}

interface ISelectProps
  extends Pick<
    ReactSelectProps,
    | 'isSearchable'
    | 'isClearable'
    | 'placeholder'
    | 'options'
    | 'openMenuOnFocus'
    | 'tabSelectsValue'
  > {
  id: string;
  value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  onChange: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  isMulti?: boolean;
}

export const Select: React.FC<ISelectProps> = ({
  id,
  isSearchable = true,
  isClearable = true,
  openMenuOnFocus = false,
  tabSelectsValue = false,
  isMulti = false,
  ...restProps
}) => (
  <Element
    isSearchable={isSearchable}
    openMenuOnFocus={openMenuOnFocus}
    tabSelectsValue={tabSelectsValue}
    isMulti={isMulti}
    {...restProps}
    isClearable={isClearable}
    inputId={id}
  />
);

export const Element = styled(ReactSelect).attrs({
  classNamePrefix: 'react-select',
})`
  font-family: ${typography.default};

  .react-select__control {
    cursor: text;
  }

  .react-select__control--is-focused,
  .react-select__control--is-focused:hover {
    box-shadow: 0 0 0 0.2rem ${colors.lightRed};
    border-color: #ced4da;
  }

  .react-select__multi-value__remove:active,
  .react-select__multi-value__remove:hover {
    background-color: ${colors.lightRed};
    color: ${colors.red};
    cursor: pointer;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator {
    cursor: pointer;
  }

  .react-select__menu {
    .react-select__menu-list {
      max-height: 200px;

      ${media.md`
        max-height: 250px;
      `}
    }

    .react-select__option,
    .react-select__option:active {
      cursor: pointer;
    }

    .react-select__option:hover,
    .react-select__option--is-focused {
      background-color: ${lighten(0.12, colors.lightRed)};
    }

    .react-select__option--is-selected,
    .react-select__option--is-selected:hover {
      color: #333;
      background-color: ${colors.lightRed};
      font-weight: 600;

      &.react-select__option--is-focused {
        background-color: ${lighten(0.03, colors.lightRed)};
      }
    }

    .react-select__option--is-disabled,
    .react-select__option--is-disabled:hover,
    .react-select__option--is-disabled:active {
      background-color: ${colors.trueWhite};
      cursor: not-allowed;
      opacity: 0.7;
    }
  }
`;
