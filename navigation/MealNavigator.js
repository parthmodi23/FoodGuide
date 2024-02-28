import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMeal from '../Screens/CategoryMeal';
import MealDetailsScreen from '../Screens/MealDetailsScreen'
import FavoritesScreen from "../Screens/FavoritesScreen";
import { Platform } from "react-native";
import Color from "../constant/Color";
import { Ionicons } from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FilterScreen from "../Screens/FilterScreen";


const defaultStackNavigation=
   {
    headerStyle: {
      backgroundColor: 'darkgreen',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : 'blue'

  }

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
    defaultNavigationOptions:defaultStackNavigation
}
);



//for favorite tab
const FavoriteNavigator=createStackNavigator({
Favorites:{screen:FavoritesScreen,
navigationOptions:{
  headerTitle:'Your Favorites'
}},
MealDetails:MealDetailsScreen
},{
  defaultNavigationOptions:defaultStackNavigation
});

 

//create a sepreate tabbarconfig for use in both android and ios
const tabBarScreenConfig={
  Meals:
  {
      screen:MealNavigator,
      navigationOptions:
      {
          tabBarIcon:(tabInfo)=>{
           return(<Ionicons name="fast-food-outline" size={25} color={tabInfo.tintColor}/>);
                },       
      }
      
  },
  Favorites:
  {
      screen:FavoriteNavigator,
      navigationOptions:
          {
              tabBarLabel:'Favorites!',
              //tabBarIcon is function so we have to call like this
              tabBarIcon:(tabInfo)=>{
              return(<Ionicons name="star" size={25} color={tabInfo.tintColor}/>);
                },
            }
          }
  }

//The Main Tab Navigator that is for ios and android 
const bottomtabNavigator= Platform.OS==='android' 
?createMaterialBottomTabNavigator(
      //this is basically used  for to pass the configs for each tabs in our Bottom Tab Navigator
  tabBarScreenConfig, 
  {
    activeColor:Color.secondary,
    shifting:true
  }
)
:createBottomTabNavigator({
  tabBarScreenConfig
 
},{ 
tabBarOptions:{
    activeTintColor:Color.danger
}})

// const FiltersNavigator=createStackNavigator({
//   Filters:FilterScreen
// })

// const drawerNavigator = createDrawerNavigator({
//   MealFavorite:bottomtabNavigator,
//   Filter:FiltersNavigator
// });



export default createAppContainer(bottomtabNavigator);
