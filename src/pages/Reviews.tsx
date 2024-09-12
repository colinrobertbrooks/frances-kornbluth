import {
  pathClearingImg,
  lobsterCoveSuite2Img,
  winterLandscapeImg,
  germinationImg,
  changingLightMonheganIcePondImg,
} from 'assets/artwork';
import {
  styled,
  Page,
  Row,
  Col,
  Divider,
  H1,
  Paragraph,
  Artwork,
} from './shared';

export const Reviews = () => (
  <Page
    title="Reviews"
    description="Reviews of artwork by Frances Kornbluth (1920 - 2014), an Abstract Expressionist painter who spent 57 summers painting on Monhegan Island off the coast of Maine."
  >
    <H1>Reviews</H1>
    <Artwork
      className="mt-5 mb-4"
      src={pathClearingImg}
      title="Path Clearing"
      medium="Oil on canvas"
      dimensions='24 x 24"'
    />
    <Review>
      &quot;One of the best pieces in the show is <em>Path Clearing</em> by
      Frances Kornbluth, a small painting with dark colors and mysterious
      glowing light. Only through repeated viewing and careful examination does
      the spectator become aware of the very sensitive use of color in what
      initially seems to be only a dark mass. The separate trees may not be
      there but the forest certainly is―brooding and primeval. The work is
      delicately subtle, perhaps too subtle to attract the attention it
      deserves.&quot;
    </Review>
    <Source>- Bernard Hanson (July 1980)</Source>
    <Divider />
    <Artwork
      className="mt-5 mb-4"
      src={lobsterCoveSuite2Img}
      title="Lobster Cove Suite #2"
      medium="Acrylic on canvas"
      dimensions='67 x 48.5"'
    />
    <Review>
      &quot;In the 1980s, Kornbluth began experimenting with multiple canvases,
      several of which were triptychs. The most exciting of these is{' '}
      <em>Lobster Cove Suite #2</em>. This shows a marvelous range of her best
      colors: earthy greens and subtle blue-greys. The lower quarter of the
      painting is a larger piece of canvas with three equally spaced green
      squares, just the size of the sixteen mini-canvases above. Combined, they
      create a rocky terrain around an ocean inlet, with water cascading in and
      out around the viewer. The bold, emotional connection of the rocks and
      water and viewer is almost transcendental.&quot;
    </Review>
    <Source>- Susan Wadsworth (August 1991)</Source>
    <Divider />
    <Row className="mt-5 mb-4">
      <Col lg={1} />
      <Col lg={5}>
        <Artwork
          className="mb-3 m-lg-0"
          src={winterLandscapeImg}
          title="Winter Landscape"
          medium="Collage on paper"
          dimensions='22 x 30"'
        />
      </Col>
      <Col lg={5}>
        <Artwork
          src={germinationImg}
          title="Germination"
          medium="Acrylic on handmade paper"
          dimensions='28 x 42"'
        />
      </Col>
      <Col lg={1} />
    </Row>
    <Review>
      &quot;One great pairing comprises Frances Kornbluth’s larger paintings.
      They are extremely similar in scale, size, shape and color, but they could
      hardly be more different, as one tilts towards landscape and the other
      insists on being abstract.&quot;
    </Review>
    <Source>- Daniel Kany (January 2013)</Source>
    <Divider />
    <Artwork
      className="mt-5 mb-4"
      src={changingLightMonheganIcePondImg}
      title="Changing Light, Monhegan Ice Pond"
      medium="Acrylic on linen"
      dimensions='59 x 43"'
    />
    <Review>
      &quot;Kornbluth’s <em>Changing Light, Monhegan Ice Pond</em> (1989) evokes
      a shimmering cascade of what might be moonlight on the water framed by
      colorful foliage.&quot;
    </Review>
    <Source>- Carl Little (July 2024)</Source>
  </Page>
);

const Review = styled(Paragraph).attrs({ className: 'pl-2' })``;

const Source = styled(Paragraph).attrs({ className: 'pl-4 mb-4' })`
  font-weight: 700;
`;
