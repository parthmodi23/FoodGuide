import React, { useEffect } from "react";
import {Appearance} from 'react-native';
import { StyleSheet, View, Text, Button, FlatList, Dimensions } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from "../Components/CategoryGridTile";
import {HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/HeaderButton";

const CategoriesScreen = (props) => {

    const rendercategories = (itemData) => {
        return (
            <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={()=>{
                props.navigation.navigate({
                        name:'Categorymeal',
                        params:{
                            categoryId: itemData.item.id 
                        }
                    })
                
            } 
                
            }/>
            );
         
    }
 
    useEffect(() => {
        props.navigation.setOptions({
          title: 'Category',
          headerLeft:()=><HeaderButtons
            HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menue'
                iconName='menu'
                onPress={
                    ()=>{
                        props.navigation.toggleDrawer()
                    }
                }
/>
</HeaderButtons>

          
        
          
        });
      }, 
    );
    
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