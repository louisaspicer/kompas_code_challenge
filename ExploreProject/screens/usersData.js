import React, { Component } from 'react';
import {
  Dimensions,
Image,
StyleSheet,
Text,
TouchableOpacity,
View,
ScrollView,
TouchableHighlight
} from 'react-native';
import axios from 'axios';
import { defaultStyles } from './styles';

const { width, height } = Dimensions.get('window');
const cols = 2, rows = 8;

export default class Users extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/users`)
      .then(res => {
        const users = res.data
        this.setState({ users });
        console.log(this.state.users)

      });
  }

  render() {
     return (
       <View style={ styles.container }>
      <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.pop() }>
        <Text style={ styles.buttonText }>Go Back</Text>
      </TouchableHighlight>
      <Text style={ styles.heading }>USERS</Text>
        <ScrollView contentContainerStyle={styles.scrollContent}>
        {this.state.users.map((m,i) => <Text style={styles.textContainer} key={i}>
        Name: {m.firstName} {m.lastName}{"\n"}
        Age: {m.age}{"\n"}
        City: {m.city}
        </Text>)}
        </ScrollView>
      </View>
       );
      }
}

  const styles = StyleSheet.create({

  container: {
    paddingTop: 20,
  },

  heading: {
   paddingTop: 10,
   fontWeight: 'bold',
   textAlign: 'center',
   fontSize:20,
   marginBottom:10
   },

   button: {
   height:20,
   justifyContent: 'center',
   backgroundColor: '#efefef',
   alignItems: 'center',
   justifyContent: 'center'
   },

   buttonText: {
   fontSize:10
 },

  textContainer: {
    fontSize:10,
    paddingTop: 2,
    marginLeft: 2,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 20,
    width: (width - 10) / cols - 10,
  },

  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',  
  });
