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


class MusicPlayer extends Component {
  renderScene(route,navigator){
    switch (route.name) {
      case 'splashView':
        return (
          <SplashView
            clickHome={()=>{navigator.push({name:'homeView'})}}
          />);
      case 'homeView':
        return (<HomeView/>);
        break;
      default:

    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name:'splashView'}}
        renderScene={this.renderScene}
      />
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
