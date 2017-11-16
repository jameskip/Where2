import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Image style={styles.container} source={require('./Assets/bg.png')}>
      <Text>
        What's up?
      </Text>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover'
  },
});


AppRegistry.registerComponent('Where2', () => App);
