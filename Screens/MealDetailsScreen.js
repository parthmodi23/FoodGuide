import React from "react";

import { StyleSheet, View,Text } from 'react-native'


const MealDetailsScreen=(props)=>{
    return(
    <View style={styles.mainscreen}>
        <Text>
    Meal details page
        </Text>
    </View>);
}


const styles=StyleSheet.create({
    mainscreen:{
        flex:1,
    }
})
export default MealDetailsScreen;