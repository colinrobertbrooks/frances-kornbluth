import styled from 'styled-components';
import { colors, getRems, typography } from '../../styles';

export const Paragraph = styled.p`
  color: ${colors.black};
  font-family: ${typography.default};
  font-size: ${getRems(18)};
  font-weight: 400;
  line-height: ${getRems(32)};
`;
