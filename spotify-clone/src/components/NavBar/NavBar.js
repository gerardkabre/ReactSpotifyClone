import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = ({ location }) => (
  <Nav bsStyle="pills" stacked bsClass={'navBar'}>
    <NavItem componentClass={Link} href="/" to="/" /* active={location.pathname === '/'} */>
      Home Page
    </NavItem>
    <NavItem
      componentClass={Link}
      bsClass={'navBar__item'}
      href="/PlaylistsPage"
      to="/PlaylistsPage" /* active={location.pathname === '/economies'} */
    >
      Playlists
    </NavItem>
    <NavItem
      componentClass={Link}
      bsClass={'navBar__item'}
      href="/AboutPage"
      to="/AboutPage" /* active={location.pathname === '/economies'} */
    >
      About us
    </NavItem>
  </Nav>
);

export default NavBar;
