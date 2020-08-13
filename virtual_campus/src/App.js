import React from 'react';
import './App.css';
import Avatar from './components/Avatar'
import SignUp from './components/SignUp'
import Map from './components/Map'
import ClassmateInfo from './components/ClassmateInfo'


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (

        <Avatar />

      
    );
  }
  
}

export default App;