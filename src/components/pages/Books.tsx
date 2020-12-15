import React from 'react';
import { explorationsImg } from '../../assets/pages/books';
import { EMAIL_ADDRESS } from '../../constants';
import { styled, Page, Row, Col, H1, Paragraph, Span, Button } from './shared';

export const Books: React.FC = () => (
  <Page title="Books">
    <Row>
      <Col md={12}>
        <H1>Books</H1>
        <Paragraph as="h2" color="gray">
          <i>Explorations</i> (2011)
        </Paragraph>
        <Row>
          <Col md={6}>
            <Book src={explorationsImg} alt="Explorations" />
          </Col>
          <Col md={5}>
            <Paragraph>
              <i>Explorations</i> by Maire McArdle highlights some of Frances
              Kornbluth&apos;s larger series in various mediums spanning seven
              decades.
            </Paragraph>
            <BookInfo>28 pages</BookInfo>
            <BookInfo>55 color illustrations</BookInfo>
            <BookInfo>8.5 x 8.5&quot;</BookInfo>
            <BookInfo className="mb-3">softcover</BookInfo>
            <Paragraph className="mb-3" color="darkGray">
              <i>$20 each plus shipping</i>
            </Paragraph>
            <div className="d-flex">
              <Button
                color="green"
                className="d-block d-md-inline"
                href={`mailto:${EMAIL_ADDRESS}?subject=Explorations by Maire McArdle&body=I want to purchase a copy of Explorations by Maire McArdle.`}
              >
                Purchase
              </Button>
            </div>
          </Col>
          <Col md={2} />
        </Row>
      </Col>
    </Row>
  </Page>
);

const Book = styled.img.attrs(({ alt }) => ({
  className: 'img-thumbnail mb-3 mb-md-0',
  title: alt,
}))``;

const BookInfo = styled(Span).attrs({ color: 'gray' })`
  display: block;
`;
