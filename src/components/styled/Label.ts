import { Label as ReactstrapLabel } from 'reactstrap';
import styled from 'styled-components';
import { colors, typography } from '../../styles';

export const Label = styled(ReactstrapLabel)`
  color: ${colors.darkGray};
  font-family: ${typography.default};
`;
