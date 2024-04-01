import { ExternalLink, Link, Url } from '../../router';
import { Page, H1, H2, Heading, Paragraph, Small, Divider } from './shared';

export const Exhibitions = () => (
  <Page title="Exhibitions">
    <H1>Exhibitions</H1>
    <H2 className="mb-4">Upcoming</H2>
    <Exhibit
      title="Generations: The Legacy of Mentors"
      dates="May 2 – June 9, 2024"
      location="Maine Art Gallery (Wiscasset, ME)"
      link="https://www.maineartgallerywiscasset.org/2024-exhibits"
    />
    <Exhibit
      title="Women Artists of Monhegan Island: A Common Bond"
      dates="July 1 – September 30, 2024"
      location="Monhegan Museum of Art & History (Monhegan, ME)"
      link="https://monheganmuseum.org/upcoming"
    />
    <Divider />
    <Small color="gray">
      Exhibitions on this page are posthumous. For earlier exhibitions, see the{' '}
      <Link to={Url.TimelinePage}>timeline page</Link>.
    </Small>
  </Page>
);

const Exhibit = ({
  title,
  dates,
  location,
  link,
}: {
  title: string;
  dates: string;
  location: string;
  link: string;
}) => (
  <div className="mb-4">
    <Heading as="h3" color="darkGray" className="h4 mb-1">
      {title}
    </Heading>
    <Paragraph className="mb-1">
      {dates} | {location}
    </Paragraph>
    <Paragraph>
      <ExternalLink href={link}>More Information</ExternalLink>
    </Paragraph>
  </div>
);
