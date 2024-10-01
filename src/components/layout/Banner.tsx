import styled from 'styled-components';
import { BANNER_HEIGHT_PX, colors } from '../../styles';

const Banner = () => <Element>{/* ... */}</Element>;

const Element = styled.aside`
  align-items: center;
  background: ${colors.lightRed};
  display: flex;
  flex-direction: column;
  height: ${BANNER_HEIGHT_PX}px;
  justify-content: center;
  padding: 0 8px; // px-2
`;

export default Banner;
