import styled from 'styled-components';
import {
  novemberImg,
  summersVocabulary1Img,
  theLampImg,
  rocksSeaAndSkyImg,
  islandPath2Img,
  changingLightMonheganIcePondImg,
  genesisImg,
  winterLandscapeImg,
} from '../../assets/artwork';
import {
  artist1950sImg,
  artist1960sImg,
  artist1970sImg,
  artist1980sImg,
  artist1990sImg,
  artist2000sImg,
  artist2010sImg,
} from '../../assets/pages/timeline';
import { Link, Url } from '../../router';
import { colors, media } from '../../styles';
import {
  Page,
  Row,
  Col,
  Divider,
  Heading,
  H1,
  Span,
  Paragraph,
  Artwork,
} from './shared';

export const Timeline = () => (
  <Page title="Timeline">
    <Row>
      <Col md={12}>
        <H1>Timeline</H1>
        <DecadeWrapper>
          <DecadeImg src={artist1950sImg} alt="Kornbluth in 1958" />
          <DecadeHeading>1950s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="1955"
              event="Enrolled in the Brooklyn Museum Art School, studying with William Kienbusch (1955) and Reuben Tam (1956 - 1959)"
            />
            <Milestone year="1957" event="First visit to Monhegan Island" />
            <Milestone
              year="1958"
              event={
                <>
                  <em>Watercolors & Drawings</em> solo exhibition at the
                  Brooklyn Museum
                </>
              }
            />
            <Milestone
              year="1958"
              event={
                <>
                  <em>Brooklyn and Long Island Artists</em> exhibition at the
                  Brooklyn Museum
                </>
              }
            />
            <Milestone
              year="1958"
              event={
                <>
                  M. Grumbacher Prize from the National Society of Painters in
                  Casein for <em>Shelter Island Shore</em>
                </>
              }
            />
            <Milestone
              year="1958"
              event={
                <>
                  Honorable Mention at the New York City Center Gallery for{' '}
                  <em>November</em>
                </>
              }
            />
            <Milestone
              year="1959"
              event={
                <>
                  Honorable Mention at the New York City Center Gallery for{' '}
                  <em>Summer&apos;s Vocabulary #1</em>
                </>
              }
            />
          </MilestonesWrapper>
          <Row className="mt-3">
            <Col md={1} />
            <Col sm={6} md={5}>
              <Artwork
                className="mb-3 m-md-0"
                src={novemberImg}
                title="November"
                medium="Oil on canvas"
                dimensions='41.5 x 35.5"'
              />
            </Col>
            <Col sm={6} md={5}>
              <Artwork
                src={summersVocabulary1Img}
                title="Summer's Vocabulary #1"
                medium="Oil on linen"
                dimensions='45 x 43"'
              />
            </Col>
            <Col md={1} />
          </Row>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist1960sImg} alt="Kornbluth in the 1960sImg" />
          <DecadeHeading>1960s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="1960"
              event={
                <>
                  First Prize at the New York City Center Gallery for{' '}
                  <em>Ocean Song #2</em>
                </>
              }
            />
            <Milestone
              year="1961"
              event={
                <>
                  <em>Paintings</em> solo exhibition at Hofstra College
                </>
              }
            />
            <Milestone
              year="1961"
              event={
                <>
                  First Prize, <em>12th Annual Long Island Artists</em>{' '}
                  exhibition at Hofstra College for <em>Still Life/Interior</em>
                </>
              }
            />
            <Milestone
              year="1961"
              event={
                <>
                  Special Mention Award, Norfolk Museum&apos;s{' '}
                  <em>American Drawing Annual XVIII</em> exhibition for{' '}
                  <em>The Lamp</em>
                </>
              }
            />
            <Milestone
              year="1961"
              event={
                <>
                  Medal of Honor and Catherine and Henry J. Gainsman Prize from
                  the National Association of Women Artists for{' '}
                  <em>Rocks, Sea and Sky</em>
                </>
              }
            />
            <Milestone
              year="1962"
              event="Master's Degree from the Pratt Institute; studied with Robert Richenburg"
            />
            <Milestone
              year="1962"
              event={
                <>
                  <em>Collages & Constructions</em> solo exhibition at the Pratt
                  Institute
                </>
              }
            />
            <Milestone
              year="1963"
              event={
                <>
                  <em>158th Annual Exhibition</em> at the Pennsylvania Academy
                  of Fine Arts
                </>
              }
            />
            <Milestone
              year="1964"
              event="Aileen O. Webb Prize from the National Association of Women Artists"
            />
            <Milestone
              year="1968"
              event={
                <>
                  Medal of Honor and the Elizabeth R. Fulda Memorial Prize from
                  the National Association of Women Artists for{' '}
                  <em>Rising Landscape</em>
                </>
              }
            />
            <Milestone
              year="1969"
              event="Moved from Merrick, NY to North Grosvenordale, CT"
            />
          </MilestonesWrapper>
          <Row className="mt-3">
            <Col md={1} />
            <Col sm={6} md={5}>
              <Artwork
                className="mb-3 m-md-0"
                src={theLampImg}
                title="The Lamp"
                medium="Ink wash on paper"
                dimensions='23.6 x 18.5"'
              />
            </Col>
            <Col sm={6} md={5}>
              <Artwork
                src={rocksSeaAndSkyImg}
                title="Rocks, Sea and Sky"
                medium="Watercolor on paper"
                dimensions='19 x 16"'
              />
            </Col>
            <Col md={1} />
          </Row>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist1970sImg} alt="Kornbluth in 1978" />
          <DecadeHeading>1970s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="1974"
              event="Purchased a summer cottage in Lobster Cove on Monhegan Island"
            />
            <Milestone
              year="1974"
              event="Grant for painting from the Connecticut Commission of the Arts"
            />
            <Milestone
              year="1974"
              event={
                <>
                  <em>Artists From Monhegan</em> exhibition at the Allentown
                  Museum
                </>
              }
            />
            <Milestone
              year="1974"
              event={
                <>
                  <em>Four Painters and a Sculptor</em> exhibition at the
                  Worcester Art Museum
                </>
              }
            />
            <Milestone
              year="1975"
              event={
                <>
                  Charles Woodbury Memorial Prize from the National Association
                  of Women Artists for <em>Cove Wind</em>
                </>
              }
            />
            <Milestone
              year="1977"
              event={
                <>
                  Helen Henningsen Memorial Prize from the National Association
                  of Women Artists for <em>Island Path #2</em>
                </>
              }
            />
          </MilestonesWrapper>
          <Row className="mt-3">
            <Col md={12}>
              <Artwork
                src={islandPath2Img}
                title="Island Path #2"
                medium="Acrylic on canvas"
                dimensions='46 x 42"'
              />
            </Col>
          </Row>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist1980sImg} alt="Kornbluth in 1989" />
          <DecadeHeading>1980s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="1982"
              event={
                <>
                  Elizabeth Morse Genius Foundation Prize from the National
                  Association of Women Artists for <em>Window to the Sea</em>
                </>
              }
            />
            <Milestone
              year="1985"
              event="Artist in Residence at Altos De Chavon, Dominican Republic"
            />
            <Milestone
              year="1989"
              event={
                <>
                  John Carl Georgo Memorial Award from the National Association
                  of Women Artists for{' '}
                  <em>Changing Light, Monhegan Ice Pond</em>
                </>
              }
            />
          </MilestonesWrapper>
          <Row className="mt-3">
            <Col md={12}>
              <Artwork
                src={changingLightMonheganIcePondImg}
                title="Changing Light, Monhegan Ice Pond"
                medium="Acrylic on linen"
                dimensions='59 x 43"'
              />
            </Col>
          </Row>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist1990sImg} alt="Kornbluth in 1997" />
          <DecadeHeading>1990s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="1992"
              event={
                <>
                  Miriam E. Halpern Memorial Award from the National Association
                  of Women Artists for <em>Rosebud #3</em>
                </>
              }
            />
            <Milestone
              year="1996"
              event={
                <>
                  <em>Overview, Four Decades</em> solo exhibition at the
                  University of Connecticut
                </>
              }
            />
          </MilestonesWrapper>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist2000sImg} alt="Kornbluth in 2001" />
          <DecadeHeading>2000s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="2000"
              event="Lifetime Achievement Award from Brooklyn College"
            />
            <Milestone
              year="2000"
              event={
                <>
                  <em>Visual Language of American Religion</em> exhibition at
                  the Bauer Art Museum
                </>
              }
            />
            <Milestone
              year="2000"
              event={
                <>
                  First Prize (Painting), 57th Annual Connecticut Artists
                  exhibition at the Slater Memorial Museum for <em>November</em>
                </>
              }
            />
            <Milestone
              year="2001"
              event={
                <>
                  {/* June 15 - September 2, 2001 */}
                  <em>Monhegan: The Abstracted Island</em> exhibition at the
                  Bates College Museum of Art
                </>
              }
            />
            <Milestone
              year="2001"
              event={
                <>
                  <em>Constructions & Collages</em> solo exhibition at the
                  Slater Memorial Museum
                </>
              }
            />

            <Milestone
              year="2007"
              event={
                <>
                  {/* July 26 - September 23, 2007 */}
                  <em>On Island: Women Artists</em> of Monhegan exhibition at
                  the University of New England
                </>
              }
            />
            <Milestone
              year="2009"
              event={
                <>
                  <em>Paintings & Collages</em> solo exhibition at the Island
                  Inn, Monhegan Island
                </>
              }
            />
          </MilestonesWrapper>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist2010sImg} alt="Kornbluth in 2010" />
          <DecadeHeading>2010s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="2010"
              event={
                <>
                  <em>Challenge, Wit and Wisdom: Three Maine Women Artists</em>{' '}
                  exhibition at the Pace Galleries
                </>
              }
            />
            <Milestone
              year="2010"
              event={
                <>
                  {/* January ? - February 28, 2010 */}
                  <em>Collage: Piecing It Together</em> exhibition at the
                  Portland Museum of Art
                </>
              }
            />
            <Milestone
              year="2010"
              event={
                <>
                  Miriam E. Halpern Memorial Award from the National Association
                  of Women Artists for <em>Genesis</em>
                </>
              }
            />
            <Milestone year="2013" event="Last summer on Monhegan Island" />
            <Milestone
              year="2013"
              event={
                <>
                  {/* January 2 – March 3, 2013 */}
                  <em>Maine Women Pioneers III: Homage</em> exhibition at the
                  University of New England
                </>
              }
            />
            <Milestone
              year="2013"
              event={
                <>
                  Best Work on Paper, <em>69th Annual Connecticut Artists</em>{' '}
                  exhibitions at the Slater Memorial Museum for{' '}
                  <em>Winter Landscape</em>
                </>
              }
            />
            <Milestone
              year="2014"
              event="Died on May 26 in Dayville, CT at the age of 93"
            />
          </MilestonesWrapper>
          <Row className="mt-3">
            <Col md={2} />
            <Col sm={6} md={4}>
              <Artwork
                className="mb-3 m-md-0"
                src={genesisImg}
                title="Genesis"
                medium="Collage on paper"
                dimensions='20" diameter'
              />
            </Col>
            <Col sm={6} md={4}>
              <Artwork
                src={winterLandscapeImg}
                title="Winter Landscape"
                medium="Collage on paper"
                dimensions='22 x 30"'
              />
            </Col>
            <Col md={2} />
          </Row>
        </DecadeWrapper>
        <Paragraph className="mt-4 text-center">
          See more artwork on the{' '}
          <Link to={Url.CollectionPage}>collection page</Link>.
        </Paragraph>
      </Col>
    </Row>
  </Page>
);

const DecadeWrapper = styled.div.attrs({ className: 'py-2' })``;

const DecadeImg = styled.img.attrs(({ alt }) => ({
  className: 'mb-3',
  title: alt,
}))`
  background: ${colors.white};
  border: 1px solid ${colors.lightGray};
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  height: 125px;
  width: 125px;

  ${media.md`
    height: 150px;
    width: 150px;
  `}
`;

const DecadeHeading = styled(Heading).attrs({
  as: 'h2',
  className: 'h4 text-center mb-3',
})`
  color: ${colors.gray};
`;

const MilestonesWrapper = ({ children }: { children: React.ReactNode }) => (
  <Row>
    <Col lg={2} />
    <Col lg={9}>{children}</Col>
    <Col lg={1} />
  </Row>
);

const MilestoneYear = styled(Span)`
  color: ${colors.darkGray};
  font-weight: 600;
`;

const Milestone = ({
  year,
  event,
}: {
  year: string;
  event: string | React.ReactNode;
}) => (
  <div className="mb-2" style={{ maxWidth: 775 }}>
    <MilestoneYear>{year}:</MilestoneYear> <Span>{event}</Span>
  </div>
);
