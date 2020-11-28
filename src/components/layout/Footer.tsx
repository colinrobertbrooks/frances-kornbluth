import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { Url } from '../../constants';

// TODO: style, fixed on desktop only, copyright, social, creator,
export const Footer: React.FC = () => (
  <Element>
    <Container className="text-center">
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link to={Url.HomePage}>Home</Link>
        </li>
        <li className="list-inline-item">|</li>
        <li className="list-inline-item">
          <Link to={Url.CopyrightPage}>Copyright</Link>
        </li>
        <li className="list-inline-item">|</li>
        <li className="list-inline-item">
          <Link to={Url.ContactPage}>Contact</Link>
        </li>
      </ul>
    </Container>
  </Element>
);

const Element = styled.footer`
  bottom: 0;
  position: absolute;
  width: 100%;
`;
