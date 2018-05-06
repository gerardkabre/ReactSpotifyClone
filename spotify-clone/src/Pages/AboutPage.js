import React from 'react';

import Container from '../components/Container/Container';
import TitleSubtitle from '../components/Title&Subtitle/TitleSubtitle';

const AboutPage = () => (
  <Container>
    <TitleSubtitle title="About Page" subtitle="What is this site about?" />
    <div style={{color: 'grey'}}>
    <p> This is an open source app showcasing a spotify 'clone' with basic functionality, 
      uses your spotify user and retrives your recently palyed songs, albums, all the songs
      you have saved, and allows you to play a sample of them form your browser.
    </p>
    <p> Built with React, Redux, Thunk, React-Router and React-bootstrap</p>
    <p> You can see the code here: <a style={{color: '#1DB954'}} href="https://github.com/gerardkabre/ReactSpotifyClone">Github</a></p>
    </div>
  </Container>
);

export default AboutPage;
