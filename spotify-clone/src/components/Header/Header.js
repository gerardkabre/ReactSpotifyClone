import React from 'react';
import './Header.css';

const Header = ({ user }) => {

  if (user != null)
    return (
      <div className="header">
        <div className="header__BackButton">
          <h1><a style={{color: '#1DB954'}} href="https://github.com/gerardkabre/ReactSpotifyClone">Github link</a></h1>
        </div>
        <div className="header__Profile">
          <img src={user.images[0].url} />
          <h2>{user.display_name}</h2>
        </div>
      </div>
    );
    else { return (
        <div className="header">
        <div className="header__BackButton">
          <img src="./goback.jpg" />
        </div>
        <div className="header__Profile">
          <img  />
          <h2>Log in</h2>
        </div>
      </div>
    )}
};

export default Header;
