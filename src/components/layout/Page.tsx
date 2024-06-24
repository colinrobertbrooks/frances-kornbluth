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
  fluid?: boolean;
  children: React.ReactNode;
};

const DEFAULT_TITLE = 'Frances Kornbluth';

export const Page = ({
  className = 'pt-4',
  title,
  fluid = false,
  children,
}: PageProps) => {
  useScrollToTopOnMount();

  const metaTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
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
