import React from 'react';
import styled from 'styled-components';
import {
  artist1950s,
  artist1960s,
  artist1970s,
  artist1980s,
  artist1990s,
  artist2000s,
  artist2010s,
} from '../../assets/pages/timeline';
import { colors } from '../../styles';
import { Page, Row, Col, Divider, Heading, H1, Span } from './shared';

export const Timeline: React.FC = () => (
  <Page title="Timeline">
    <Row>
      <Col md={12}>
        <H1>Timeline</H1>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist1950s} alt="Kornbluth in 1958" />
          <DecadeHeading>1950s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="1955"
              event="Enrolled in the Brooklyn Museum Art School, studying with William Kienbusch and Reuben Tam"
            />
            <Milestone year="1957" event="First visit to Monhegan Island" />
            <Milestone
              year="1958"
              event="Solo exhibition: Watercolors & Drawings at the Brooklyn Museum"
            />
            <Milestone
              year="1958"
              event=" Brooklyn and Long Island Artists exhibition at the Brooklyn Museum"
            />
            <Milestone
              year="1958"
              event='M. Grumbacher Prize from the National Society of Painters in Casein for "Shelter Island Shore"'
            />
            <Milestone
              year="1958"
              event='Honorable Mention (Oil) at the New York City Center Gallery for "November"'
            />
            <Milestone
              year="1959"
              event={`Honorable Mention (Oil) at the New York City Center Gallery for "Summer's Vocabulary #1"`}
            />
          </MilestonesWrapper>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist1960s} alt="Kornbluth in the 1960s" />
          <DecadeHeading>1960s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="1960"
              event='First Prize (Oil) at the New York City Center Gallery for "Ocean Song #2"'
            />
            <Milestone
              year="1961"
              event="Solo exhibition: Paintings at Hofstra College"
            />
            <Milestone
              year="1961"
              event='First Prize, 12th Annual Long Island Artists exhibition at Hofstra College for "Still Life/Interior"'
            />
            <Milestone
              year="1961"
              event={`Special Mention Award, Norfolk Museum's American Drawing Annual XVIII for "The Lamp"`}
            />
            <Milestone
              year="1961"
              event='Medal of Honor and Catherine and Henry J. Gainsman Prize (Watercolor) from the National Association of Women Artists for "Rock, Sea and Sky"'
            />
            <Milestone
              year="1962"
              event="Masters Degree from the Pratt Institute; studied with Robert Richenburg"
            />
            <Milestone
              year="1962"
              event="Solo exhibition: Collages & Constructions at the Pratt Institute"
            />
            <Milestone
              year="1963"
              event="158th Annual exhibition at the Pennsylvania Academy of Fine Arts"
            />
            <Milestone
              year="1964"
              event="Aileen O. Webb Prize (Watercolor) from the National Association of Women Artists"
            />
            <Milestone
              year="1968"
              event='Medal of Honor and the Elizabeth R. Fulda Memorial Prize (Oil) from the National Association of Women Artists for "Rising Landscape"'
            />
            <Milestone
              year="1969"
              event="Moved from Merrick, NY to North Grosvenordale, CT"
            />
          </MilestonesWrapper>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist1970s} alt="Kornbluth in 1978" />
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
              event="Artists From Monhegan Exhibition at the Allentown Museum"
            />
            <Milestone
              year="1974"
              event="Four Painters and a Sculptor exhibition at the Worcester Art Museum"
            />
            <Milestone
              year="1975"
              event='Charles Woodbury Memorial Prize (Watercolor) from the National Association of Women Artists for "Cove Wind"'
            />
            <Milestone
              year="1977"
              event='Helen Henningsen Memorial Prize (Oil) from the National Association of Women Artists for "Island Path #2"'
            />
          </MilestonesWrapper>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist1980s} alt="Kornbluth in 1989" />
          <DecadeHeading>1980s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="1982"
              event='Elizabeth Morse Genius Foundation Prize (Works on Paper) from the National Association of Women Artists for "Window to the Sea"'
            />
            <Milestone
              year="1985"
              event="Artist in Residence at Altos De Chavon, Dominican Republic"
            />
            <Milestone
              year="1989"
              event='John Carl Georgo Memorial Award from the National Association of Women Artists for "Changing Light, Monhegan Ice Pond"'
            />
          </MilestonesWrapper>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist1990s} alt="Kornbluth in 1997" />
          <DecadeHeading>1990s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="1992"
              event='Miriam E. Halpern Memorial Award (Works on Paper) from the National Association of Women Artists for "Rosebud #3"'
            />
            <Milestone
              year="1996"
              event="Solo exhibition: Overview, Four Decades at the University of Connecticut"
            />
          </MilestonesWrapper>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist2000s} alt="Kornbluth in 2001" />
          <DecadeHeading>2000s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="2000"
              event="Lifetime Achievement Award from Brooklyn College"
            />
            <Milestone
              year="2000"
              event="Visual Language of American Religion exhibition at the Bauer Art Museum"
            />
            <Milestone
              year="2000"
              event='First Prize (Painting), 57th Annual Connecticut Artists exhibition at the Slater Memorial Museum for "November"'
            />
            <Milestone
              year="2001"
              event="On Island: Women Artists of Monhegan exhibition at the University of New England"
            />
            <Milestone
              year="2001"
              event="Solo exhibition: Constructions & Collages at the Slater Memorial Museum"
            />
            <Milestone
              year="2007"
              event="Monhegan: The Abstracted Island exhibition at the Bates College Museum of Art"
            />
            <Milestone
              year="2009"
              event="Solo exhibition: Paintings & Collages at the Island Inn, Monhegan Island"
            />
          </MilestonesWrapper>
        </DecadeWrapper>
        <Divider />
        <DecadeWrapper>
          <DecadeImg src={artist2010s} alt="Kornbluth in 2010" />
          <DecadeHeading>2010s</DecadeHeading>
          <MilestonesWrapper>
            <Milestone
              year="2010"
              event="Challenge, Wit and Wonder: Three Maine Women Artists exhibition at the Pace Galleries"
            />
            <Milestone
              year="2010"
              event="Collage: Piecing It Together exhibition at the Portland Museum of Art"
            />
            <Milestone
              year="2010"
              event='Miriam E. Halpern Memorial Award (Works on Paper) from the National Association of Women Artists for "Genesis"'
            />
            <Milestone year="2013" event="Last summer on Monhegan Island" />
            <Milestone
              year="2013"
              event="Maine Women Pioneers III: Homage exhibition at the University of New England"
            />
            <Milestone
              year="2013"
              event='Best Work on Paper, 69th Annual Connecticut Artists Exhibition at the Slater Memorial Museum for "Winter Landscape"'
            />
            <Milestone
              year="2014"
              event="Died on May 26 in Dayville, CT at the age of 93"
            />
          </MilestonesWrapper>
        </DecadeWrapper>
      </Col>
    </Row>
  </Page>
);

const DecadeWrapper = styled.div.attrs({ className: 'py-2' })``;

const DecadeImg = styled.img.attrs({ className: 'mb-3' })`
  background: ${colors.white};
  border: 1px solid ${colors.lightGray};
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  height: 125px;
  width: 125px;
`;

const DecadeHeading = styled(Heading).attrs({
  as: 'h2',
  className: 'h4 text-center mb-3',
})`
  color: ${colors.gray};
`;

const MilestonesWrapper: React.FC = ({ children }) => (
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

const Milestone = ({ year, event }: { year: string; event: string }) => (
  <div className="mb-1" style={{ maxWidth: 775 }}>
    <MilestoneYear>{year}:</MilestoneYear> <Span>{event}</Span>
  </div>
);
