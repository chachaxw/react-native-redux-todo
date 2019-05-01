import codePush from "react-native-code-push";
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store';
import App from './src/components/';

class todo extends Component {
  componentDidMount() {
    codePush.sync({installMode: codePush.InstallMode.IMMEDIATE});
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('todo', () => codePush(todo));