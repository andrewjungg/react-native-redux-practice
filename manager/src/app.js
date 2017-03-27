import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Helo
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
