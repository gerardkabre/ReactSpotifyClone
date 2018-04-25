import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';

import './App.css';

import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import PlaylistsPage from './Pages/PlaylistsPage.js';
import NewReleasesPage from './Pages/NewReleasesPage.js';

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
              <Route exact path="/" component={HomePage} />
              <Route exact path="/AboutPage" component={AboutPage} />
              <Route exact path="/PlaylistsPage" component={PlaylistsPage} />
              <Route exact path="/NewReleasesPage" component={NewReleasesPage} />
            </Col>
          </Row>

          <Row className="show-grid" >
            <Col xs={12} md={12} style={{ height: '10vh' }}>
              <Footer />
            </Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
