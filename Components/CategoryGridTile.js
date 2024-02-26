import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";


const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity style={{...styles.mainbox,...{backgroundColor:props.color}}}
            onPress={props.onSelect}>
            <View>
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
        elevation:3,
        shadowColor:'black',
        shadowOpacity:0.3,
        shadowOffset:{width:0,height:2},
        borderRadius:10,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:15,
        
        
    },font:{
        fontFamily:'open-sans-bold',
        fontSize:15
    }
})


export default CategoryGridTile;