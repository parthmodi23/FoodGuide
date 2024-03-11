import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMeal from '../Screens/CategoryMeal';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import FavoritesScreen from "../Screens/FavoritesScreen";
import FilterScreen from "../Screens/FilterScreen";
import { ImageBackground, Platform, View ,Image} from "react-native";
import Color from "../constant/Color";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import fonts from '../constant/fonts';
import {Text} from 'react-native'
import UserAuth from '../Screens/UserAuth';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DefaultText from '../Components/DefaultText';
import { Item } from 'react-navigation-header-buttons';
const Stack = createStackNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();


const defaultStackNavigation = {
  
  headerStyle: {
    backgroundColor: 'darkgreen',
  },
  headerTitleStyle:{
    fontFamily:fonts.fontFamily,
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'blue',

};

const MealNavigator = () => (

  <Stack.Navigator screenOptions={defaultStackNavigation}>
    <Stack.Screen name='Categories' component={CategoriesScreen}  />
    <Stack.Screen name='Categorymeal' component={CategoryMeal} />
    <Stack.Screen name='MealDetails' component={MealDetailsScreen} />
  </Stack.Navigator>
);

const FavoriteNavigator = () => (
  <Stack.Navigator screenOptions={defaultStackNavigation}>
    <Stack.Screen name='Favorites' component={FavoritesScreen} options={{ title: 'Your Favorites' }} />
    <Stack.Screen name='MealDetails' component={MealDetailsScreen} />
  </Stack.Navigator>
);



const BottomMaterialTabNavigator = () => (
  <MaterialTab.Navigator
    shifting={true}
    activeColor={Color.red}
    inactiveColor={Color.info}
  >
    <MaterialTab.Screen
      name='Meals'
      component={MealNavigator}
      options={{
        tabBarLabel:Platform.OS==='android'?<Text style={{fontFamily:fonts.fontFamily}}>Meals</Text>:'Meals',
        tabBarIcon: (tabInfo) => <Ionicons name="fast-food-outline" size={25} />,
      }}
    />
    <MaterialTab.Screen
      name='Favorites category'
      component={FavoriteNavigator}
      options={{
        tabBarLabel:Platform.OS==='android'?<Text style={{fontFamily:fonts.fontFamily}}>Favorites</Text>:'Favorites',
        tabBarIcon: (tabInfo) => <Ionicons name="star-outline" size={25} />,
      }}
    />
  </MaterialTab.Navigator>
);

const FilterNavigator = () => (
  <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: 'darkgreen'}}}>
    <Stack.Screen name='FilterScreen' component={FilterScreen} />
  </Stack.Navigator>
)
const RightNavigator=createDrawerNavigator()


const DrawerNavigator = (props) => {
  // const image = {uri: 'https://media.istockphoto.com/id/588595864/photo/steaming-mixed-vegetables-in-the-wok-asian-style-cooking.jpg?s=612x612&w=0&k=20&c=NZWe4QUwFmEqPAwHa3s0u3Zak6JjlRm36gMgmXx8roA='};
  return ( 
      <Drawer.Navigator  id='leftdrawer' screenOptions={{defaultStackNavigation,drawerPosition:'left'}}
      drawerContent={(props)=>{
        return(
          
          <View style={{flex:1,borderRadius:10,overflow:'hidden'}}>
            <View style={{height:200,
            width:'100%',backgroundColor:'#f0e7e6'}}>
              <Image source={require('../assets/accountcharacterimage/accountpng.png')} style={{height:'70%',width:'50%',margin:10,borderRadius:100}}/>
              <Text style={{marginHorizontal:10,fontSize:20,fontFamily:fonts.fontFamily}}>Parth Modi</Text>
            </View>
          <DrawerItemList {...props}/>
            </View>
        )
      }}>
        <Drawer.Screen name='MealScreen' options={{ headerShown: false, title: 'Meal',
      drawerIcon:()=>(
<MaterialCommunityIcons name='home' size={20}/>
      ) }}>
    {(props) => <BottomMaterialTabNavigator {...props} />}
    </Drawer.Screen>
        {/* <Drawer.Screen name='MealScreen' component={(props) => <BottomMaterialTabNavigator navigation={props.navigation} />} options={{ headerShown: false, title: 'Meal', Color: 'red' }} /> */}
        {/* <Drawer.Screen name='MealScreen' component={BottomMaterialTabNavigator} options={{headerShown:false,title:'Meal',Color:'red'}}/> */}
        <Drawer.Screen name='Filter' 
        component={FilterNavigator} 
        options={{
          headerShown:false,
          drawerIcon:()=>(
            <MaterialCommunityIcons  name="filter" color='black' size={20}/>
  )}} />
        {/* <Drawer.Screen name='User' component={Useraccount} options={{headerShown:false,
        drawerIcon:()=>(
          <Ionicons name="star" size={20}/>
                ) 
        
        }}/> */}
      </Drawer.Navigator>

    );
}


const Useraccount=(props)=>{
    const authscreen = (props) => {
      return <UserAuth {...props} />
    }
  return(
    <RightNavigator.Navigator id='rightscreendrawer' drawerContent={authscreen} screenOptions={{defaultStackNavigation,drawerPosition:'right'}}>
      <RightNavigator.Screen name='MainScreen' component={DrawerNavigator} options={{headerShown:false,title:'Account'}}/>
    </RightNavigator.Navigator>
  )
}

export default Useraccount;
