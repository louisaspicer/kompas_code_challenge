// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   ScrollView,
//   Text,
//   View
// } from 'react-native';
// import axios from 'axios';
//
// export default class ExploreProject extends Component {
//   constructor(props, context) {
//     super(props, context);
//
//     this.state = {
//       users: []
//     };
//   }
//
//   componentDidMount() {
//     axios.get(`http://localhost:3000/users`)
//       .then(res => {
//         // console.log(res.data[0].firstName)
//         const users = res.data
//         this.setState({ users });
//         console.log(this.state.users)
//
//       });
//   }
//
//   render() {
//      return (
//        <View>
//          <ScrollView>
//          {this.state.users.map((m,i) => <Text key={i}>Name: {m.firstName} {m.lastName}</Text>)}
//      </ScrollView>
//      </View>
//    );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import { AppRegistry } from 'react-native';
import App from './src/app';

AppRegistry.registerComponent('ExploreProject', () => App);
