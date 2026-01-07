import { ExternalLink, Link, Url } from '../router';
import { Page, H1, H2, Heading, Paragraph, Small, Divider } from './shared';

export const Exhibitions = () => (
  <Page
    title="Exhibitions"
    description="Upcoming, current and past exhibitions of artwork by Frances Kornbluth (1920 - 2014), an Abstract Expressionist painter who spent 57 summers painting on Monhegan Island off the coast of Maine."
  >
    <H1>Exhibitions</H1>
    {/*
     <H2 className="mb-4">Current</H2>
    <Divider />
    */}
    <H2 className="mb-4">Upcoming</H2>
    <Paragraph>No upcoming exhibitions.</Paragraph>
    <Divider />
    <H2 className="mb-4">Past</H2>
    <Exhibition
      title="Frances Kornbluth: Paintings of the 1950s"
      dates="September 8 – December 31, 2025"
      location="J. Kenneth Fine Art (Shelburne, VT)"
    />
    <Exhibition
      title="Art, Ecology, and the Resilience of a Maine Island: The Monhegan Wildlands"
      dates="July 1 – September 30, 2025"
      location="Monhegan Museum of Art & History (Monhegan, ME)"
      link="https://www.pressherald.com/2025/08/29/see-the-landscape-of-monhegan-island-through-the-eyes-of-artists/"
      linkText="Review by Megan Gray"
    />
    <Exhibition
      title="Art, Ecology, and the Resilience of a Maine Island: The Monhegan Wildlands"
      dates="December 12, 2024 - June 1, 2025"
      location="Bowdoin College Museum of Art (Brunswick, ME)"
      link="https://www.bowdoin.edu/news/2025/04/moved-to-preserve.html"
      linkText="Review by Jessica Skwire Routhier"
    />
    <Exhibition
      title="Nocturne"
      dates="September 12 – October 20, 2024"
      location="Maine Art Gallery (Wiscasset, ME)"
    />
    <Exhibition
      title="A Common Bond: Women Artists of Monhegan Island"
      dates="July 1 – September 30, 2024"
      location="Monhegan Museum of Art & History (Monhegan, ME)"
      link="https://www.islandinstitute.org/working-waterfront/righting-a-wrong-monhegans-women-artists-get-their-due/"
      linkText="Review by Carl Little"
    />
    <Exhibition
      title="Generations: The Legacy of Mentors"
      dates="May 2 – June 9, 2024"
      location="Maine Art Gallery (Wiscasset, ME)"
    />
    <Divider />
    <Small color="gray">
      Exhibitions on this page are posthumous. For selected earlier exhibitions,
      see the <Link to={Url.TimelinePage}>timeline page</Link>.
    </Small>
  </Page>
);

const Exhibition = ({
  title,
  dates,
  location,
  link,
  linkText,
}: {
  title: string;
  dates: string;
  location: string;
  link?: string;
  linkText?: string;
}) => (
  <div className="mb-4">
    <Heading as="h3" color="darkGray" className="h4 mb-1">
      {title}
    </Heading>
    <Paragraph className="mb-2">
      {dates} | {location}
    </Paragraph>
    {link && (
      <Paragraph>
        <ExternalLink href={link}>
          {linkText ?? 'More Information'}
        </ExternalLink>
      </Paragraph>
    )}
  </div>
);
