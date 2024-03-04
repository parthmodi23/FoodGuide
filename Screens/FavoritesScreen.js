import React from "react";
import { StyleSheet, View,Text } from 'react-native'
import MealList from "../Components/MealList";
import {useSelector } from "react-redux";
const FavoritesScreen=props=>{


    const favoriteData=useSelector(state=>state.meals.favoriteMeals);
    // console.log(alldata)
    // const favdata=MEALS.filter(catid=>catid.id==='m1')
    // console.log(favdata)
    return(
    <View style={styles.MainScrren}> 
<MealList listData={favoriteData} navigation={props.navigation}/>
    </View>
    );
 }


const styles=StyleSheet.create({
MainScrren:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})


export default FavoritesScreen;