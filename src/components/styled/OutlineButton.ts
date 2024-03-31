import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import { Button as BaseButton } from 'reactstrap';
import { colors, typography } from '../../styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const outlineButtonColors: any = {
  darkGray: {
    base: {
      borderColor: colors.darkGray,
      color: colors.darkGray,
    },
    hover: {
      backgroundColor: colors.darkGray,
      borderColor: colors.lightGray,
      color: colors.white,
    },
    focus: {
      backgroundColor: colors.darkGray,
      borderColor: colors.lightGray,
      boxShadow: lighten(0.06, colors.lightRed),
      color: colors.white,
    },
    active: {
      backgroundColor: colors.darkGray,
      borderColor: colors.darkGray,
      boxShadow: lighten(0.06, colors.lightRed),
    },
  },
};

type OutlineButtonProps = {
  color?: 'darkGray';
  to?: string;
};

export const OutlineButton = styled(BaseButton).attrs(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ theme, color = 'darkGray', to, ...restProps }) => ({
    color,
    outline: true,
    tag: to ? Link : undefined,
    ...restProps,
  })
)<OutlineButtonProps>`
  ${({ color }) => {
    const { base, hover, focus, active } = outlineButtonColors[color];

    return `
      border-color: ${base.borderColor};
      color: ${base.color};
      font-family: ${typography.default};

      &:hover:not(:disabled) {
          background-color: ${hover.backgroundColor};
          border-color: ${hover.borderColor};
          color: ${hover.color};
      }

      &:focus {
        background-color: ${focus.backgroundColor};
        border-color: ${focus.borderColor};
        box-shadow: 0 0 0 0.2rem ${focus.boxShadow};
        color: ${focus.color};
      }

      &:active {
        background-color: ${active.backgroundColor} !important;
        border-color: ${active.borderColor} !important;
        box-shadow: 0 0 0 0.2rem ${active.boxShadow} !important;
      }
    `;
  }}
`;
