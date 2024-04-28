import { EMAIL_ADDRESS } from '../../constants';
import { ExternalLink, ExternalUrl, Link, Url } from '../../router';
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
        <ContactUsButton />
      </StickyCol>
      <Col md={9}>
        <Divider className="d-md-none" />
        <H2 className="mb-2">Acquisitions</H2>
        <Paragraph>
          If you are interested in acquiring work by Frances Kornbluth, then
          please <ContactUsLink />.
        </Paragraph>
        <Divider />
        <H2 className="mb-2">Exhibitions</H2>
        <Paragraph>
          If you are interested in exhibiting work by Frances Kornbluth, then
          please <ContactUsLink />. Some of the work on the{' '}
          <Link to={Url.CollectionPage}>collection page</Link> is available for
          lending.
        </Paragraph>
        <Divider />
        <H2 className="mb-2">Reproductions</H2>
        <Paragraph>
          If you are interested in reproducing work by Frances Kornbluth, then
          please <ContactUsLink />. See the{' '}
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

const ContactUsButton = styled(Button).attrs({
  children: 'Contact Us',
  className: 'd-block d-md-inline my-2 mt-md-1',
  href: `mailto:${EMAIL_ADDRESS}`,
})``;

const ContactUsLink = styled(ExternalLink).attrs({
  children: 'contact us',
  href: `mailto:${EMAIL_ADDRESS}`,
})``;
