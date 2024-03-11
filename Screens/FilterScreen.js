import React, { useCallback, useEffect, useState } from "react";

import { StyleSheet, View,Text,Switch, TouchableOpacity,Button } from 'react-native'
import DefaultText from "../Components/DefaultText";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/HeaderButton";
import { useDispatch } from "react-redux";
import { setfilterData } from "../store/Actions/mealsActions";


const FilterSwitch=(props)=>(
    <TouchableOpacity >
        <View style={styles.filtercontent}>
        <DefaultText>{props.name}</DefaultText>
        <Switch 
        value={props.state} 
        onValueChange={props.onChange}/>
        </View>
    </TouchableOpacity>
)


const FilterScreen=(props)=>{
    const [isGluten,SetIsGluten]=useState(false)
    const [isLactos,SeIisLactos]=useState(false)
    const [isvegan,SetISVegan]=useState(false)
    const [isvegetarian,SetIsVegetarian]=useState(false)
    const dispatch=useDispatch()
    const {navigation} =props

    const filterlist=useCallback(()=>{
        const appliedfilter={
        glutenfree:isGluten,
        lactosfree:isLactos,
        vegenfree:isvegan,
        vegetarian:isvegetarian
    };

    dispatch(setfilterData(appliedfilter))

console.log(JSON.stringify(appliedfilter));
    },[isGluten,isLactos,isvegan,isvegetarian,dispatch]);
    
    useEffect(() => {
       navigation.setParams({save : filterlist});
       },[filterlist]
    );

const applyfilter=()=>{
    props.route.params?.save?.();
    props.navigation.goBack()
    alert("Filters has been applied")
}


    useEffect(() => {
        props.navigation.setOptions({
          title: 'Filter',
          headerRight:()=><HeaderButtons
            HeaderButtonComponent={CustomHeaderButton}>
                <Item title='save'
                iconName='save-outline'
                onPress={applyfilter} 
                />
             </HeaderButtons>,
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


    return(
    <View style={styles.MainContainer}>
    <View>
        <Text style={styles.title}>
        Available Filters/Restrictions
        </Text>
            <FilterSwitch name='Gluten-Free' state={isGluten}  onChange={newvalue=>SetIsGluten(newvalue)}/>
            <FilterSwitch name='Lactos-Free' state={isLactos}  onChange={newvalue=>SeIisLactos(newvalue)}/>
            <FilterSwitch name='Vegan' state={isvegan}  onChange={newvalue=>SetISVegan(newvalue)}/>
            <FilterSwitch name='Vegetarian' state={isvegetarian}  onChange={newvalue=>SetIsVegetarian(newvalue)}/>
            <View style={styles.button}>
            <Button title='apply filter' onPress={applyfilter}/></View>
     </View>
    </View>);
}


const styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        height:'100%',
        width:'100%',
    },
    title:{
        margin:20,
        marginTop:30,
        textAlign:'center',
        fontSize:25,
    },

    filtercontent:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        alignItems:'center',
        marginHorizontal:40,
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        marginVertical:10,
        borderRadius:20,
    }
})

export default FilterScreen;