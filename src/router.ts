import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation,
} from 'react-router-dom';

export { Router, Switch, Route, Link, NavLink, useLocation };

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
