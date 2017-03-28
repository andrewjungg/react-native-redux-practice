import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCTubCoWIHvqaA1HrS_D6iJ_52kFIC1H9U',
      authDomain: 'manager-f5559.firebaseapp.com',
      databaseURL: 'https://manager-f5559.firebaseio.com',
      storageBucket: 'manager-f5559.appspot.com',
      messagingSenderId: '61950963516'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
