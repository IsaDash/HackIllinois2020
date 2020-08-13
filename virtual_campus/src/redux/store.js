import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import HackIllinoisData from './modules/HackIllinoisData'

const store = createStore(
    HackIllinoisData
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)