import { Link, Url } from '../../router';
import { Page, Row, Col, H1, Paragraph } from './shared';

export const NotFound = () => (
  <Page title="Not Found">
    <Row>
      <Col md={12}>
        <H1>Not Found</H1>
        <Paragraph>That page doesn&#39;t exist.</Paragraph>
        <Paragraph>
          <Link to={Url.HomePage}>Back to home</Link>
        </Paragraph>
      </Col>
    </Row>
  </Page>
);
