import react from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import fonts from "../constant/fonts";
import DefaultText from "./DefaultText";

const MealItem = (props) => {

    return (
        <View style={styles.mealItem}>

            <TouchableOpacity onPress={props.onSelectMeal}>
                <View style={styles.sepraterframe}>

                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                         source={{ uri: props.Image }} 
                         style={styles.bgImage}>
                        <View style={styles.titlecontainer}><Text numberOfLines={1} style={{...styles.title,...styles.fontstyle}}>{props.title}</Text></View>
                        </ImageBackground>
                    </View>

                    <View style={{ ...styles.mealRow, ...styles.mealdetails }}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.complexity}</DefaultText>
                        <DefaultText>{props.affordability}</DefaultText>
                    </View>
                </View>

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    mealItem: {
        flex: 1,
        height: 200,
        width: '100%',
        backgroundColor: '#ffff',
        marginVertical:10,
        // borderWidth:1,
        // borderColor:'black'
        overflow: "hidden",
        borderRadius:20

    },
    mealRow: {
        flexDirection: 'row',
    },
    sepraterframe:{
        justifyContent:'space-between',
    
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent:'flex-end',
        overflow:'hidden',
    },
    mealHeader: {
        height: '85%',
    },
    mealdetails: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems:'center',
        height: '15%',
        fontFamily:fonts.fontFamily
     },
    titlecontainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 5,
        paddingVertical:12,
    },
   
    fontstyle:{
        fontFamily:fonts.fontFamily,
        fontSize:15
    }, title: {
        color: '#ffff',
        fontSize:15,
        textAlign:'center'
    },

})

export default MealItem;