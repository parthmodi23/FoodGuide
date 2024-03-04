import React, { useCallback, useEffect } from "react";

import { StyleSheet, View, Text, Image } from 'react-native'
// import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import DefaultText from "../Components/DefaultText";
import { useDispatch, useSelector } from "react-redux";
import CustomHeaderButton from "../Components/HeaderButton";
import { tooglefav } from "../store/Actions/mealsActions";

const ListView = (props) => (
    <View style={styles.font}>
        <Text>
            {props.children}
        </Text>
    </View>
)

const MealDetailsScreen = (props) => {

    const route = useRoute()
    const MealId = route.params?.mealId; 

    //useselector is basically use for getting the data from 
    //redux store so we cant have to direcly import our data like MEALS
    const Mealdetails = useSelector(state => state.meals.meals)
    const selectedMeal = Mealdetails.find(meal => meal.id == MealId)
    const dispatch = useDispatch()

    const tooglehandler = () => {
        dispatch(tooglefav(selectedMeal))
    }

    useEffect(() => {
        props.navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => <HeaderButtons
                HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Favorite"
                    iconName='star-outline'
                    onPress={
                        tooglehandler} />
            </HeaderButtons>
        });
    },
    );


    return (
        <ScrollView>
            <View style={styles.mainscreen}>
                <Image style={{ ...styles.imagecontainer, ...styles.image }} source={{ uri: selectedMeal.imageUrl }} />
                <View style={{ ...styles.mealRow, ...styles.mealdetails }}>
                    <DefaultText>{selectedMeal.duration}m</DefaultText>
                    <DefaultText>{selectedMeal.complexity}</DefaultText>
                    <DefaultText>{selectedMeal.affordability}</DefaultText>
                </View>
                <View>
                    <View>
                        <DefaultText style={styles.fontstyle}>Ingredients</DefaultText>
                        {selectedMeal.ingredients.map(ingredients =>
                            <ListView key={ingredients}>{ingredients}</ListView>)}
                    </View>
                    <View>
                        <DefaultText style={styles.fontstyle}>Steps</DefaultText>
                        {selectedMeal.steps.map(steps =>
                            <ListView key={steps}>{steps}</ListView>)}
                    </View>
                </View>


            </View></ScrollView>);
}

// MealDetailsScreen.navigationOptions=(navigationData)=>{

//     const route=useRoute()
//     const MealId=route.params?.mealId;
//     const selectedMeals = MEALS.find(meal=>meal.id==MealId)
//     const title=selectedMeals.title
//     // console.log(selectedMeals)
//     return{
//         headerTitle:title,
//         headerRight:()=><HeaderButtons 
//         HeaderButtonComponent={CustomHeaderButton}>
//             <Item title="Favorite" 
//             iconName='star-outline'
//             onPress={()=>{
//                 console.log("clicked")
//             }}/>
//         </HeaderButtons>
//     }
// };


const styles = StyleSheet.create({
    mainscreen: {
        flex: 1,
    },
    mealRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    },
    imagecontainer: {
        height: 200,
        width: '100%',

    },
    font: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 5,
        marginHorizontal: 20,
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: 'black',
        shadowOpacity: 5,
        shadowOffset: { height: 3, width: 5 },
        elevation: 1.5,

    },
    fontstyle: {
        fontSize: 20,
        marginHorizontal: 5,
        alignItems: 'center',
        textAlign: 'center',
        marginVertical: 5
    }
});


export default MealDetailsScreen