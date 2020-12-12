import React from 'react';
import ReactSelect, { NamedProps as ReactSelectProps } from 'react-select';
import styled from 'styled-components';
import { colors, typography } from '../../styles';

interface ISelectProps
  extends Pick<
    ReactSelectProps,
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
  isClearable = false, // NOTE: triggers collection filters slide click outside
  openMenuOnFocus = true,
  tabSelectsValue = false,
  isMulti = false,
  ...restProps
}) => (
  <Element
    openMenuOnFocus={openMenuOnFocus}
    tabSelectsValue={tabSelectsValue}
    isMulti={isMulti}
    {...restProps}
    isClearable={isClearable}
    inputId={id}
  />
);

// TODO: style
export const Element = styled(ReactSelect).attrs({
  classNamePrefix: 'react-select',
})`
  font-family: ${typography.default};

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__control--is-focused,
  .react-select__control--is-focused:hover {
    box-shadow: 0 0 0 0.2rem ${colors.lightRed};
    border-color: #ced4da;
  }
`;
