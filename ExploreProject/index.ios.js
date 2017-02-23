/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';

var MOCKED_DATA = [
  {title: 'Deep Thought #1', content: "If there's no 'there' there, where is it and what's there?"},
];
var REQUEST_URL = 'http://localhost:3000/users';

export default class ExploreProject extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      //  thought: MOCKED_DATA[0],
      users: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/users`)
      .then(res => {
        // console.log(res.data[0].firstName)
        const users = res.data
        this.setState({ users });
        console.log(this.state.users)

      });
  }

  render() {
     return (
         <View style={styles.container}>
        {this.state.users.map((m,i) => {
          return <Text key={i}>
          Name: {m.firstName} {m.lastName}
          </Text>
        })}
     </View>
   );
  }
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit index.ios.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       Press Cmd+R to reload,{'\n'}
    //       Cmd+D or shake for dev menu
    //     </Text>
    //   </View>
    // );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ExploreProject', () => ExploreProject);
