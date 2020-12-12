import { Input as ReactstrapInput, InputProps } from 'reactstrap';
import styled from 'styled-components';
import { focusOutlineCSS } from '../../styles';

export const Input: React.FC<InputProps> = styled(ReactstrapInput)`
  &:focus {
    ${focusOutlineCSS}
    border-color: #ced4da;
    box-shadow: none;
  }
`;
