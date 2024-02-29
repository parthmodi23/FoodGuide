import React from "react";

import { StyleSheet, View,Text } from 'react-native'
import { MEALS } from "../data/dummy-data";
import {HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/HeaderButton";
import { useRoute } from "@react-navigation/native";
const MealDetailsScreen=(props)=>{

    const route =useRoute()
    const MealId=route.params?.mealId;
    const selectedMeal = MEALS.find(meal=>meal.id==MealId)
    return(
    <View style={styles.mainscreen}>
        <Text>
    {selectedMeal.title}
        </Text>
    </View>);
}

MealDetailsScreen.navigationOptions=(navigationData)=>{

    const route=useRoute()
    const MealId=route.params?.mealId;
    const selectedMeals = MEALS.find(meal=>meal.id==MealId)
    const title=selectedMeals.title
    // console.log(selectedMeals)
    return{
        headerTitle:title,
        headerRight:()=><HeaderButtons 
        HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" 
            iconName='star-outline'
            onPress={()=>{
                console.log("clicked")
            }}/>
        </HeaderButtons>
    }
};


const styles=StyleSheet.create({
    mainscreen:{
        flex:1,
    }
}); 


export default MealDetailsScreen;