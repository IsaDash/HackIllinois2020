import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Avatar from './components/Avatar'
import Map from './components/Map'
import ClassInfo from './components/ClassInfo'
import Grainger from './components/Grainger'
import * as serviceWorker from './serviceWorker';

import Firebase, { FirebaseContext } from './components/Firebase';

// ReactDOM.render(
//   <React.StrictMode>
//     <div>
//     <Avatar />
//     <Map />
//     </div>
//
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
     <App /> 
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
