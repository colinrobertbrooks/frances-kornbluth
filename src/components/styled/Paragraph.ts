import styled from 'styled-components';
import { colors, focusOutlineCSS, getRems, typography } from '../../styles';

type ParagraphProps = {
  color?: 'black' | 'darkGray' | 'gray';
};

export const Paragraph = styled.p<ParagraphProps>`
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
