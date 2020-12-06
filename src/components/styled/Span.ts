import styled from 'styled-components';
import { colors, getRems, typography } from '../../styles';

export const Span = styled.span`
  color: ${colors.black};
  font-family: ${typography.default};
  font-size: ${getRems(16)};
  font-weight: 400;
  line-height: ${getRems(26)};
`;
