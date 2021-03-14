import React from 'react';
import { selfPortraitImg } from '../../assets/artwork';
import { Link, Url } from '../../router';
import { Page, Row, Col, H1, Paragraph, Artwork } from './shared';

export const Biography: React.FC = () => (
  <Page title="Biography">
    <Row>
      <Col md={12}>
        <H1>Biography</H1>
        <Artwork
          className="mb-4"
          src={selfPortraitImg}
          title="Self Portrait"
          medium="Watercolor on paper"
          dimensions='14 x 19"'
        />
        <Paragraph>
          Frances Kornbluth was born in New York City on July 26, 1920. As a
          child, Kornbluth developed a passion for the piano, and graduated from
          Brooklyn College in 1940 with a degree in music. During World War II,
          she married, and—while her husband was overseas—worked in Washington
          DC for the Lend Lease Organization and then the Office of Strategic
          Services. After the war, Kornbluth and her husband moved to Merrick,
          NY where they had two children.
        </Paragraph>
        <Paragraph>
          In 1947, Kornbluth enrolled in an art workshop on Long Island and
          began painting figures and still lives in the studio. In 1955, she
          enrolled in the Brooklyn Museum School, where she studied with Reuben
          Tam (1916 - 1991) and William Kienbusch (1914 - 1980) for four years.
          During this time, Kornbluth painted in and out of the studio—including
          the Freeport marshes and Jones Beach—and her work became increasingly
          abstract. It was Tam who encouraged Kornbluth to exhibit her work at
          the Brooklyn Museum and the City Center Gallery, in addition to
          introducing her to Maine’s Monhegan Island in 1957—she would later
          credit Tam with: “defining me as the artist I had never envisioned
          becoming.” Kornbluth also studied with Robert Richenburg (1917 - 2006)
          at the Pratt Institute, where she received a master’s degree in 1962.
          In 1969, Kornbluth and her family moved from Merrick, NY to North
          Grosvenordale, CT, where she would maintain a winter studio for the
          rest of her life.
        </Paragraph>
        <Paragraph>
          For 57 years, Kornbluth spent her summers on Monhegan Island, renting
          in different locations until 1974 when she purchased a cottage in
          Lobster Cove and established a permanent summer studio. Imagery from
          Monhegan Island—including Lobster Cove, Burnt Head, White Head and Ice
          Pond—recur in different ways throughout her work.
        </Paragraph>
        <Paragraph>
          The Dominican Republic is another location that recurs in Kornbluth’s
          work. She was an artist in residence at Altos de Chavon, an
          artists&apos; village in La Romana, during the fall of 1985.
        </Paragraph>
        <Paragraph>
          On May 26, 2014, Kornbluth died in Dayville, CT at the age of 93.
          During her lifetime, she was a member of the National Association of
          Women Artists, a charter member of the National Museum of Women in the
          Arts and a member of Women Artists of Monhegan Island.
        </Paragraph>
        <Paragraph className="text-center">
          See more details on the{' '}
          <Link to={Url.TimelinePage}>timeline page</Link>.
        </Paragraph>
      </Col>
    </Row>
  </Page>
);
