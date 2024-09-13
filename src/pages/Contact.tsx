import { EMAIL_ADDRESS } from 'consts';
import { ExternalLink, ExternalUrl, Link, Url } from 'router';
import { colors, media, HEADER_HEIGHT_PX, MAIN_PADDING_TOP_PX } from 'styles';
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
  <Page
    title="Contact"
    description="Artwork for sale, exhibition and reproduction by Frances Kornbluth, an Abstract Expressionist painter who spent 57 summers painting on Monhegan Island off the coast of Maine."
  >
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
          To learn about artwork by Frances Kornbluth that is available for
          sale, please contact:
          <AcquisitionsList>
            <AcquisitionsListItem>
              <ExternalLink href={ExternalUrl.GarveyRita}>
                Garvey Rita Art & Antiques
              </ExternalLink>
            </AcquisitionsListItem>
            <AcquisitionsListItem>
              <ExternalLink href={ExternalUrl.JKenneth}>
                J. Kenneth Fine Art
              </ExternalLink>
            </AcquisitionsListItem>
          </AcquisitionsList>
        </Paragraph>
        <Divider />
        <H2 className="mb-2">Exhibitions</H2>
        <Paragraph>
          If you are interested in exhibiting artwork by Frances Kornbluth, then
          please <ContactUsLink />. Some of the artwork on the{' '}
          <Link to={Url.CollectionPage}>collection page</Link> is available for
          lending.
        </Paragraph>
        <Divider />
        <H2 className="mb-2">Reproductions</H2>
        <Paragraph>
          If you are interested in reproducing artwork by Frances Kornbluth,
          then please <ContactUsLink />. See the{' '}
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

const AcquisitionsList = styled.ul`
  display: grid;
  gap: 8px;
  margin-top: 8px;
`;

const AcquisitionsListItem = styled.li`
  &::marker {
    color: ${colors.gray};
  }
`;
