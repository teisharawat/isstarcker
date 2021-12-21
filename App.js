import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import IssLocationScreen from './screens/issLocationScreen';
import MeteorScreen from './screens/meteorScreen';
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator() 

export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="ISSLocator" component={IssLocationScreen}/>
         <Stack.Screen name="Meteor" component={MeteorScreen}/>
       </Stack.Navigator>
     </NavigationContainer>
  );
}

