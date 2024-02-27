import { createStackNavigator ,createB, } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMeal from '../Screens/CategoryMeal';
import MealDetailsScreen from '../Screens/MealDetailsScreen'
import FavoritesScreen from "../Screens/FavoritesScreen";
import { Platform } from "react-native";
import Color from "../constant/Color";
import { Ionicons } from "@expo/vector-icons";

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Category',
      }
    },
    Categorymeal: {
      screen: CategoryMeal
    },
    MealDetails: MealDetailsScreen
  }, { 
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'darkgreen',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : 'blue'

  }
}
);

const bottomtabNav= createBottomTabNavigator({

  Meals:{screen:MealNavigator,navigationOptions:{
    tabBarIcon:(tabInfo)=>{
      return(
        <Ionicons name="fast-food-outline" size={25} color={tabInfo.tintColor}/>
      );
    }
  }},
  Favorites:{screen:FavoritesScreen,
  navigationOptions:{
    tabBarLabel:'Favorites!',
    tabBarIcon:(tabInfo)=>{
      return(
        <Ionicons name="star" size={25} color={tabInfo.tintColor}/>
      );
    }
  }}
},{ 
tabBarOptions:{
    activeTintColor:Color.danger
}})



export default createAppContainer(bottomtabNav);
