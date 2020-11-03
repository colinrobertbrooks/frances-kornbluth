import React from 'react';
import { useDocumentTitle, useScrollToTopOnMount } from '../../hooks';
import Header from './Header';

interface IPageLayoutProps {
  documentTitle?: string;
  heading: string;
}

export const PageLayout: React.FC<IPageLayoutProps> = ({
  documentTitle,
  heading,
  children,
}) => {
  useDocumentTitle(`${documentTitle || heading} | Frances Kornbluth`);
  useScrollToTopOnMount();

  return (
    <>
      <Header />
      <main>
        <h1>{heading}</h1>
        {children}
      </main>
    </>
  );
};
