import styled from 'styled-components';
import { colors, typography, getRems } from '../../styles';

type HeadingProps = {
  color?: 'darkGray' | 'gray';
};

export const Heading = styled.h1<HeadingProps>`
  color: ${({ color }) => (color ? colors[color] : colors.darkGray)};
  font-family: ${typography.heading};
  font-weight: 500;
  letter-spacing: ${getRems(2)};
  margin: 0;
`;
