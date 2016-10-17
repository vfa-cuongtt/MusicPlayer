import React , {Component} from 'react';
import {
  StyleSheet,
  View,Navigator,
  Text,Image,TextInput,TouchableOpacity,ListView,ActivityIndicatorIOS
} from 'react-native';


class PlayView extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={{marginTop:20,marginLeft:110,}}>
              <Text>MUSIC PLAYER </Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>

          <TextInput
               style={styles.textInput}
               onChangeText={(text) => this.setState({text})}
               value={this.state.text} />

              <Image
                style={{width:50,height:30,marginTop:15}}
                source={require('../images/layout.png')}
              />

          </View>
        </View>

        <View style={styles.bottom}>
          <View style={{backgroundColor:'yellow',flex:1/3,}}>
            <Text style={{fontSize:30}}>
              {this.props.songObject.name}
            </Text>
          </View>
          <View style={{backgroundColor:'grey',flex:2/3,}}>
            <Image
              style={{width:50,height:50}}
              source={require('../images/pikachu.jpg')}
            />
          </View>
          <View style={{backgroundColor:'pink',flex:1/3,}}>

          </View>


        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  top:{
    flex:1/3,
    backgroundColor:'red'

  },
  bottom:{
    flex:2,
    backgroundColor:'green'
  },
  topMenu:{
    flexDirection:'row',
    justifyContent:'center'
  },
  menu:{
    flex:1,borderWidth:1,borderColor:'gray',alignItems:'center', justifyContent:'center' ,height:30
  },
  listItem:{
    padding:10,
    borderBottomWidth:1,
    borderColor:'gray',
    flexDirection:'row'
  },

  text:{
    alignItems: 'center',
    paddingTop:10,
    marginLeft:100,

  },
  textInput:{
    height:30,
    flex:1,
    borderColor:'gray',
    borderWidth:1,
    marginTop:15
  },
  bao:{
    flexDirection:'row'
  }

});
module.exports =  PlayView;
