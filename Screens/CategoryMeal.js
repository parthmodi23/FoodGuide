import React from "react";
import { StyleSheet, View, Text, Button, Platform,FlatList } from 'react-native';
import { CATEGORIES,MEALS } from '../data/dummy-data';

const CategoryMeal = (props) => {

    const catID = props.navigation.getParam('categoryId');
    console.log(catID)
    const selectedcategory = CATEGORIES.find(cat => cat.id === catID);
   
    const displayMeals = MEALS.filter(meal=>meal.categoryId.indexOf(catID)>=0 )
    
    const renderMeal=(itemData)=>{
        return (

            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        );
    }

    return (
        <View style={styles.MainScrren}>
            {/* <Text>
                this is what you want
            </Text>
            <Text>{selectedcategory.title}</Text>
            <Button title="go back" onPress={() => {
                props.navigation.pop()
                //this two are same .pop and .goback() but in most of the time .goBack() is use
                //1. props.navigation.pop()
                // 2.props.navigation.goBack()
                //this is Basically use for option for navigation 
                // 1.props.navigation.push('Category') 
            }} /7/*-> */}
            <FlatList 
            keyExtractor={(item,index)=>item.id }
            data={displayMeals}
            renderItem={renderMeal}
            />



        </View>);
}

CategoryMeal.navigationOptions=(navigation1)=> {
    const catID = navigation1.navigation.getParam('categoryId');
    const selectedcategory = CATEGORIES.find(cat => cat.id === catID);

     const title=selectedcategory.title
return{
    headerTitle:title
}

};

const styles = StyleSheet.create({
    MainScrren: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
    
})
export default CategoryMeal;