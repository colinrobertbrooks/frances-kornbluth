import styled from 'styled-components';
import { GLOBAL_BANNER_HEIGHT_PX, colors } from '../../styles';

const GlobalBanner = () => <Element>{/* ... */}</Element>;

const Element = styled.aside`
  align-items: center;
  background: ${colors.lightRed};
  display: flex;
  flex-direction: column;
  height: ${GLOBAL_BANNER_HEIGHT_PX}px;
  justify-content: center;
  padding: 0 8px; // px-2
`;

export default GlobalBanner;
