import { Link, Url, ExternalLink } from '../../router';
import { Page, Row, Col, H1, Paragraph, Small } from './shared';

export const Accessibility = () => (
  <Page title="Accessibility">
    <Row>
      <Col md={12}>
        <H1>Accessibility</H1>
        <Paragraph>
          We are committed to making the information on our website accessible
          to all visitors, including people with disabilities. If you encounter
          content that you are unable to access due to a{' '}
          <ExternalLink href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">
            web accessibility issue
          </ExternalLink>
          , or have any suggestions on accessibility improvements, please{' '}
          <Link to={Url.ContactPage}>contact us</Link>.
        </Paragraph>

        <Small color="gray" className="font-italic">
          Late in life, Frances developed macular degeneration and utilized
          assistive technology.
        </Small>
      </Col>
    </Row>
  </Page>
);
