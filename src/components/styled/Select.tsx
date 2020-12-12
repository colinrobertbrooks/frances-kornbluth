import React from 'react';
import ReactSelect, { NamedProps as ReactSelectProps } from 'react-select';
import styled from 'styled-components';
import { lighten } from 'polished';
import { colors, typography } from '../../styles';

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
  value: any;
  onChange: any;
  isMulti?: boolean;
}

export const Select: React.FC<ISelectProps> = ({
  id,
  isSearchable = true,
  isClearable = false, // NOTE: triggers collection filters slide click outside
  openMenuOnFocus = true,
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

  .react-select__control,
  .react-select__control:hover {
    cursor: pointer;
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
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__menu {
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
      background-color: ${colors.lightRed};
      font-weight: 600;

      &.react-select__option--is-focused {
        background-color: ${lighten(0.03, colors.lightRed)};
      }
    }
  }
`;
