import { selfPortraitImg } from 'assets/artwork';
import { Link, Url } from 'router';
import { Page, H1, Paragraph, Artwork } from './shared';

export const Biography = () => (
  <Page
    title="Biography"
    description="Biography of Frances Kornbluth (1920 - 2014), an Abstract Expressionist painter who spent 57 summers painting on Monhegan Island off the coast of Maine."
  >
    <H1>Biography</H1>
    <Artwork
      className="mb-4"
      src={selfPortraitImg}
      title="Self Portrait"
      medium="Watercolor on paper"
      dimensions='14 x 19"'
    />
    <Paragraph>
      Frances Kornbluth was born in New York City on July 26, 1920. As a child,
      Kornbluth developed a passion for the piano, and graduated from Brooklyn
      College in 1940 with a degree in music. During World War II, she married.
      While her husband was overseas, she worked in Washington, D.C. for the
      Lend Lease Organization and then the Office of Strategic Services. After
      the war, Kornbluth and her husband moved to Merrick, NY where they had two
      children.
    </Paragraph>
    <Paragraph>
      In 1947, Kornbluth enrolled in an art workshop on Long Island and began
      painting figures and still lives in the studio. In 1955, she enrolled in
      the Brooklyn Museum Art School, where she studied for four years with
      William Kienbusch and Reuben Tam. During this time, Kornbluth painted in
      and out of the studio, including the Freeport marshes and Jones Beach. Her
      work became increasingly abstract. Kienbusch encouraged Kornbluth to
      exhibit at the City Center Gallery, and Tam encouraged her to exhibit at
      the Brooklyn Museum. Tam also introduced her to Maine’s Monhegan Island in
      1957. She would later credit Tam with: “defining me as the artist I had
      never envisioned becoming.” Kornbluth also studied with Robert Richenburg
      at the Pratt Institute, where she received a master’s degree in 1962. In
      1969, Kornbluth and her family moved to North Grosvenordale, CT, where she
      would maintain a winter studio for the rest of her life.
    </Paragraph>
    <Paragraph>
      For 57 years, Kornbluth spent her summers on Monhegan Island, renting in
      different locations until 1974 when she purchased a cottage in Lobster
      Cove and established a permanent summer studio. Imagery from
      Monhegan—including Lobster Cove, White Head and Ice Pond—recur in
      different ways throughout her work. On the island, Kornbluth's friends and
      contemporaries included Lynne Drexler and Elena Jahn.
    </Paragraph>
    <Paragraph>
      The Dominican Republic is another location that recurs in Kornbluth’s
      work. She was an artist in residence at Altos de Chavon, an artists&apos;
      village in La Romana, during the fall of 1985.
    </Paragraph>
    <Paragraph>
      On May 26, 2014, Kornbluth died in Dayville, CT at the age of 93. During
      her lifetime, she was a member of the National Association of Women
      Artists (NAWA), a charter member of the National Museum of Women in the
      Arts (NMWA) and a founding member of Women Artists of Monhegan Island
      (WAMI).
    </Paragraph>
    <Paragraph className="text-center">
      See more details on the <Link to={Url.TimelinePage}>timeline page</Link>.
    </Paragraph>
  </Page>
);
