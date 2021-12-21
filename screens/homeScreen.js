import { StatusBar } from "expo-status-bar"
import React, {Component} from "react"
import {Text, View, Stylesheet, SafeAreaView, Platform, TouchableOpacity, ImageBackground, Image } from "react-native"

export default class HomeScreen extends Component
{
  render()
  {
    return(
      <View style={styles.viewcompo}>
        <SafeAreaView style={styles.sav}/>
        <ImageBackground source={require("assets/bg_img.png")}styles={styles.bgimg}>
          <View style={tview}>
            <Text style={styles.textcompo}>ISS Tracker App</Text>
          </View> 
          <TouchableOpacity style={styles.to} onPress=
          {()=>
            {
            this.props.navigation.navigate("IssLocationScreen")
            }
          }>
            <Text style={styles.totext}>
              ISS Location
            </Text>
            <Image source={require("assets/iss_icon.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.to} onPress=
          {()=>
            {
            this.props.navigation.navigate("MeteorScreen")
            }
          }>
            <Text style={styles.totext}>
              Metreor
            </Text>
            <Image source={require("assets/bg_img.png)")}/>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

const styles=Stylesheet.create(
{
  viewcompo:
  {
    flex:1,
  },

  textcompo:
  {
    fontSize:40,
  },
  
  sav:
  {
    marginTop:Platform.OS==="android" ? StatusBar.currentHeight:0,
  },

  totext:
  {
    fontSize:20,
    color:"pink",
  },

  to:
  {
    border:"solid",
    padding:5,
    color:"orange",
  },

  tview:
  {
    justifyContent:"center",
    alignItem:"center",
    flex:0.5 ,
  }
})
