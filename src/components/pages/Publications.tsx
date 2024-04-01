import {
  monhegan1995Img,
  explorations2011Img,
  maineWomenPioneers2013Img,
  onIsland2013Img,
} from '../../assets/pages/publications';
import {
  Page,
  Row,
  Col,
  Heading,
  H1,
  Paragraph,
  Span,
  Divider,
} from './shared';

export const Publications = () => (
  <Page title="Publications">
    <H1>Publications</H1>
    <Publication
      title="On Island: Women Artists of Monhegan"
      author="University of New England Art Gallery"
      year="2013"
      coverImg={onIsland2013Img}
    />
    <Divider />
    <Publication
      title="Maine Women Pioneers III"
      author="University of New England Art Gallery"
      year="2012"
      coverImg={maineWomenPioneers2013Img}
    />
    <Divider />
    <Publication
      title="Explorations"
      author="Maire McArdle"
      year="2011"
      coverImg={explorations2011Img}
    />
    <Divider />
    <Publication
      title="Monhegan: The Artists' Island"
      author="Jane & Will Curtis and Frank Lieberman"
      year="1995"
      coverImg={monhegan1995Img}
    />
  </Page>
);

const Publication = ({
  title,
  author,
  year,
  coverImg,
}: {
  title: string;
  author: string;
  year: string;
  coverImg: string;
}) => (
  <Row>
    <Col md={3}>
      <img
        alt={title}
        className="img-thumbnail w-100 mb-3 mb-md-0"
        src={coverImg}
      />
    </Col>
    <Col md={9}>
      <Heading as="h2" color="gray" className="text-start mb-1">
        {title}
      </Heading>
      <Paragraph className="mb-1">{author}</Paragraph>
      <Span className="small" color="darkGray">
        Published {year}
      </Span>
    </Col>
  </Row>
);
