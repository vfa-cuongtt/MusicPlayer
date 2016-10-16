import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,Image,
  TouchableOpacity
} from "react-native";

export default class SplashView extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image source={require('../images/layout.png')} style={styles.backgroundImage}>
          <View style={styles.text} >
            <Text >MUSIC PLAYER</Text>
            <TouchableOpacity onPress={this.props.clickHome}>
              <Text >Home Screen</Text>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position : 'absolute',
  },
  img:{
    flex: 1,
    width:415,
    height:660
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    position : 'absolute',
  },
  text:{
    flex: 1,
    marginTop:150,
    marginLeft:110


  }
});
