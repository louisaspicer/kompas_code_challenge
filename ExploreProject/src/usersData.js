import React, { Component } from 'react';
import {
  Dimensions,
Image,
StyleSheet,
Text,
TouchableOpacity,
View,
ScrollView
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
        // console.log(res.data[0].firstName)
        const users = res.data
        this.setState({ users });
        console.log(this.state.users)

      });
  }

  render() {
     return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
        {this.state.users.map((m,i) => <Text style={styles.textContainer} key={i}>
        Name: {m.firstName} {m.lastName}{"\n"}
        Age: {m.age}{"\n"}
        


        </Text>)}
        </ScrollView>
      </View>
   );
  }
}

  const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
  },

  textContainer: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },

  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  }
  });
