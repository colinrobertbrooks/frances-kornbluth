import { useMemo } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
  useNavigate,
  Location as RouterLocation,
} from 'react-router-dom';
import styled from 'styled-components';

export { Router, Routes, Route, Link, NavLink, useLocation };

export enum Url {
  HomePage = '/',
  // artist
  BiographyPage = '/biography',
  TimelinePage = '/timeline',
  StatementsPage = '/statements',
  QuotesPage = '/quotes',
  VideosPage = '/videos',
  // artwork
  AvailableArtworkPage = '/collection?status=Available',
  CollectionPage = '/collection',
  ReviewsPage = '/reviews',
  BooksPage = '/books',
  // footer
  ContactPage = '/contact',
  CopyrightPage = '/copyright',
  AccessibilityPage = '/accessibility',
  WantedPage = '/wanted',
}

export const artistUrls = [
  Url.BiographyPage,
  Url.TimelinePage,
  Url.StatementsPage,
  Url.QuotesPage,
];

export const artworkUrls = [Url.CollectionPage, Url.ReviewsPage, Url.BooksPage];

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``;

export enum ExternalUrl {
  Facebook = 'https://www.facebook.com/franceskornbluth',
  Instagram = 'https://www.instagram.com/franceskornbluth',
}

// temporary solution for use-query-params + react-router-dom v6 (https://github.com/pbeshai/use-query-params/issues/196)
export const RouteAdapter: React.FunctionComponent<{
  children: React.FunctionComponent<{
    history: {
      replace(location: Location): void;
      push(location: Location): void;
    };
    location: RouterLocation;
  }>;
}> = ({ children }) => {
  const navigate = useNavigate();
  const routerLocation = useLocation();

  const adaptedHistory = useMemo(
    () => ({
      replace(location: Location) {
        // @ts-expect-error temporary solution per comment above
        navigate(location, { replace: true, state: location.state });
      },
      push(location: Location) {
        // @ts-expect-error temporary solution per comment above
        navigate(location, { replace: false, state: location.state });
      },
    }),
    [navigate]
  );
  if (!children) return null;
  return children({ history: adaptedHistory, location: routerLocation });
};
