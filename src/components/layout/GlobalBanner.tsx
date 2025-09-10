import styled from 'styled-components';
import { UnstyledLink, Url } from 'router';
import { GLOBAL_BANNER_HEIGHT_PX, colors } from '../../styles';

const GlobalBanner = () => (
  <Element>
    <UnstyledLink className="text-center" to={Url.ExhibitionsPage}>
      <span>
        See <em>Frances Kornbluth: Paintings of the 1950s</em> at J. Kenneth
        Fine Art
      </span>
      <span className="small d-none d-md-block">
        September 8 – December 31, 2025
      </span>
    </UnstyledLink>
  </Element>
);

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
