import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import MainScreen from './Screens/Main';
import EditScreen from './Screens/Edit';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            title="TODO"
            initial={true}
            key="mainScreen"
            animation='fade'
            component={MainScreen}
          />
          <Scene 
            title="EDIT TODO"
            key="editScreen"
            animation='fade'
            component={EditScreen}
          />
        </Scene>
      </Router>
    );
  }
}