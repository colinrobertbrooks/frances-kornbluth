import React from 'react';
import { colors, typography } from '../../styles';
import { Link, Url } from '../router';
import { styled, Page, Row, Col, H1, Paragraph } from './shared';

export const Wanted: React.FC = () => (
  <Page title="Wanted">
    <Row>
      <Col md={12}>
        <H1>Wanted</H1>
        <Paragraph>
          Here is some of the artwork we would like to add to the{' '}
          <Link to={Url.CollectionPage}>collection page</Link>:
        </Paragraph>
        <List>
          <ListItem>
            <i>Shelter Island Shore</i> (1950s) — casein, finished size
            unavailable
          </ListItem>
          <ListItem>
            <i>Ocean Song #2</i> (1950s) — oil, finished size unavailable
          </ListItem>
          <ListItem>
            <i>Rising Landscape</i> (1960s) — oil, finished size unavailable
          </ListItem>
          <ListItem>
            <i>Cove Wind</i> (1970s) — watercolor, finished size unavailable
          </ListItem>
          <ListItem>
            <i>Window to the Sea</i> (1980s) — unknown on paper, finished size
            unavailable
          </ListItem>
          <ListItem>
            <i>Rosebud #3 </i>(1985) — collage on paper, 22 x 30&quot;
          </ListItem>
          <ListItem>
            <i>Ritual (1986)</i> — collage on paper, 12 x 16&quot;
          </ListItem>
          <ListItem>
            <i>Transition #2</i> (1987) — collage on paper, 22 x 30&quot;
          </ListItem>
        </List>
        <Paragraph>
          If you can provide a medium- to high-quality JPEG image for any of
          these, then please <Link to={Url.ContactPage}>contact us</Link>.
        </Paragraph>
      </Col>
    </Row>
  </Page>
);

const List = styled.ul``;

const ListItem = styled.li.attrs({ className: 'mb-2' })`
  color: ${colors.black};
  font-family: ${typography.default};
`;
