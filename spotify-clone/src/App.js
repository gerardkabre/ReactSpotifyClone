import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';

import './App.css';

import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={2}>
                <NavBar />
              </Col>
              <Col xs={12} md={10}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/AboutPage" component={AboutPage} />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <Footer />
              </Col>
            </Row>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
