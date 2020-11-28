import React from 'react';
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
    <main>
      <h1>{heading}</h1>
      {children}
    </main>
  );
};
