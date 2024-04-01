import { Input as ReactstrapInput, InputProps } from 'reactstrap';
import styled from 'styled-components';
import { colors, disabledCSS, focusBorderCSS, typography } from '../../styles';

export const Input = styled(ReactstrapInput)<InputProps>`
  border-color: ${colors.lightGray};
  font-family: ${typography.default};

  &:focus {
    ${focusBorderCSS}
  }

  &:disabled {
    ${disabledCSS}
  }
`;
