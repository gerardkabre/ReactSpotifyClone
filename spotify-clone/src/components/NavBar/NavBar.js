import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = ({ location }) => (
  <Nav bsStyle="pills" stacked>
    <NavItem componentClass={Link} href="/AboutPage" to="/AboutPage" /* active={location.pathname === '/economies'} */>
      About Page
    </NavItem>
    <NavItem componentClass={Link} href="/" to="/" /* active={location.pathname === '/'} */>
      Home Page
    </NavItem>
  </Nav>
);

export default NavBar;
