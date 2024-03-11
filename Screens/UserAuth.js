import React from "react";
import { View,Text,StyleSheet } from "react-native"

export default LoginComponent=()=>{
    return(
        <View style={style.mainscreen}>
            <Text>
                hello this is login page
            </Text>
        </View>
    )
}

const style=StyleSheet.create({
    mainscreen:{
        flex:1  ,justifyContent:'center',
        alignItems:'center'
    }
})

