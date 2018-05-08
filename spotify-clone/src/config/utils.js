import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default (PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (this.props.user ? <Component {...props} /> : <Redirect to="/" />)} />
));

