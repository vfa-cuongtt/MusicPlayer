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
  View,
  Image,
  Navigator
} from 'react-native';
import SplashView from './components/splashView.js';
import HomeView from './components/homeView.js'
import PlayView from './components/playView.js';

class MusicPlayer extends Component {
  renderScene(route,navigator){
    _navigator = navigator;
    switch (route.id) {
      case 'SplashView':
        return (
          <SplashView navigator={navigator} />);
      case 'HomeView':
        return (<HomeView navigator={navigator} />);
      case 'PlayView':
        return (<PlayView navigator={navigator}
          songObject={route.passProps.songObject}
          />);
        break;
      default:
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id:'HomeView'}}
        renderScene={this.renderScene}
      />
      // <Text>
      //   Hello
      // </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  img:{
    width:415,
    height:660
  }
});

AppRegistry.registerComponent('MusicPlayer', () => MusicPlayer);
