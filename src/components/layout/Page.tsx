import styled from 'styled-components';
import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet-async';
import { useScrollToTopOnMount } from '../../hooks';
import {
  HEADER_HEIGHT_PX,
  FOOTER_MARGIN_TOP_PX,
  FOOTER_MIN_HEIGHT_PX,
  media,
} from '../../styles';
import { MainAnchor } from './skip-to-main';

type PageProps = {
  className?: string;
  title?: string;
  description?: string;
  fluid?: boolean;
  children: React.ReactNode;
};

const DEFAULT_TITLE = 'Frances Kornbluth';
const DEFAULT_DESCRIPTION =
  'Frances Kornbluth (1920 - 2014) was an Abstract Expressionist painter who spent 57 summers painting on Monhegan Island off the coast of Maine.';

export const Page = ({
  className = 'pt-4',
  title,
  description,
  fluid = false,
  children,
}: PageProps) => {
  useScrollToTopOnMount();

  const metaTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  const metaDescription = description ?? DEFAULT_DESCRIPTION;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />
      </Helmet>
      <Main className={className} fluid={fluid}>
        <MainAnchor />
        {children}
      </Main>
    </>
  );
};

const Main = styled(Container).attrs({ tag: 'main' })`
  margin-top: ${HEADER_HEIGHT_PX}px;

  ${media.lg`
    min-height: calc(100vh - ${
      HEADER_HEIGHT_PX + FOOTER_MARGIN_TOP_PX + FOOTER_MIN_HEIGHT_PX
    }px);

  `}
`;
