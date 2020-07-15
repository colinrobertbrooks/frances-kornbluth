import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => (
  <nav>
    <ul>
      <li>Frances Kornbluth</li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/collection">Collection</Link>
      </li>
    </ul>
  </nav>
);
