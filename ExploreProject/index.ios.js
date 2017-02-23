import React, { Component } from 'react';
import { AppRegistry,  Navigator } from 'react-native';

import UserData from './screens/usersData';
import PlaceData from './screens/placesData';
import Home from './screens/home';

const RouteMapper = (route, navigator) => {
  if (route.name === 'Users') {
    return <UserData navigator={navigator} />;
  }
  if(route.name == 'Home') {
     return <Home navigator={navigator} />
  }
  if(route.name == 'Places') {
     return <PlaceData navigator={navigator} />
  }
};

export default class App extends Component {
  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        // Default to movies route
        initialRoute={{ name: 'Home' }}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    );
  }
}

AppRegistry.registerComponent('ExploreProject', () => App);
