import React from "react";

import { StyleSheet, View,Text } from 'react-native'
import { MEALS } from "../data/dummy-data";
import {HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/HeaderButton";
const MealDetailsScreen=(props)=>{
    const MealId=props.navigation.getParam('mealId')

    const selectedMeal = MEALS.find(meal=>meal.id==MealId)
    return(
    <View style={styles.mainscreen}>
        <Text>
    {selectedMeal.title}
        </Text>
    </View>);
}

MealDetailsScreen.navigationOptions=(navigationData)=>{

    const mealId=navigationData.navigation.getParam('mealId')
    const selectedMeals = MEALS.find(meal=>meal.id==mealId)

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