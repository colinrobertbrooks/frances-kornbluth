import { styled, Page, H1, Paragraph } from './shared';

export const Videos = () => (
  <Page
    title="Videos"
    description="Videos including Frances Kornbluth (1920 - 2014), an Abstract Expressionist painter who spent 57 summers painting on Monhegan Island off the coast of Maine."
  >
    <H1>Videos</H1>
    <Paragraph as="h2" color="gray">
      Interview for <em>The Women Artists of Monhegan Island</em> (2012)
    </Paragraph>
    <VideoWrapper>
      <Video
        title="Frances Kornbluth Interview"
        src="https://www.youtube.com/embed/OuqiylLBRRA"
      />
    </VideoWrapper>
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
