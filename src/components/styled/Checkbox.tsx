import React from 'react';
import styled from 'styled-components';
import { colors, disabledCSS, focusOutlineCSS, srOnlyCSS } from '../../styles';

// https://codesandbox.io/s/yvp79r4251?file=/src/Checkbox.js:886-968

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label: string;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, checked, disabled, label, ...restProps }, ref) => (
    <Label htmlFor={id} disabled={disabled}>
      <CheckboxWrapper>
        <HiddenCheckbox
          {...restProps}
          ref={ref}
          id={id}
          checked={checked}
          disabled={disabled}
        />
        <Box checked={checked}>
          <Check viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Check>
        </Box>
      </CheckboxWrapper>
      {label && <LabelText>{label}</LabelText>}
    </Label>
  )
);

const CheckboxWrapper = styled.div`
  display: inline-block;
  height: 16px;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${srOnlyCSS}
`;

const Check = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  vertical-align: top;
`;

const Box = styled.div<{ checked?: boolean; disabled?: boolean }>`
  background: ${({ checked }) => (checked ? colors.darkGray : 'transparent')};
  border: 1px solid ${colors.lightGray};
  border-radius: 2px;
  display: inline-block;
  height: 16px;
  width: 16px;
  ${HiddenCheckbox}:focus + & {
    ${focusOutlineCSS}
  }
  ${Check} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
    polyline {
      stroke: ${colors.white};
    }
  }
`;

const Label = styled.label<{ disabled?: boolean }>`
  cursor: pointer;
  &:hover {
    ${Box} {
      border-color: ${({ disabled }) => {
        if (!disabled) return colors.darkGray;
        return undefined;
      }};
    }
  }
  ${({ disabled }) =>
    disabled &&
    `
      ${disabledCSS}
    `}
`;

const LabelText = styled.span<{ size?: number }>`
  color: ${colors.darkGray}};
  font-size: 16px;
  font-weight: 400;
  margin-left: 8px;
  user-select: none;
  vertical-align: middle;
`;
