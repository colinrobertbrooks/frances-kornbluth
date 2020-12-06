import styled from 'styled-components';
import { colors, focusOutlineCSS, getRems, typography } from '../../styles';

interface IParagraphProps {
  color?: 'black' | 'gray';
}

export const Paragraph = styled.p<IParagraphProps>`
  color: ${({ color }) => (color ? colors[color] : colors.black)};
  font-family: ${typography.default};
  font-size: ${getRems(18)};
  font-weight: 400;
  line-height: ${getRems(32)};

  a {
    color: ${colors.red};

    &:hover,
    &:focus {
      color: ${colors.darkRed};
    }

    &:focus {
      ${focusOutlineCSS}
    }
  }
`;
