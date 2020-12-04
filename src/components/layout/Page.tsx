import React from 'react';
import { useDocumentTitle, useScrollToTopOnMount } from '../../hooks';
import {
  NAVBAR_HEIGHT_PX,
  FOOTER_MARGIN_TOP_PX,
  FOOTER_MIN_HEIGHT_PX,
  media,
} from '../../styles';
import { styled, Container } from '../styled';

const DEFAULT_CLASS_NAME = 'mt-4';

interface IPageProps {
  className?: string;
  title?: string;
  fluid?: boolean;
}

export const Page: React.FC<IPageProps> = ({
  className = DEFAULT_CLASS_NAME,
  title,
  fluid = false,
  children,
}) => {
  useDocumentTitle(
    title ? `${title} | Frances Kornbluth` : 'Frances Kornbluth'
  );
  useScrollToTopOnMount();

  return (
    <Main className={className} fluid={fluid}>
      {children}
    </Main>
  );
};

const Main = styled(Container).attrs({ tag: 'main' })`
  ${media.lg`
    min-height: calc(
      100vh -
      ${({ className }: { className: string }) => {
        const marginTop = className === DEFAULT_CLASS_NAME ? 24 : 0;
        return (
          NAVBAR_HEIGHT_PX +
          marginTop +
          FOOTER_MARGIN_TOP_PX +
          FOOTER_MIN_HEIGHT_PX
        );
      }}px);
  `}
`;
