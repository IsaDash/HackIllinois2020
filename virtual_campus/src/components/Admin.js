import React, { Component } from 'react';

//import { withFirebase } from './Firebase';
import "./SignUp.css";
import { withAuthorization } from './Session';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUID: this.props.firebase.auth.currentUser.uid,
      loading: false,
      users: [],
    };
    
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      console.log(usersObject[String(this.state.currentUID)]);

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      console.log(usersList);

      this.setState({
        users: usersList,
        loading: false,
      });
     
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;
console.log(this.props)
    return (
      <div>
        <h1>Admin</h1>

        {loading && <div>Loading ...</div>}
        {users.map(u => console.log('i am ', u.firstName))}
        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>First Name: </strong> {user.firstName}
        </span>
        <span>
          <strong>Last Name:</strong> {user.lastName}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Year:</strong> {user.year}
        </span>
        <span>
          <strong>Major:</strong> {user.major}
        </span>
        <span>
          <strong>Class List:</strong> {user.classes}
        </span>
        <span>
          <strong>About:</strong> {user.aboutyou}
        </span>

      </li>
    ))}
  </ul>
);

const condition =  authUser => {
  if (authUser) console.log(authUser.uid); return !!authUser};

export default withAuthorization(condition)(AdminPage);
