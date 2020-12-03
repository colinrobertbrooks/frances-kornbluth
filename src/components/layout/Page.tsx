import React from 'react';
import { Container } from 'reactstrap';
import { useDocumentTitle, useScrollToTopOnMount } from '../../hooks';

interface IPageProps {
  className?: string;
  title?: string;
  fluid?: boolean;
}

export const Page: React.FC<IPageProps> = ({
  className = 'mt-4',
  title,
  fluid = false,
  children,
}) => {
  useDocumentTitle(
    title ? `${title} | Frances Kornbluth` : 'Frances Kornbluth'
  );
  useScrollToTopOnMount();

  return (
    <Container tag="main" className={className} fluid={fluid}>
      {children}
    </Container>
  );
};
