import styled from 'styled-components';
import { UnstyledLink, Url } from 'router';
import { GLOBAL_BANNER_HEIGHT_PX, colors } from '../../styles';

const GlobalBanner = () => (
  <Element>
    <UnstyledLink className="text-center" to={Url.ExhibitionsPage}>
      <span>
        See <em>The Monhegan Wildlands</em> at the Monhegan Museum
      </span>
      <span className="small d-none d-md-block">
        July 1 – September 30, 2025
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
