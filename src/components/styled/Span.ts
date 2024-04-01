import styled from 'styled-components';
import { colors, getRems, typography } from '../../styles';

type SpanProps = {
  color?: 'black' | 'gray';
};

export const Span = styled.span<SpanProps>`
  color: ${({ color }) => (color ? colors[color] : colors.black)};
  font-family: ${typography.default};
  font-size: ${getRems(16)};
  font-weight: 400;
  line-height: ${getRems(26)};
`;
