import { EMAIL_ADDRESS } from '../../constants';
import { Link, Url } from '../../router';
import { media, HEADER_HEIGHT_PX, MAIN_PADDING_TOP_PX } from '../../styles';
import {
  styled,
  Page,
  Row,
  Col,
  H1,
  H2,
  Divider,
  Paragraph,
  Button,
} from './shared';

export const Contact = () => (
  <Page title="Contact">
    <Row>
      <Col md={9}>
        <H1>Contact</H1>
      </Col>
      <StickyCol md={3} className="text-center">
        <ContactButton>Contact Us</ContactButton>
      </StickyCol>
      <Col md={9}>
        <Divider className="d-md-none" />
        <H2 className="mb-2">Acquisitions</H2>
        <Paragraph>
          If you are interested in acquiring work by Frances Kornbluth, then
          please contact us.
        </Paragraph>
        <Divider />
        <H2 className="mb-2">Exhibitions</H2>
        <Paragraph>
          Some of the artwork on the{' '}
          <Link to={Url.CollectionPage}>collection page</Link> can be made
          available for public exhibition; please contact us to discuss
          availability and lending arrangements.
        </Paragraph>
        <Divider />
        <H2 className="mb-2">Reproductions</H2>
        <Paragraph>
          If you would like to reproduce any of Frances Kornbluth’s artwork for
          any purpose, please contact us. See the{' '}
          <Link to={Url.CopyrightPage}>copyright page</Link> for more
          information.
        </Paragraph>
      </Col>
      <Col md={3} />
    </Row>
  </Page>
);

const StickyCol = styled(Col)`
  ${media.md`
    position: sticky;
    top: ${HEADER_HEIGHT_PX + MAIN_PADDING_TOP_PX + 14}px;
    z-index: 999;
  `}
`;

const ContactButton = styled(Button).attrs({
  className: 'd-block d-md-inline my-2 mt-md-1',
  href: `mailto:${EMAIL_ADDRESS}`,
})``;
