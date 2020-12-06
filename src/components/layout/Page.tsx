import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { useDocumentTitle, useScrollToTopOnMount } from '../../hooks';
import {
  NAVBAR_HEIGHT_PX,
  FOOTER_MARGIN_TOP_PX,
  FOOTER_MIN_HEIGHT_PX,
  media,
} from '../../styles';

interface IPageProps {
  className?: string;
  title?: string;
  fluid?: boolean;
}

export const Page: React.FC<IPageProps> = ({
  className = 'pt-4',
  title,
  fluid = false,
  children,
}) => {
  useDocumentTitle(
    title ? `${title} | Frances Kornbluth` : 'Frances Kornbluth'
  );
  useScrollToTopOnMount();

  return (
    <Main id="main" className={className} fluid={fluid}>
      {children}
    </Main>
  );
};

const Main = styled(Container).attrs({ tag: 'main' })`
  margin-top: ${NAVBAR_HEIGHT_PX}px;

  ${media.lg`
    min-height: calc(100vh - ${
      NAVBAR_HEIGHT_PX + FOOTER_MARGIN_TOP_PX + FOOTER_MIN_HEIGHT_PX
    }px);
  `}
`;
