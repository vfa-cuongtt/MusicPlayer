import React , {Component} from 'react';
import {
  StyleSheet,
  View,Navigator,
  Text,Image,TextInput,TouchableOpacity,ListView,ActivityIndicatorIOS
} from 'react-native';
var Sound = require('react-native-sound');

var mp3;
var selectPlay = true;
class PlayView extends Component {
  constructor(props) {
    super(props);
    // start when run PlayView
    this.state={
      imgPlay:require('../images/icon/play@2x.png')
    };

    // API play song
    mp3 = new Sound(this.props.songObject.path , '', (error) => {
      if(error) {
        console.log('Failed to load sound', error);
      } else {
        console.log('Load sound success');
        console.log('duration in seconds: ' + mp3.getDuration() +
       ' number of channels: ' + mp3.getNumberOfChannels());
      }
    });

  }

  // Function: Play Song
  playSong(){
    if(selectPlay) {
      mp3.play();
      selectPlay = false;
      this.setState({
        imgPlay:require('../images/icon/pause@2x.png')
      });
    } else {
      mp3.pause();
      selectPlay = true;
      this.setState({
        imgPlay:require('../images/icon/play@2x.png')
      });
    }

  }

  //Function: Repeat Song
  repeatSong(){

  }

  // Function: Rewind Song
  rewindSong(){

  }

  // Function: Next Song
  nextSong(){

  }

  // Function: Random Song
  randomSong(){

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
          <View style={{backgroundColor:'yellow',flex:1/10,}}>
            <Text style={{fontSize:20,marginTop:20,paddingLeft:10}}>
              {this.props.songObject.name}
            </Text>
          </View>
          <View style={{backgroundColor:'grey',flex:2/4,}}>
            <Image
              source={require('../images/noo.jpg')}
            />
          </View>
          <View style={{backgroundColor:'pink',flex:1/4,flexDirection:'row'}}>
            <View style={styles.soundButton}>
              <TouchableOpacity>
                <Image
                  style={{width:30,height:30}}
                  source={require('../images/icon/repeat@2x.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.soundButton}>
              <TouchableOpacity>
              <Image
                style={{width:30,height:30}}
                source={require('../images/icon/rewind@2x.png')}
              />
              </TouchableOpacity>
            </View>

            <View style={styles.soundButton}>
              <TouchableOpacity onPress={this.playSong.bind(this)}>
              <Image
                style={{width:30,height:30}}
                source={this.state.imgPlay}
              />
              </TouchableOpacity>
            </View>

            <View style={styles.soundButton}>
              <TouchableOpacity >
              <Image
                style={{width:30,height:30}}
                source={require('../images/icon/next@2x.png')}
              />
              </TouchableOpacity>
            </View>

            <View style={styles.soundButton}>
              <TouchableOpacity>
              <Image
                style={{width:30,height:30}}
                source={require('../images/icon/random@2x.png')}
              />
              </TouchableOpacity>
            </View>

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
  soundButton:{
    paddingTop:50,
    paddingLeft:20,
    flex:1
  }

});
module.exports =  PlayView;
