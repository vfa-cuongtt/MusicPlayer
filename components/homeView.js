import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,Image,TextInput,TouchableOpacity,ListView,ActivityIndicatorIOS,Navigator
} from 'react-native';

var RNFS = require('react-native-fs');
var DATA = new Array();


class HomeView extends Component {
  // load data from Bundle
  loadData(callback){
    RNFS.readDir(RNFS.MainBundlePath + '/mp3files')
    .then((result) => {
      // Load file and push into array DATA
      for (var i = 0; i < result.length; i++) {
        DATA.push(result[i]);
      }
      console.log('DATA',DATA);
      callback(DATA);
      this.setState({
        dataList:this.state.dataSource.cloneWithRows(DATA),
         isLoading: false
      });
    })
    .catch((err) => {
      console.log(err.message, err.code);
      return false;
    });
  }

  // tap List Song menu
  clickListSong(){
    console.log('Click List Song');

  }
  // tap Album menu
  clickAlbum(){
    console.log('Click Album');
  }

  //tap Singer menu
  clickSinger(){
    console.log('Click Singer');
  }

  navPlayView(detail){
      this.props.navigator.push({
        id:'PlayView',
        passProps:{
          songObject:detail
        }
      })
  }

  // Render rows item in list view
  renderRows(property){
    return(
      <View style={styles.listItem}>
        <TouchableOpacity onPress={this.navPlayView.bind(this,property)}>
          <Image
            style={{width:50,height:50}}
            source={require('../images/pikachu.jpg')}
          />
          <Text style={{paddingLeft:100}} >{property.name}</Text>
        </TouchableOpacity>

      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      dataSource : new ListView.DataSource({ rowHasChanged:(r1,r2) => r1 != r2 }),
      isLoading: true,
    };
    this.loadData(function(m_DATA){});
  }

  render() {
    console.log('render loading is  '+ this.state.isLoading);
    if(this.state.isLoading ) {
      return(
        (
          <ActivityIndicatorIOS
            size='large' style={styles.container}/>
        )
      );

    }else {
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
            <View style={{ flexDirection:'row', justifyContent:'center'}}>

                <View style={styles.menu}>
                  <TouchableOpacity onPress={this.navPlayView.bind(this)} >
                    <Text>List Song</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.menu}>
                  <TouchableOpacity onPress={() => { this.clickAlbum() }}>
                    <Text>Album</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.menu}>
                  <TouchableOpacity onPress={ () =>{ this.clickSinger() }}>
                    <Text>Singer</Text>
                  </TouchableOpacity>
                </View>

            </View>

            <View style={{marginTop:10}}>
              <ListView
                dataSource={this.state.dataList}
                renderRow={this.renderRows.bind(this)}
              />
            </View>

          </View>


        </View>
      );
    }
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
module.exports = HomeView;
