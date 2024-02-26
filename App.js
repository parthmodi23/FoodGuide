import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font';
import MealNavigator from './navigation/MealNavigator';
import React from 'react';
import AppLoading from 'expo-app-loading'
import { enableScreens } from 'react-native-screens';
export default function App() {
  enableScreens()

  let [fontLoaded] =useFonts({ 
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'), 
  });

  if(!fontLoaded){
    return <AppLoading/>
  }
  
  return <MealNavigator/>
  
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
