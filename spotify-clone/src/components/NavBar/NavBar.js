import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './NavBar.css';

const albumImage = songDetails => {
  if (songDetails) {
    if (songDetails.album) {
      return <img src={songDetails.album.images[1].url} className="navBar__image" />;
    }
  }
};

const NavBar = ({ location, songDetails }) => (
  <Nav bsStyle="pills" stacked bsClass={'navBar'}>
    <div>
      <p className="NavBar__title">Your library </p>
      <NavItem componentClass={Link} href="/Callback" to="/Callback">
        Recently played
      </NavItem>
      <NavItem componentClass={Link} href="/AlbumsPage" to="/AlbumsPage">
        Albums
      </NavItem>
      <NavItem componentClass={Link} href="/SongsPage" to="/SongsPage">
        Songs
      </NavItem>
      <p className="NavBar__title">About </p>
      <NavItem componentClass={Link} href="/AboutPage" to="/AboutPage">
        About this app
      </NavItem>
    </div>
    {albumImage(songDetails)}
  </Nav>
);

export default NavBar;
