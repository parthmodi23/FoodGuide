import react from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MealItem = (props) => {

    return (
        <View style={styles.mealItem}>

            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>

                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.Image }} style={styles.bgImage}>
                        <View style={styles.titlecontainer}><Text numberOfLines={1} style={styles.title}>{props.title}</Text></View>
                        </ImageBackground>
                    </View>

                    <View style={{ ...styles.mealRow, ...styles.mealdetails }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
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
        backgroundColor: '#f5f5f5',
        marginVertical:10

    },
    mealRow: {
        flexDirection: 'row'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent:'flex-end',
        borderRadius:10,
        overflow:'hidden',
        elevation:50,
    },
    mealHeader: {
        height: '85%',
    },
    mealdetails: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems:'center',
        height: '15%'
     },
    titlecontainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 5,
        paddingVertical:12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        color: '#ffff',
      
        fontSize:15,
        textAlign:'center'
    }

})

export default MealItem;