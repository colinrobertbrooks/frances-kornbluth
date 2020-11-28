import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import backgroundImageUrl from '../../assets/jpg/home_background.jpg';
import { NAVBAR_HEIGHT_PX } from '../../constants';
import { colors } from '../../styles';
import { Page } from '../layout';
import { RocksSeaAndSkySvg } from '../svg';

export const Home: React.FC = () => (
  <Page className="position-relative p-0" fluid>
    <Background />
    <Container>
      <Row>
        <Col md={12}>
          <SvgWrapper className="d-flex">
            <RocksSeaAndSkySvg fill={colors.darkGray} />
          </SvgWrapper>
        </Col>
        <Col md={6} className="text-center">
          <Section>Artist</Section>
        </Col>
        <Col md={6} className="text-center">
          <Section>Artwork</Section>
        </Col>
      </Row>
    </Container>
  </Page>
);

const Background = styled.div`
  background-image: url('${backgroundImageUrl}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc((100vh - ${NAVBAR_HEIGHT_PX}px) * 0.8);
  mask-image: linear-gradient(to top, transparent 10%, #fdfdfc 90%);
  opacity: 0.9;
  position: absolute;
  width: 100vw;
  z-index: -1;
`;

const SvgWrapper = styled.div`
  min-height: calc((100vh - ${NAVBAR_HEIGHT_PX}px) * 0.5);
`;

const Section = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;
`;

// const SectionImg = styled.image``;
