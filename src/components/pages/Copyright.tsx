import React from 'react';
import { Page } from '../layout';
import { Link, Url } from '../router';
import { Row, Col, Heading, Paragraph } from '../styled';

export const Copyright: React.FC = () => (
  <Page title="Copyright">
    <Row>
      <Col md={12}>
        <Heading className="mb-3">Copyright</Heading>
        <Paragraph>
          All photos on this website are copyrighted material and all rights are
          reserved. The content of this site is for personal and/or educational
          use only. Neither text nor images may be reproduced in any form
          without permission. You may download content solely for personal,
          non-commercial purposes. You may not modify or further reproduce the
          content for any purpose whatsoever. You must request and obtain
          express permission for all other uses of content.
        </Paragraph>
        <Paragraph>
          Visit our <Link to={Url.ContactPage}>contact page</Link> for more
          information.
        </Paragraph>
      </Col>
    </Row>
  </Page>
);
