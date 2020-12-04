import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation,
} from 'react-router-dom';

export { Router, Switch, Route, Link, NavLink, useLocation };

export enum ExternalUrl {
  Facebook = 'https://www.facebook.com/franceskornbluth',
  Instagram = 'https://www.instagram.com/franceskornbluth',
}

export enum Url {
  HomePage = '/',
  // artist
  BiographyPage = '/biography',
  TimelinePage = '/timeline',
  StatementsPage = '/statements',
  QuotesPage = '/quotes',
  // artwork
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
