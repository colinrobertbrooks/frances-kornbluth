import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { Url } from '../../constants';
import { colors, media, typography } from '../../styles';

// TODO: style, copyright, social
export const Footer: React.FC = () => (
  <Element>
    <Container className="text-center p-2">
      <div role="list" className="list-inline m-0">
        <div role="listitem" className="list-inline-item">
          <Link to={Url.HomePage}>Home</Link>
        </div>
        <div className="list-inline-item">|</div>
        <div role="listitem" className="list-inline-item">
          <Link to={Url.CopyrightPage}>Copyright</Link>
        </div>
        <div className="list-inline-item">|</div>
        <div role="listitem" className="list-inline-item">
          <Link to={Url.ContactPage}>Contact</Link>
        </div>
      </div>
    </Container>
  </Element>
);

const Element = styled.footer`
  background-color: ${colors.white};
  border-top: 1px solid ${colors.lightGray};
  font-family: ${typography.default};
  margin-top: 48px;
  width: 100%;

  ${media.lg`
    bottom: 0;
    margin-top: 0;
    position: fixed;
  `}
`;
