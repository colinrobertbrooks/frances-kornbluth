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
      <ul className="list-inline m-0">
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

const Element = styled.footer.attrs({ className: 'mt-5 mt-lg-0' })`
  border-top: 1px solid ${colors.lightGray};
  font-family: ${typography.default};
  width: 100%;

  ${media.lg`
    bottom: 0;
    position: absolute;
  `};
`;
