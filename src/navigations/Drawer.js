import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator  } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


import CountryScreen from '../screens/Country';
import PlaceScreen from '../screens/Place';
import TourGuidesScreen from '../screens/TourGuides';
import DetailsPlaceScreen from '../screens/DetailsPlace';
import DetailsTourGuidesScreen from '../screens/DetailsGuides';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackHome = () => {
    return(
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={CountryScreen}/>
            <Stack.Screen name="Places" component={PlaceScreen}/>
            <Stack.Screen name="TourGuides" component={TourGuidesScreen}/>
            <Stack.Screen name="DetailsPlace" component={DetailsPlaceScreen}/>
            <Stack.Screen name="DetailsGuides" component={DetailsTourGuidesScreen}/>
        </Stack.Navigator>
    );
}

export default class DrawerNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <NavigationContainer>
                <Drawer.Navigator 
                    initialRouteName="CountryScreenDrawer"
                    drawerStyle={{
                        width: 170
                    }}
                    drawerContentOptions={{
                        activeTintColor: 'steelblue',
                        inactiveTintColor: 'gray',
                        itemStyle: { marginVertical: 10 },
                    }}
                >
                    <Drawer.Screen 
                        name="Home"
                        component={StackHome}
                        options={{
                            drawerIcon: ({ color, size}) => (
                                <Ionicons name="ios-home" size={size} color={color}/>
                            )
                        }}
                    />
                    <Drawer.Screen 
                        name="Locations"
                        component={View}
                        options={{
                            drawerIcon: ({ color, size}) => (
                                <Ionicons name="ios-navigate" size={size} color={color}/>
                            )
                        }}
                    />
                    <Drawer.Screen 
                        name="Favorites"
                        component={View}
                        options={{
                            drawerIcon: ({ color, size}) => (
                                <Ionicons name="ios-star" size={size} color={color}/>
                            )
                        }}
                    />
                    <Drawer.Screen 
                        name="Wishlist"
                        component={View}
                        options={{
                            drawerIcon: ({ color, size}) => (
                                <Ionicons name="ios-bookmarks" size={size} color={color}/>
                            )
                        }}
                    />
                    <Drawer.Screen 
                        name="Profile"
                        component={View}
                        options={{
                            drawerIcon: ({ color, size}) => (
                                <Ionicons name="ios-person" size={size} color={color}/>
                            )
                        }}
                    />
                    <Drawer.Screen 
                        name="Settings"
                        component={View}
                        options={{
                            drawerIcon: ({ color, size}) => (
                                <Ionicons name="ios-settings" size={size} color={color}/>
                            )
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}