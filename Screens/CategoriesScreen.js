import React from "react";

import { StyleSheet, View, Text, Button, FlatList, Dimensions, Platform, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from "../Components/CategoryGridTile";
const CategoriesScreen = (props) => {

    const rendercategories = (itemData) => {
        return (
            <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={()=>{
                props.navigation.navigate({
                    routeName: 'Categorymeal',
                    params: { 
                        categoryId: itemData.item.id 
                    }
                });
            } 
                
            }/>
            );
         
    }
    return (

        <View style={styles.mainscreen}>

            <FlatList
                keyExtractor={(item, index) => item.id}
                data={CATEGORIES}
                numColumns={2}
                renderItem={rendercategories}
            />

        </View>);
}



const styles = StyleSheet.create({
    mainscreen: {
        flex: 1,
    },
    mainbox: {
        flex: 1,
        margin: 15,
        height: Dimensions.get('window').height / 4,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CategoriesScreen;

//this for return part
        {/* <Text style={{color:'blue'}}>
        this is what ypou want dsvdsfgverrgsvcrs
    </Text>
    <Button title="go to meal" onPress={()=>{
        props.navigation.push('Categorymeal')
    }}/> */}