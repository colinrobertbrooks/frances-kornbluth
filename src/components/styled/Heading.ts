import styled from 'styled-components';
import { colors, typography, getRems } from '../../styles';

interface IHeadingProps {
  color?: 'darkGray' | 'gray';
}

export const Heading = styled.h1<IHeadingProps>`
  color: ${({ color }) => (color ? colors[color] : colors.darkGray)};
  font-family: ${typography.heading};
  font-weight: 500;
  letter-spacing: ${getRems(2)};
  margin: 0;
`;
