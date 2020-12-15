import { Input as ReactstrapInput, InputProps } from 'reactstrap';
import styled from 'styled-components';
import { colors, typography } from '../../styles';

export const Input: React.FC<InputProps> = styled(ReactstrapInput)`
  font-family: ${typography.default};

  &:focus {
    border-color: #ced4da;
    box-shadow: 0 0 0 0.2rem ${colors.lightRed};
  }
`;
