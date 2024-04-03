import styled from 'styled-components';
import { Container } from 'reactstrap';
import { useDocumentTitle, useScrollToTopOnMount } from '../../hooks';
import {
  NAVBAR_HEIGHT_PX,
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

export const Page = ({
  className = 'pt-4',
  title,
  fluid = false,
  children,
}: PageProps) => {
  useDocumentTitle(
    title ? `${title} | Frances Kornbluth` : 'Frances Kornbluth'
  );
  useScrollToTopOnMount();

  return (
    <Main className={className} fluid={fluid}>
      <MainAnchor />
      {children}
    </Main>
  );
};

const Main = styled(Container).attrs({ tag: 'main' })`
  margin-top: ${HEADER_HEIGHT_PX}px;

  ${media.lg`
    min-height: calc(100vh - ${
      HEADER_HEIGHT_PX + FOOTER_MARGIN_TOP_PX + FOOTER_MIN_HEIGHT_PX
    }px);

    &.home-page {
      min-height: calc(100vh - ${NAVBAR_HEIGHT_PX + 10}px);
    }
  `}
`;
