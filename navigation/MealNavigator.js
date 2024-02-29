// MealNavigator.js

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

const Stack = createStackNavigator();

const defaultStackNavigation = {
  headerStyle: {
    backgroundColor: 'darkgreen',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'blue',
};

const MealNavigator = () => (
  <Stack.Navigator screenOptions={defaultStackNavigation}>
    <Stack.Screen name='Categories' component={CategoriesScreen} options={{ title: 'Meal Category' }} />
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

const MaterialTab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => (
  <MaterialTab.Navigator
    shifting={true}
    activeColor={Color.primary} // Color for the active tab
    inactiveColor={Color.danger}
  >
    <MaterialTab.Screen
      name='Meals'
      component={MealNavigator}
      options={{
        tabBarIcon: (tabInfo) => <Ionicons name="fast-food-outline" size={25} />,
      }}
    />
    <MaterialTab.Screen
      name='Favorites'
      component={FavoriteNavigator}
      options={{
        tabBarLabel: 'Favorites!',
        tabBarIcon: (tabInfo) => <Ionicons name="star" size={25} />,
      }}
    />
  </MaterialTab.Navigator>
);

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
  <Drawer.Navigator>
    <Drawer.Screen name="MealScreen" component={BottomTabNavigator}  />
    <Drawer.Screen name='Filter' component={FilterScreen}   />
  </Drawer.Navigator>);
}

// const App1 = () => (
//   <NavigationContainer>
//     <DrawerNavigator />
//   </NavigationContainer>
// );

export default DrawerNavigator;
