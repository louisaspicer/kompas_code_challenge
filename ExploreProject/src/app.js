import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';
import UserData from './usersData';

const RouteMapper = (route, navigator) => {
  if (route.name === 'users') {
    return <UserData navigator={navigator} />;
  }
};

export default class App extends Component {
  render() {
    return (
      <Navigator
        // Default to movies route
        initialRoute={{ name: 'users' }}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    );
  }
}
