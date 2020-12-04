import React from 'react';
import { artistImg, artworkImg, backgroundImg } from '../../assets/pages/home';
import { NAVBAR_HEIGHT_PX, colors, media } from '../../styles';
import { Page } from '../layout';
import { Url } from '../router';
import {
  styled,
  keyframes,
  rgba,
  Container,
  Row,
  Col,
  Paragraph,
  OutlineButton,
} from '../styled';
import { RocksSeaAndSkySvg } from '../svg';

export const Home: React.FC = () => (
  <Page className="position-relative p-0" fluid>
    <Background />
    <Container>
      <Row>
        <Col md={12}>
          <SvgWrapper className="d-flex">
            <RocksSeaAndSkySvg fill={colors.brown} />
          </SvgWrapper>
        </Col>
        <Col md={6} className="text-center mb-5 mb-md-0">
          <ArtImg src={artistImg} alt="Artist" />
          <Paragraph className="mb-4">
            Frances Kornbluth (1920 - 2014) was an Abstract Expressionist
            painter who worked in New York City, Northeastern Connecticut and on
            Monhegan Island off the coast of Maine. Her teachers and mentors
            included Reuben Tam, William Kienbusch and Robert Richenburg.
          </Paragraph>
          <Row>
            <Col xl={2} />
            <Col sm={6} xl={4}>
              <Button to={Url.BiographyPage} className="mb-3 mb-md-0" block>
                Biography
              </Button>
            </Col>
            <Col sm={6} xl={4}>
              <Button to={Url.TimelinePage} block>
                Timeline
              </Button>
            </Col>
            <Col xl={2} />
          </Row>
        </Col>
        <Col md={6} className="text-center">
          <ArtImg src={artworkImg} alt="Artwork" />
          <Paragraph className="mb-4">
            Frances Kornbluth&#39;s body of work spans seven decades and can be
            found in public collections, including the Chrysler Museum of Art,
            the Colby College Museum of Art, the Hudson River Museum, the
            Monhegan Museum and the Portland Museum of Art.
          </Paragraph>
          <Row>
            <Col xl={2} />
            <Col sm={6} xl={4}>
              <Button to={Url.CollectionPage} className="mb-3 mb-md-0" block>
                Collection
              </Button>
            </Col>
            <Col sm={6} xl={4}>
              <Button onClick={() => alert('TODO')} block>
                Available Art
              </Button>
            </Col>
            <Col xl={2} />
          </Row>
        </Col>
      </Row>
    </Container>
  </Page>
);

const backgroundImageFadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 0.9; }
`;

const Background = styled.div`
  animation: ${backgroundImageFadeIn} 350ms;
  animation-timing-function: ease-in;
  background-image: url('${backgroundImg}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc((100vh - ${NAVBAR_HEIGHT_PX}px) * 0.8);
  mask-image: linear-gradient(to top, transparent 10%, #fdfdfc 80%);
  opacity: 0.9;
  position: absolute;
  width: 100vw;
  z-index: -1;
`;

const SvgWrapper = styled.div`
  min-height: 175px;

  ${media.md`
    min-height: 350px;
  `}

  svg {
    filter: drop-shadow(3px 3px 2px ${rgba(colors.white, 0.55)});
  }
`;

const ArtImg = styled.img.attrs({ className: 'mb-4' })`
  background: ${colors.white};
  border: 1px solid ${colors.lightGray};
  border-radius: 50%;
  height: 125px;
  width: 125px;

  ${media.md`
      height: 200px;
      width: 200px;
  `}
`;

const Button = styled(OutlineButton)`
  min-width: 160px;
`;
