import React from 'react';
import styled, { css } from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import {
  colors,
  focusOutlineCSS,
  getRems,
  media,
  typography,
} from '../../styles';
import { Link, Url, ExternalUrl } from '../router';
import { FacebookSvg, InstagramSvg } from '../svg';

export const Footer: React.FC = () => (
  <Element>
    <Container className="pt-2 pb-2 pb-lg-1">
      <Row>
        <Col lg={6} className="mb-3 m-lg-0 text-center">
          <PageLinkList>
            <PageLinkListItem>
              <PageLink to={Url.HomePage}>Home</PageLink>
            </PageLinkListItem>
            <PageLinkListItemDivider />
            <PageLinkListItem>
              <PageLink to={Url.CopyrightPage}>Copyright</PageLink>
            </PageLinkListItem>
            <PageLinkListItemDivider />
            <PageLinkListItem>
              <PageLink to={Url.ContactPage}>Contact</PageLink>
            </PageLinkListItem>
          </PageLinkList>
        </Col>
        <Col lg={3} className="mb-1 m-lg-0 text-center text-lg-right">
          <SocialLink
            href={ExternalUrl.Facebook}
            title="Follow Frances Kornbluth on Facebook"
            className="mr-3"
          >
            <FacebookIcon />
          </SocialLink>
          <SocialLink
            href={ExternalUrl.Instagram}
            title="Follow @franceskornbluth on Instagram"
          >
            <InstagramIcon />
          </SocialLink>
        </Col>
        <Col lg={3} className="order-lg-first text-center text-lg-left">
          <Copyright>© {new Date().getFullYear()} Frances Kornbluth</Copyright>
        </Col>
      </Row>
    </Container>
  </Element>
);

const Element = styled.footer`
  background-color: ${colors.trueWhite};
  border-top: 1px solid ${colors.border};
  font-family: ${typography.default};
  margin-top: 48px;
  width: 100%;

  ${media.lg`
    bottom: 0;
    margin-top: 0;
    position: fixed;
  `}
`;

const linkCSS = css`
  color: ${colors.gray};

  &:hover,
  &:focus {
    color: ${colors.darkGray};
  }

  &:focus {
    ${focusOutlineCSS}
  }
`;

const PageLinkList = styled.div.attrs({
  className: 'list-inline m-0',
  role: 'list',
})``;

const PageLinkListItem = styled.div.attrs({
  className: 'list-inline-item',
  role: 'listitem',
})``;

const PageLinkListItemDivider = styled.div.attrs({
  className: 'list-inline-item',
  children: '|',
})`
  color: ${colors.lightGray};
  font-size: ${getRems(14)};
  line-height: ${getRems(19)};
`;

const PageLink = styled(Link)`
 ${linkCSS}
  font-size: ${getRems(14)};
  letter-spacing: ${getRems(1)};
  line-height: ${getRems(19)};
`;

const socialIconCSS = css`
  height: ${getRems(24)};
`;

const FacebookIcon = styled(FacebookSvg)`
  ${socialIconCSS}
`;

const InstagramIcon = styled(InstagramSvg)`
  ${socialIconCSS}
`;

const SocialLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  ${linkCSS}
  cursor: pointer;
  display: inline-block;
`;

const Copyright = styled.small`
  color: ${colors.lightGray};
`;
