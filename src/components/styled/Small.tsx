import styled from 'styled-components';
import { colors, typography } from '../../styles';

interface ISmallProps {
  color?: 'black' | 'darkGray' | 'gray' | 'lightGray';
}

export const Small = styled.small<ISmallProps>`
  color: ${({ color }) => (color ? colors[color] : colors.black)};
  font-family: ${typography.default};
`;
