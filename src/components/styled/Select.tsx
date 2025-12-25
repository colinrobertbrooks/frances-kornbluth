import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import styled from 'styled-components';
import { lighten } from 'polished';
import {
  colors,
  disabledCSS,
  focusBorderCSS,
  media,
  typography,
} from '../../styles';

export type SelectOption = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

type SelectProps = Omit<
  ReactSelectProps,
  'classNamePrefix' | 'onChange' | 'value'
> & {
  id: string;
  value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  onChange: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export const Select = ({
  id,
  isClearable = true,
  isMulti = false,
  isSearchable = true,
  openMenuOnFocus = false,
  tabSelectsValue = false,
  menuPlacement = 'auto',
  ...restProps
}: SelectProps) => (
  <Element
    isClearable={isClearable}
    isMulti={isMulti}
    isSearchable={isSearchable}
    openMenuOnFocus={openMenuOnFocus}
    tabSelectsValue={tabSelectsValue}
    menuPlacement={menuPlacement}
    {...restProps}
    inputId={id}
  />
);

export const Element = styled(ReactSelect).attrs({
  classNamePrefix: 'react-select',
})`
  border-color: ${colors.lightGray};
  font-family: ${typography.default};

  .react-select__control {
    cursor: text;
  }

  .react-select__control--is-focused,
  .react-select__control--is-focused:hover {
    ${focusBorderCSS}
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
      ${disabledCSS}
    }
  }
`;
