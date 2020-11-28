import React from 'react';
import { Container } from 'reactstrap';
import { useDocumentTitle, useScrollToTopOnMount } from '../../hooks';

interface IPageProps {
  documentTitle?: string;
  heading: string;
}

export const Page: React.FC<IPageProps> = ({
  documentTitle,
  heading,
  children,
}) => {
  useDocumentTitle(`${documentTitle || heading} | Frances Kornbluth`);
  useScrollToTopOnMount();

  return (
    <Container tag="main" className="mt-3">
      <h1>{heading}</h1>
      {children}
    </Container>
  );
};
