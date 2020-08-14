import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import {withFirebase} from '../Firebase'

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuthWithFB  loggedinUser={authUser}/> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

class  NavigationAuth  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData : ''
    };

  }
  componentDidMount() {
  const obj = this;
  var ref = this.props.firebase.user(this.props.loggedinUser.uid);

  ref.once("value")
    .then(function(snapshot) {
      var user = snapshot.val();
      obj.setState({userData:user})
    })
  }

  render() {

    const {userData} = this.state;
    const name = userData?userData.firstName +" " + userData.lastName:''
  return (
    <div>
      <SignOutButton />
      <h1> Welcome to the UIUC campus, {name}!</h1>
    </div>
  )


}
}
const NavigationAuthWithFB = withFirebase(NavigationAuth)
const NavigationNonAuth = () => (
  <div />

);

export default Navigation;
