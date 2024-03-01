import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMeal from '../Screens/CategoryMeal';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import FavoritesScreen from "../Screens/FavoritesScreen";
import FilterScreen from "../Screens/FilterScreen";
import { Platform } from "react-native";
import Color from "../constant/Color";
import { Ionicons } from "@expo/vector-icons";
import fonts from '../constant/fonts';
import {Text} from 'react-native'
const Stack = createStackNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();


const defaultStackNavigation = {
  
  headerStyle: {
    backgroundColor: 'darkgreen',
  },
  headerTitleStyle:{
    fontFamily:fonts.fontFamily,
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'blue',

};

const MealNavigator = () => (

  <Stack.Navigator screenOptions={defaultStackNavigation}>
    <Stack.Screen name='Categories' component={CategoriesScreen}  />
    <Stack.Screen name='Categorymeal' component={CategoryMeal} />
    <Stack.Screen name='MealDetails' component={MealDetailsScreen} />
  </Stack.Navigator>
);

const FavoriteNavigator = () => (
  <Stack.Navigator screenOptions={defaultStackNavigation}>
    <Stack.Screen name='Favorites' component={FavoritesScreen} options={{ title: 'Your Favorites' }} />
    <Stack.Screen name='MealDetails' component={MealDetailsScreen} />
  </Stack.Navigator>
);



const BottomMaterialTabNavigator = () => (
  <MaterialTab.Navigator
    shifting={true}
    activeColor={Color.red}
    inactiveColor={Color.info}
  >
    <MaterialTab.Screen
      name='Meals'
      component={MealNavigator}
      options={{
        tabBarLabel:Platform.OS==='android'?<Text style={{fontFamily:fonts.fontFamily}}>Meals</Text>:'Meals',
        tabBarIcon: (tabInfo) => <Ionicons name="fast-food-outline" size={25} />,
      }}
    />
    <MaterialTab.Screen
      name='Favorites category'
      component={FavoriteNavigator}
      options={{
        tabBarLabel:Platform.OS==='android'?<Text style={{fontFamily:fonts.fontFamily}}>Favorites</Text>:'Favorites',
        tabBarIcon: (tabInfo) => <Ionicons name="star-outline" size={25} />,
      }}
    />
  </MaterialTab.Navigator>
);

const FilterNavigator = () => (
  <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: 'darkgreen'}}}>
    <Stack.Screen name='FilterScreen' component={FilterScreen} />
  </Stack.Navigator>
)


const DrawerNavigator = () => {
  return (
    <NavigationContainer >
      <Drawer.Navigator screenOptions={{defaultStackNavigation}}>
        <Drawer.Screen name="MainScreen" component={BottomMaterialTabNavigator} options={{headerShown:false,title:'Meal'}}/>
        <Drawer.Screen name='Filter' component={FilterNavigator} options={{headerShown:false}} />
      </Drawer.Navigator>
    </NavigationContainer>);
}



export default DrawerNavigator;
