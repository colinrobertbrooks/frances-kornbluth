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
  WantedPage = '/wanted',
}

export const artistUrls = [
  Url.BiographyPage,
  Url.TimelinePage,
  Url.StatementsPage,
  Url.QuotesPage,
];

export const artworkUrls = [Url.CollectionPage, Url.ReviewsPage, Url.BooksPage];
