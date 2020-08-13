import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: 'AIzaSyCc3cvS28p4Tg5eu8_S2V053ObUrtrZUoA',
  authDomain: "virtualcampus-af21c.firebaseapp.com",
  databaseURL: "https://virtualcampus-af21c.firebaseio.com",
  projectId: "virtualcampus-af21c",
  storageBucket: "virtualcampus-af21c.appspot.com",
  messagingSenderId: "345064182294",
};


class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
}

export default Firebase;
