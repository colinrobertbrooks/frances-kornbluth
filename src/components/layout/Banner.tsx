import styled from 'styled-components';
import { UnstyledLink, Url } from '../../router';
import { BANNER_HEIGHT_PX, colors } from '../../styles';

const Banner = () => {
  return (
    <Element>
      <UnstyledLink className="text-center" to={Url.ExhibitionsPage}>
        <span>
          See <em>Women Artists of Monhegan Island: A Common Bond</em> at the
          Mongegan Museum
        </span>
        <span className="small d-none d-md-block">
          July 1 – September 30, 2024
        </span>
      </UnstyledLink>
    </Element>
  );
};

const Element = styled.aside`
  align-items: center;
  background: ${colors.lightRed};
  display: flex;
  flex-direction: column;
  height: ${BANNER_HEIGHT_PX}px;
  justify-content: center;
`;

export default Banner;