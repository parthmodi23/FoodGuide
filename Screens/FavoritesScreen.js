import React from "react";
import { StyleSheet, View,Text } from 'react-native'
import MealList from "../Components/MealList";
import {useSelector } from "react-redux";
import fonts from "../constant/fonts";
const FavoritesScreen=props=>{


    const favoriteData=useSelector(state=>state.meals.favoriteMeals);
    // console.log(alldata)
    // const favdata=MEALS.filter(catid=>catid.id==='m1')
    // console.log(favdata)

    if(favoriteData.length===0){
        return <View style={styles.fontcontainer}>
            <Text style={styles.mainfont}>No favorite meal found.</Text>
            <Text style={styles.mainfont}> Start adding some!</Text>

        </View>
    }
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
},
fontcontainer:{
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
    flex:1,
    
},
mainfont:{
    fontFamily:fonts.fontFamily,
    margin:5
}
})


export default FavoritesScreen;