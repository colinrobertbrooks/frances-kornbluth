import { styled, Page, Row, Col, H1, Paragraph } from './shared';

export const Videos = () => (
  <Page title="Videos">
    <Row>
      <Col md={12}>
        <H1>Videos</H1>
        <Paragraph as="h2" color="gray">
          Interview for <i>The Women Artists of Monhegan Island</i> (2012)
        </Paragraph>
        <VideoWrapper>
          <Video
            title="Frances Kornbluth Interview"
            src="https://www.youtube.com/embed/OuqiylLBRRA"
          />
        </VideoWrapper>
      </Col>
    </Row>
  </Page>
);

const VideoWrapper = styled.div`
  float: none;
  clear: both;
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
`;

const Video = styled.iframe.attrs({ allowFullScreen: true, width: '100%' })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
