import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { colors, typography } from '../../styles';

const outlineButtonColors: any = {
  darkGray: {
    base: {
      borderColor: colors.darkGray,
      color: colors.darkGray,
    },
    hoverAndFocus: {
      backgroundColor: colors.darkGray,
      borderColor: colors.lightGray,
      color: colors.white,
    },
    active: {
      backgroundColor: colors.darkGray,
      borderColor: colors.darkGray,
    },
  },
};

interface IOutlineButtonProps {
  color?: 'darkGray';
  to?: string;
}

export const OutlineButton = styled(Button).attrs(
  ({ color = 'darkGray', to, ...restProps }) => ({
    color,
    outline: true,
    tag: to ? Link : undefined,
    ...restProps,
  })
)<IOutlineButtonProps>`
  ${({ color }) => {
    const { base, hoverAndFocus, active } = outlineButtonColors[color];

    return `
      border-color: ${base.borderColor};
      color: ${base.color};
      font-family: ${typography.default};

      &:hover:not(:disabled),
      &:focus {
        background-color: ${hoverAndFocus.backgroundColor};
        border-color: ${hoverAndFocus.borderColor};
        color: ${hoverAndFocus.color};
      }

      &:active {
        background-color: ${active.backgroundColor} !important;
        border-color: ${active.borderColor} !important;
      }
    `;
  }}
`;
