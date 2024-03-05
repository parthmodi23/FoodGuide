import react from "react";
import {HeaderButton} from 'react-navigation-header-buttons';
import {View,Text,StyleSheet,Platform} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import Color from "../constant/Color";


const CustomHeaderButton=(props)=>{
    return(
    <HeaderButton {...props} 
        IconComponent={Ionicons}
        iconSize={25}
        color={Platform.OS==='android' ? Color.white:Color.primary}
        style={{marginLeft:10}}
        />);
}


export default CustomHeaderButton