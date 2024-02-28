import React from "react";
import { StyleSheet, View, Text, Button, Platform,FlatList } from 'react-native';
import { CATEGORIES,MEALS } from '../data/dummy-data';
import category from "../Models/category";
import MealList from "../Components/MealList";

const CategoryMeal = (props) => {


    const catID = props.navigation.getParam('categoryId');
    const selectedcategory = CATEGORIES.find(cat => cat.id === catID);
    
    const displayMeals = MEALS.filter(meal=>meal.categoryId.indexOf(catID)>=0 )

    return (
        <MealList listData={displayMeals}  navigation={props.navigation}/>
       );
}

CategoryMeal.navigationOptions=(navigation1)=> {
    const catID = navigation1.navigation.getParam('categoryId');
    const selectedcategory = CATEGORIES.find(category => category.id === catID);

     const title=selectedcategory.title
return{
    headerTitle:title
}

};

const styles = StyleSheet.create({
   
})
export default CategoryMeal;