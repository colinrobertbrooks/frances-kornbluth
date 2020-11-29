import styled from 'styled-components';
import { Button } from 'reactstrap';
import { typography } from '../../styles';

// TODO: style
export const OutlineButton = styled(Button).attrs({
  color: 'secondary',
  outline: true,
})`
  font-family: ${typography.default};
`;
