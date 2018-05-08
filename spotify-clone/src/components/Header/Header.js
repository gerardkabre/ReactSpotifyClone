import React from 'react';
import './Header.css';

const Header = ({ user }) => {
  if (user)
    return (
      <div className="header">
        <div className="header__BackButton">
          <h1>
            <a style={{ color: '#1DB954' }} href="https://github.com/gerardkabre/ReactSpotifyClone">
              Github link
            </a>
          </h1>
        </div>
        <div className="header__Profile">
          {user.images ? <img src={user.images[0].url} /> : null}
          <h2>{user.display_name}</h2>
        </div>
      </div>
    );
  else {
    return (
      <div className="header">
        <div className="header__BackButton" />
        <div className="header__Profile">
          <img />
          <h2>Log in</h2>
        </div>
      </div>
    );
  }
};

export default Header;
