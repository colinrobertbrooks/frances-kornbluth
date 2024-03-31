import { Input as ReactstrapInput, InputProps } from 'reactstrap';
import styled from 'styled-components';
import { colors, typography } from '../../styles';

export const Input = styled(ReactstrapInput)<InputProps>`
  font-family: ${typography.default};

  &:focus {
    border-color: #ced4da;
    box-shadow: 0 0 0 0.2rem ${colors.lightRed};
  }
`;
