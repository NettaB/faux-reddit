import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import mainReducer from './reducers/reducer';
import Main from './pages/main/main';

const store = createStore(mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Main/>
        </div>
      </Provider>
    );
  }
}

export default App;
