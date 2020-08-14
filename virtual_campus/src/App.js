import React from 'react';
import './App.css';
import Avatar from './components/Avatar'
import SignUp from './components/SignUp'
import Map from './components/Map'
import ClassmateInfo from './components/ClassmateInfo'


import { withAuthorization } from './components/Session';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
        <div>
           <Avatar />
        <Map />
        {/* <ClassInfo></ClassInfo> */}
        </div>
    );
  }

}

const condition =  authUser => {
  if (authUser) console.log(authUser.uid); return !!authUser};

export default withAuthorization(condition)(App);
//export default App;
