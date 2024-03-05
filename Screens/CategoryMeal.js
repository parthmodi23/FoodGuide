import React, { useDebugValue, useEffect } from "react";
import { StyleSheet, View, Text, Button, Platform, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import category from "../Models/category";
import MealList from "../Components/MealList";
import { useRoute } from '@react-navigation/native';
import { useSelector } from "react-redux";
import DefaultText from "../Components/DefaultText";
import fonts from "../constant/fonts";


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

    if(displayMeals.length==0){
        return <View style={styles.fontcontainer}>
            <DefaultText style={styles.fonts}>Not matching with your filter,</DefaultText>
            <DefaultText style={styles.fonts}>change your filter!</DefaultText>
        </View>
    }
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
fontcontainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},

fonts:{
    fontFamily:fonts.fontFamily,
    margin:5

}
})
export default CategoryMeal;