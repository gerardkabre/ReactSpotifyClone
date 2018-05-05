/*
* audioControl function is all the logic related to playing songs in the browser. 
* Looks in the state if an audio control button is pulsed and updates the audio object
* of the app accordingly. Components get the methods related to interacting with the audio
* controller thanks at the HOC AudioController, who gives them action dispatchers
* to avoid having to pass down the same methods component after component.
*/

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

import AboutPage from './Pages/AboutPage';
import Login from './Pages/Login';
import PlaylistsPage from './Pages/PlaylistsPage.js';
import NewReleasesPage from './Pages/NewReleasesPage.js';
import HomePage from './Pages/HomePage.js';
import AlbumsPage from './Pages/AlbumsPage.js';

import './App.css';

class App extends Component {
  audioControl = () => {
    if (this.props.playButton) {
      if (this.audio) this.audio.pause();
      this.audio = new Audio(this.props.songDetails.preview_url);
      this.audio.play();
    }
    if (this.props.pauseButton) {
      this.audio.pause();
    }
    if (this.props.resumeButton) {
      this.audio.play();
    }
  };

  render() {
    this.audioControl();
    return (
      <Router>
        <Grid fluid style={{ padding: 0 }}>
          <Row className="show-grid" style={{ height: '87vh' }}>
            <Col xs={2} md={2} style={{ height: '100%', padding: 0 }}>
              <NavBar songDetails={this.props.songDetails} />
            </Col>
            <Col xs={10} md={10} className="content">
              <Header user={this.props.user} />
              <Route exact path="/" component={Login} />
              <Route path="/callback" component={HomePage} />
              <Route path="/AlbumsPage" component={AlbumsPage} />
              <Route path="/AboutPage" component={AboutPage} />
              <Route path="/PlaylistsPage" component={PlaylistsPage} />
              <Route path="/NewReleasesPage" component={NewReleasesPage} />
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={12} style={{ height: '13vh' }}>
              <Footer isPlaying={this.props.isPlaying} songDetails={this.props.songDetails} />
            </Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    isPlaying: state.song.isPlaying,
    songDetails: state.song.songDetails,
    playButton: state.song.playButton,
    pauseButton: state.song.pauseButton,
    resumeButton: state.song.resumeButton
  };
};

export default connect(mapStateToProps)(App);
