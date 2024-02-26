import React from "react";

import { StyleSheet, View,Text } from 'react-native'


const FavoritesScreen=()=>{
    return(
        <View style={styles.MainScrren}> 
        <Text>
this is fav
        </Text>
        
    </View>
    );
 
}


const styles=StyleSheet.create({
MainScrren:{
    flex:1,
}
})
export default FavoritesScreen;