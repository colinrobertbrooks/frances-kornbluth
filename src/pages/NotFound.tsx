import { Link, Url } from 'router';
import { Page, H1, Paragraph } from './shared';

export const NotFound = () => (
  <Page title="Not Found">
    <H1>Not Found</H1>
    <Paragraph>That page doesn&#39;t exist.</Paragraph>
    <Paragraph>
      <Link to={Url.HomePage}>Back to home</Link>
    </Paragraph>
  </Page>
);
