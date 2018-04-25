import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
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
          <Grid fluid style={{padding: 0}}>
            <div style={{ height: '90vh' }}>
              <Row className="show-grid" style={{ height: '100%' }}>
                <Col xs={2} md={2} style={{ height: '100%', padding:0 }}>
                  <NavBar />
                </Col>
                <Col xs={10} md={10} className="content" >
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/AboutPage" component={AboutPage} />
                </Col>
              </Row>
            </div>
            <div style={{ height: '10vh' }}>
              <Row className="show-grid" style={{ height: '100%' }}>
                <Col xs={12} md={12} style={{ height: '100%' }}>
                  <Footer />
                </Col>
              </Row>
            </div>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
