import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';
import axios from 'axios';
import UserData from './usersData';
import PlaceData from './placesData';

export default class Home extends Component {

  _navigateToUsers() {
  	this.props.navigator.push({
    	name: 'Users'
    })
  }

  _navigateToPlaces() {
  	this.props.navigator.push({
    	name: 'Places'
    })
  }

  render() {
     return (
       <View style={ styles.container }>
       <Text style={ styles.heading }>EXPLORE</Text>
      <TouchableHighlight style={ styles.button } onPress={ () => this._navigateToUsers() }>
        <Text style={ styles.buttonText }>USERS</Text>
      </TouchableHighlight>
      <Text>{"\n"}</Text>
     <TouchableHighlight style={ styles.button } onPress={ () => this._navigateToPlaces() }>
       <Text style={ styles.buttonText }>PLACES</Text>
     </TouchableHighlight>
      </View>
   );
  }
}

  var styles = StyleSheet.create({
  container: {
    flex: 1,
   	marginTop: 80
  },
   heading: {
    fontWeight: 'bold',
    textAlign: 'center',
  	fontSize:22,
    marginBottom:10
  },
  button: {
  	height:60,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
  	fontSize:20
  }
});
