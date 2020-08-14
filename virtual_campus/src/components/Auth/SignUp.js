import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import "./SignUp.css";
import { FirebaseContext } from '../Firebase';

import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes.js';

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  year: '',
  major: '',
  classes: '',
  aboutyou: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { firstName, lastName, email, passwordOne, year, major, classes,
              aboutyou} = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            firstName,
            lastName,
            email,
            year,
            major,
            classes,
            aboutyou,
          });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {

  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };



  render() {

    const {
      firstName,
      lastName,
      email,
      passwordOne,
      passwordTwo,
      year,
      major,
      classes,
      aboutyou,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      firstName === '' ||
      lastName === '';

    const style = {
       height: '100vh',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center'
     };


    return (
      <form onSubmit={this.onSubmit}>
      <input
          name="firstName"
          value={firstName}
          onChange={this.onChange}
          type="text"
          placeholder="First Name"
        />
        <input
            name="lastName"
            value={lastName}
            onChange={this.onChange}
            type="text"
            placeholder="Last Name"
          />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <input
            name="year"
            value={year}
            onChange={this.onChange}
            type="text"
            placeholder="Year In School"
          />
        <input
            name="major"
            value={major}
            onChange={this.onChange}
            type="text"
            placeholder="Major(s)"
          />
        <input
            name="classes"
            value={classes}
            onChange={this.onChange}
            type="text"
            placeholder="Semester Class List (comma separated list)"
          />
        <textarea
            name="aboutyou"
            value={aboutyou}
            onChange={this.onChange}
            type="text"
            placeholder="A Couple Sentences About You"
          />

        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        >
        <h5 style={{color:"white"}}>
          Already Have an account? <Link to={ROUTES.SIGN_IN} style={{color:"white"}}>Sign In</Link>
        </h5>
        </div>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        >
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        </div>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
    <h5 style={{color:"white"}}>
      Don't have an account? <Link to={ROUTES.SIGN_UP} style={{color: "white"}}>Sign Up</Link>
    </h5>
  </div>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
