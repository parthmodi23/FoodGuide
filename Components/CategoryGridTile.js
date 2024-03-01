import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions,TouchableNativeFeedbackComponent } from "react-native";
import fonts from "../constant/fonts";


const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity style={{...styles.mainbox,...{backgroundColor:props.color}}}
            onPress={props.onSelect}>
            <View style={styles.containermain}> 
                <Text style={styles.font} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableOpacity>);

}

const styles = StyleSheet.create({

    mainbox: {
        flex: 1,
        margin: 15,
        height: Dimensions.get('window').height / 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:10,
        shadowColor:'black',
        shadowOpacity:0.3,
        shadowOffset:{width:0,height:2},
        borderRadius:10,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:15,
        
        
    },font:{
    fontFamily:fonts.fontFamily,
    
    fontSize:18
    },containermain:{
        elevation:5
    }
})


export default CategoryGridTile;