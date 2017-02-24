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
        initialRoute={{ name: 'Home' }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        renderScene={RouteMapper}
      />
    );
  }
}

AppRegistry.registerComponent('ExploreProject', () => App);
