import React from 'react';
import { Container } from 'reactstrap';
import { useDocumentTitle, useScrollToTopOnMount } from '../../hooks';

interface IPageProps {
  className?: string;
  heading?: string;
  fluid?: boolean;
}

export const Page: React.FC<IPageProps> = ({
  className = 'mt-3',
  heading,
  fluid = false,
  children,
}) => {
  useDocumentTitle(
    heading ? `${heading} | Frances Kornbluth` : 'Frances Kornbluth'
  );
  useScrollToTopOnMount();

  return (
    <Container tag="main" className={className} fluid={fluid}>
      {heading && <h1>{heading}</h1>}
      {children}
    </Container>
  );
};
