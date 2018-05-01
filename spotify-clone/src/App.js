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
  render() {
    return (
      <Router>
        <Grid fluid style={{ padding: 0 }}>
          <Row className="show-grid" style={{ height: '90vh' }}>
            <Col xs={2} md={2} style={{ height: '100%', padding: 0 }}>
              <NavBar />
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
            <Col xs={12} md={12} style={{ height: '10vh' }}>
              <Footer />
            </Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(App);
