import { Link, Url, ExternalLink } from 'router';
import { Page, H1, Paragraph, Small } from './shared';

export const Accessibility = () => (
  <Page
    title="Accessibility"
    description="Accessibility statement for the website of Frances Kornbluth (1920 - 2014), an Abstract Expressionist painter who spent 57 summers painting on Monhegan Island off the coast of Maine."
  >
    <H1>Accessibility</H1>
    <Paragraph>
      We are committed to making the information on our website accessible to
      all visitors, including people with disabilities. If you encounter content
      that you are unable to access due to a{' '}
      <ExternalLink href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">
        web accessibility issue
      </ExternalLink>
      , or have any suggestions on accessibility improvements, then please{' '}
      <Link to={Url.ContactPage}>contact us</Link>.
    </Paragraph>
    <Small color="gray">
      Late in life, Kornbluth developed macular degeneration and utilized
      assistive technology.
    </Small>
  </Page>
);
