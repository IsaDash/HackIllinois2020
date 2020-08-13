import React from 'react';
import './App.css';
import Avatar from './components/Avatar'
import SignUp from './components/SignUp'
import Map from './components/Map'


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <Avatar />
        <Map /> 
    
      </div>
      
    );
  }
  
}

export default App;