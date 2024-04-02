import {
  monhegan1995Img,
  onIsland2007Img,
  explorations2011Img,
  maineWomenPioneers2013Img,
  theMonheganWildlands2024Img,
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
      title="Art, Ecology, and the Resilience of a Maine Island: The Monhegan Wildlands"
      author=" Barry A. Logan, Jennifer Pye and Frank H. Goodyear III"
      year="2024"
      coverImg={theMonheganWildlands2024Img}
    />
    <Divider />
    <Publication
      title="Maine Women Pioneers III"
      author="University of New England Art Gallery"
      year="2013"
      coverImg={maineWomenPioneers2013Img}
    />
    <Divider />
    <Publication
      title="Frances Kornbluth: Explorations"
      author="Maire McArdle"
      year="2011"
      coverImg={explorations2011Img}
    />
    <Divider />
    <Publication
      title="On Island: Women Artists of Monhegan"
      author="University of New England Art Gallery"
      year="2007"
      coverImg={onIsland2007Img}
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
      <Heading as="h2" color="darkGray" className="h4 mb-1">
        {title}
      </Heading>
      <Paragraph className="mb-1">{author}</Paragraph>
      <Span className="small" color="gray">
        Published {year}
      </Span>
    </Col>
  </Row>
);
