import React from "react";

import { FlatList,View,Text,StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { CommonActions } from "@react-navigation/native";

const MealList = (props)=>{

    const renderMeal=(itemData)=>{

        return (
           <MealItem
            title={itemData.item.title}
            Image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={()=>{
                props.navigation.navigate({
                   name :'MealDetails',
                    params:{
                        mealId:itemData.item.id 
                     }
                })
                
            }}
            />
            
        );
    }
    return(
        <View style={styles.list}>
        <FlatList 
        keyExtractor={(item,index)=>item.id }
        data={props.listData} 
        renderItem={renderMeal}
        style={{width:"100%",padding:7}}
        />
    </View>
    );
}

const styles=StyleSheet.create({
    list: {
        flex: 1, 
        alignItems: 'center',
        justifyContent:'center',
        
    }
    
})

export default MealList;
//this part is for return statement 
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