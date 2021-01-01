import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import * as WebBrowser from 'expo-web-browser';

let Open_Img = require('./Part Js/img_open.js')
let Settings =  require('./Part Js/settings_page.js')

let data_stand = {
  score: 0,
  url: 'https://meme-creator.com/media/images/template-ah-yes-enslaved_JETqvRB.jpg',
  permalink: 'reddit.com',
  subreddit_name_prefixed:"r/dankmemes",
  author: '',
  title: ''
}


export default function App() {
  const [data, set_data] = useState(data_stand)
  const [look, set_look] = useState(false)
  const [settings_look, set_settings] = useState(false)
  const [subR, set_subR] = useState('dankmemes')

  async function main(subreddit){
      let data_save
      await fetch('https://www.reddit.com/r/' + subreddit +'/random.json',{method: 'GET'}).then(function(res){
          return res.json()
      }).then(function(data){
          data_save = data
      })
      return await data_save[0].data.children[0].data
  }

  function get(user_url){
      main(user_url).then(function(result){
          //console.log(result.url)
          set_data(result)
      })
      //console.log(data)
  }

  function open_web(){
    if(data.permalink != 'reddit.com' && data.permalink != ' ' ){
      WebBrowser.openBrowserAsync('https://www.reddit.com' + data.permalink)
    }
  }


  return (
    <View style={styles.container}>
      <View style={{paddingBottom:10}}>
        <TouchableOpacity style={{width:100, height:30, flexDirection:'row'}}onPress={function(){set_settings(true)}}>
          <Image source={require('./img/settings.png')} style={{width:30, height:30}}/>
          <Text style={{color:'#ffff', fontSize:18}}>Settings</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient colors={['#990099', '#cc0066']} style={{borderRadius:15}}>
      <View style={styles.box}>
        <View style={styles.text_box}>
          <Text style={{fontSize:20, paddingRight:10, color:'#ffff'}}>Title: {data.title}</Text>
        </View>
        <View style={{paddingTop:5, paddingBottom:5, borderRadius:5}}>
          <TouchableOpacity onPress={function(){set_look(true)}}>
            <Image style={{width:'100%', height:350, borderRadius:5}} source={{uri: data.url}} resizeMode="contain" onError={function(){get(subR)}}/>
          </TouchableOpacity>
          <Open_Img visible={look} img={data.url} set_vis={set_look}/>
          <Settings visible={settings_look} set_vis={set_settings} set_reddit={set_subR}/>
        </View>
        <View style={styles.text_box}>
          <Text style={styles.text}>Score: {data.score}</Text>
          <Text style={styles.text}>Subreddit: {data.subreddit_name_prefixed}</Text>
        </View>
        <Text style={styles.text}>Posted by u/{data.author}</Text>
      </View>
      </LinearGradient>
      <View style={{paddingTop:20}}>
      <View style={styles.btn_outer}>
        <TouchableOpacity style={styles.btn} onPress={function(){get(subR)}}>
            <Text style={styles.text}>Randomize</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.btn_box}>
          <View style={styles.btn_outer}>
            <TouchableOpacity style={styles.btn} onPress={open_web}>
              <Text style={styles.text}>Open In Reddit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding:10,
    paddingTop:5,
    width:'100%',
    height:'100%',
    alignContent:'center',
    justifyContent:'center'
  },
  text: {
    color:'#fff',
    fontSize:16,
    paddingRight:10
  },
  box:{
    borderColor:'#0000',
    borderWidth:1,
    padding:10,
    borderRadius:20,
    width:'100%',
    height: '70%',
  },
  img:{
    width: '100%',
    height: '90%'
  }, 
  btn:{
    borderWidth:1,
    borderRadius:40,
    padding:10,
    alignItems:'center',
    borderColor:'#ff3399',
  },
  btn_box:{
    paddingTop:20
  },
  text_box:{
    flexDirection:'row'
  },
  btn_outer:{
    borderWidth:1,
    borderRadius:40,
    borderColor:'#ff3399',
  },
});
