import React from "react";
import { StyleSheet, View,Text } from 'react-native'
import { MEALS } from "../data/dummy-data";
import MealList from "../Components/MealList";

const FavoritesScreen=(props)=>{

    const favdata=MEALS.filter(catid=>catid.id==='m1' || catid.id==='m2')

    return(
    <View style={styles.MainScrren}> 
<MealList listData={favdata} navigation={props.navigation}/>
    </View>
    );
    }

FavoritesScreen.navigtionOptions={
    headerTitle:'your Favrotie'
};

const styles=StyleSheet.create({
MainScrren:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})
export default FavoritesScreen;