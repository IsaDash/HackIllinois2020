import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import AdminPage from './Admin';
import HomePage from '../App'
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { withAuthentication } from './Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />
      <Route path={ROUTES.HOME} component={HomePage}/>
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);


export default withAuthentication(App);
