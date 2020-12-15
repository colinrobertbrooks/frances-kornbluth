import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { Link } from 'react-router-dom';
import { Button as BaseButton } from 'reactstrap';
import { colors, typography } from '../../styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buttonColors: any = {
  darkGray: {
    base: {
      backgroundColor: colors.darkGray,
      borderColor: colors.gray,
      color: colors.white,
    },
    hover: {
      backgroundColor: darken(0.06, colors.darkGray),
      borderColor: colors.darkGray,
      color: colors.white,
    },
    focus: {
      backgroundColor: darken(0.06, colors.darkGray),
      borderColor: colors.darkGray,
      boxShadow: lighten(0.06, colors.lightRed),
    },
    active: {
      backgroundColor: colors.black,
      borderColor: colors.black,
      boxShadow: lighten(0.06, colors.lightRed),
    },
  },
  green: {
    base: {
      backgroundColor: colors.green,
      borderColor: colors.lightGreen,
      color: colors.white,
    },
    hover: {
      backgroundColor: darken(0.06, colors.green),
      borderColor: colors.green,
      color: colors.white,
    },
    focus: {
      backgroundColor: darken(0.06, colors.green),
      borderColor: colors.green,
      boxShadow: lighten(0.06, colors.lightRed),
    },
    active: {
      backgroundColor: darken(0.12, colors.green),
      borderColor: colors.darkGreen,
      boxShadow: lighten(0.06, colors.lightRed),
    },
  },
};

interface IButtonProps {
  color?: 'darkGray' | 'green';
  to?: string;
}

export const Button = styled(BaseButton).attrs(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ theme, color = 'darkGray', to, ...restProps }) => ({
    color,
    tag: to ? Link : undefined,
    ...restProps,
  })
)<IButtonProps>`
  ${({ color }) => {
    const { base, hover, focus, active } = buttonColors[color];

    return `
      background-color ${base.backgroundColor};
      border-color: ${base.borderColor};
      color: ${base.color};
      font-family: ${typography.default};

      &:hover:not(:disabled) {
        background-color ${hover.backgroundColor};
        border-color: ${hover.borderColor};
        color: ${hover.color};
      }

      &:focus {
        background-color ${focus.backgroundColor};
        border-color: ${focus.borderColor};
        box-shadow: 0 0 0 0.2rem ${focus.boxShadow};
      }

      &:active {
        background-color ${active.backgroundColor};
        border-color: ${active.borderColor};
        box-shadow: 0 0 0 0.2rem ${active.boxShadow} !important;
      }
    `;
  }}
`;
