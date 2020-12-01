import styled from 'styled-components';
import { colors, typography, getRems } from '../../styles';

export const Heading = styled.h1`
  color: ${colors.darkGray};
  font-family: ${typography.heading};
  font-weight: 500;
  letter-spacing: ${getRems(1)};
`;
