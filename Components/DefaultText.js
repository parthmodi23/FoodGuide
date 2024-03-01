import React from "react";
import {View, Text,StyleSheet} from 'react-native';
import fonts from "../constant/fonts";

export default DefaultText=(props)=>{
    return(
        <Text style={{...styles.textStyling,...props.style}}>
            {props.children}
        </Text>
    )
}

const styles=StyleSheet.create({
    textStyling:{
        fontFamily:fonts.fontFamily
    }
})