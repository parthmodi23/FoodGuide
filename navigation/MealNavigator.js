import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMeal from '../Screens/CategoryMeal';
import MealDetailsScreen from '../Screens/MealDetailsScreen'
import FavoritesScreen from "../Screens/FavoritesScreen";
import { Platform } from "react-native";

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
      backgroundColor: 'green',
    },
    headerTintColor: Platform.OS === 'android' ? 'yellow' : 'blue'

  }
}

);

export default createAppContainer(MealNavigator);
