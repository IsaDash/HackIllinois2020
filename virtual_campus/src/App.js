import React from 'react';
import './App.css';
import Avatar from './components/Avatar'
import SignUp from './components/SignUp'

<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Virtual Campus

      </header>
    </div>
  );
=======
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
         <h1>TEST</h1> 
         <Avatar />
         <SignUp />
      </div>
      
    );
  }
  r
>>>>>>> db930817ce5e3f742938eecc0483f9043e12a9ff
}

export default App;