import styled from 'styled-components';
import { UnstyledLink, Url } from 'router';
import { GLOBAL_BANNER_HEIGHT_PX, colors } from '../../styles';

const GlobalBanner = () => (
  <Element>
    <UnstyledLink className="text-center" to={Url.ExhibitionsPage}>
      <span>
        See <em>The Monhegan Wildlands</em> at the Bowdoin College Museum of Art
      </span>
      <span className="small d-none d-md-block">
        December 12, 2024 - June 1, 2025
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
