// App.js

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/MealNavigator'; // Adjust the import to match your navigation file
import MealNavigator from './navigation/MealNavigator';
import FavoriteNavigator from './navigation/MealNavigator';
import MainNavigator from './navigation/MealNavigator';
import App1 from './navigation/MealNavigator';

export default function App() {
  enableScreens();

  let [fontLoaded] = useFonts({ 
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'), 
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>     
         <DrawerNavigator/>
         </NavigationContainer>

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
