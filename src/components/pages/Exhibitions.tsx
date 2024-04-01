import { ExternalLink } from '../../router';
import { Page, H1, Heading, Paragraph, Divider } from './shared';

export const Exhibitions = () => (
  <Page title="Exhibitions">
    <H1>Exhibitions</H1>
    <Exhibit
      title="Generations: The Legacy of Mentors"
      dates="May 2 – June 9, 2024"
      location="Maine Art Gallery (Wiscasset, ME)"
      link="https://www.maineartgallerywiscasset.org/2024-exhibits"
    />
    <Divider />
    <Exhibit
      title="Women Artists of Monhegan Island: A Common Bond"
      dates="July 1 – September 30, 2024"
      location="Monhegan Museum of Art & History (Monhegan, ME)"
      link="https://monheganmuseum.org/upcoming"
    />
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
  <div>
    <Heading as="h2" color="gray" className="mb-1">
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
