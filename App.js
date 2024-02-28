import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font';
import MealNavigator from './navigation/MealNavigator';
import React from 'react';
import AppLoading from 'expo-app-loading'
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
export default function App() {
  enableScreens()

  let [fontLoaded] =useFonts({ 
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'), 
  });

  if(!fontLoaded){
    return <AppLoading/>
  }
  return <SafeAreaProvider>
  <MealNavigator/>
      </SafeAreaProvider>
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
