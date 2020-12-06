import React from 'react';
import styled from 'styled-components';
import { Page } from '../layout';
import { Row, Col, Heading, Paragraph } from '../styled';

export const Videos: React.FC = () => (
  <Page title="Videos">
    <Row>
      <Col md={12} className="h-100">
        <Heading className="mb-3">Videos</Heading>
        <Paragraph as="h2" color="gray" className="text-center">
          2012 interview for &quot;The Women Artists of Monhegan Island&quot;
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
