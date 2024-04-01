import styled from 'styled-components';
import { colors, linkCSS, typography } from '../../styles';

type SmallProps = {
  color?: 'black' | 'darkGray' | 'gray' | 'lightGray';
};

export const Small = styled.small<SmallProps>`
  color: ${({ color }) => (color ? colors[color] : colors.black)};
  font-family: ${typography.default};
  ${linkCSS}
`;
