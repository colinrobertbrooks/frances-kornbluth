import React from 'react';
import { Navbar } from '../navigation';
import { useDocumentTitle, useScrollToTopOnMount } from '../../hooks';

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
      <Navbar />
      <main>
        <h1>{heading}</h1>
        {children}
      </main>
    </>
  );
};
