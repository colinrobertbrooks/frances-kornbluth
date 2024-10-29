import { ExternalLink } from 'router';
import {
  styled,
  Page,
  Row,
  Col,
  Heading,
  H1,
  Paragraph,
  Divider,
} from './shared';

export const Videos = () => (
  <Page
    title="Videos"
    description="Videos including Frances Kornbluth (1920 - 2014), an Abstract Expressionist painter who spent 57 summers painting on Monhegan Island off the coast of Maine."
  >
    <Row>
      <Col xl={8}>
        <H1>Videos</H1>
        <Heading as="h2" color="darkGray" className="h4 mb-4">
          Interview for <em>Lynne Drexler: A Life in Color</em> (2008)
        </Heading>
        <VideoWrapper>
          <Video
            title="Frances Kornbluth interviewed for Lynne Drexler: A Life in Color"
            src="https://www.youtube.com/embed/b3_CUm39dIM?start=877"
          />
        </VideoWrapper>
        <Paragraph className="mt-2">
          Also see{' '}
          <ExternalLink href="https://youtu.be/b3_CUm39dIM?si=IZuAbhMke07RJhHO&t=1293">
            21:33
          </ExternalLink>{' '}
          and{' '}
          <ExternalLink href="https://youtu.be/b3_CUm39dIM?si=duPCm2sknIDQR1qN&t=1460">
            24:20
          </ExternalLink>
          .
        </Paragraph>
        <Divider />
        <Heading as="h2" color="darkGray" className="h4 mb-4">
          Interview for <em>The Women Artists of Monhegan Island</em> (2012)
        </Heading>
        <VideoWrapper>
          <Video
            title="Frances Kornbluth interviewed for The Women Artists of Monhegan Island"
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
