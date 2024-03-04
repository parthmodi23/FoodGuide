import React, { useDebugValue, useEffect } from "react";
import { StyleSheet, View, Text, Button, Platform, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import category from "../Models/category";
import MealList from "../Components/MealList";
import { useRoute } from '@react-navigation/native';
import { useSelector } from "react-redux";


const CategoryMeal = (props) => {
    const route = useRoute();
    const catID = route.params?.categoryId
    //useselector take a function and return the value of that function in redux in initialstate
    const mealdata = useSelector(state => state.meals.filterMeals)
    const selectedcategory = CATEGORIES.find(cat => cat.id === catID);
    const displayMeals = mealdata.filter(meal => meal.categoryId.indexOf(catID) >= 0)

    useEffect(() => {
        props.navigation.setOptions({
            title: selectedcategory.title
        });
    },
    );

    return (
        <MealList listData={displayMeals} navigation={props.navigation} />
    );
}



// CategoryMeal.navigationOptions=(navigation1)=> {
//     const route =useRoute()
//     const catId = route.params?.categoryId;
//     console.log("fed"+catId)
//     const selectedcategory = CATEGORIES.find(category => category.id === catId);

//     const title=selectedcategory.title

//     useEffect(()=>{
//         if(title){

//         }
//     })



const styles = StyleSheet.create({

})
export default CategoryMeal;