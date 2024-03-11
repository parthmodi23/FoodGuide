import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/MealNavigator'; // Adjust the import to match your navigation file
import MealNavigator from './navigation/MealNavigator';
import FavoriteNavigator from './navigation/MealNavigator';
import MainNavigator from './navigation/MealNavigator';
import App1 from './navigation/MealNavigator';
import { Provider } from 'react-redux';
import { configureStore,combineReducers, createStore } from 'redux';
import mealReducer from './store/Reducer/reducer';
enableScreens();

const rootReducer=combineReducers({
  meals:mealReducer, 
});

const store=createStore(rootReducer)
export default function App() {

  let [fontLoaded] = useFonts({ 
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'), 
    'DancingScript-VariableFont_wght': require("./assets/fonts/DancingScript-VariableFont_wght.ttf") 
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
      <Provider store={store}>
         <MealNavigator/>
      </Provider>
      </NavigationContainer>
      <StatusBar style="auto" />

    </SafeAreaView>
  );
}