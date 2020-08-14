import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navigation from './Navigation';
import SignUpPage from './Auth/SignUp';
import SignInPage from './Auth/SignIn';
import AdminPage from './Auth/Admin';
import HomePage from '../App';
import ClassInfo from './Classroom/ClassInfo';
import Grainger from '../components/Grainger';
import Union from '../components/IlliniUnion';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { withAuthentication } from './Session';
import IlliniUnion from '../components/IlliniUnion';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />
      <Route exact path={ROUTES.ROOT} component={HomePage}/>
      <Route path={ROUTES.HOME} component={HomePage}/>
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.CLASSINFO} component={ClassInfo} />
      <Route path={ROUTES.GRAINGER} component={Grainger} />
      <Route path={ROUTES.UNION} component={IlliniUnion} />

    </div>
  </Router>
);


export default withAuthentication(App);
