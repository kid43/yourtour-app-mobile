import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator  } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import IntroLoginScreen from '../screens/introLogin';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import CountryScreen from '../screens/Country';
import PlaceScreen from '../screens/Place';
import TourGuidesScreen from '../screens/TourGuides';
import DetailsPlaceScreen from '../screens/DetailsPlace';
import DetailsTourGuidesScreen from '../screens/DetailsGuides';
import WishListScreen from '../screens/WishList';
import ProfileScreen from '../screens/Profile';
import EditProfileScreen from '../screens/Edit';

import DrawerContent  from './DrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackRoot = () => {
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="IntroLogin" component={IntroLoginScreen}/>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
    );
}

const StackHome = () => {
    return(
        <Stack.Navigator initialRouteName="Root" headerMode="none">
            {/* <Stack.Screen name="Root" component={StackRoot}/> */}
            <Stack.Screen name="Home" component={CountryScreen}/>
            <Stack.Screen name="Places" component={PlaceScreen}/>
            <Stack.Screen name="TourGuides" component={TourGuidesScreen}/>
            <Stack.Screen name="DetailsPlace" component={DetailsPlaceScreen}/>
            <Stack.Screen name="DetailsGuides" component={DetailsTourGuidesScreen}/>
        </Stack.Navigator>
    );
}

const StackWishLish = () => {
    return(
        <Stack.Navigator initialRouteName="WishList" headerMode="none">
            <Stack.Screen name="WishList" component={WishListScreen}/>
        </Stack.Navigator>
    );
}

const StackProfile = props => {
    return(
        <Stack.Navigator initialRouteName="Profile" headerMode="none">
            <Stack.Screen name="Profile"> 
                { () => <ProfileScreen {...props} /> }
            </Stack.Screen>
            <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
        </Stack.Navigator>
    );
}

export default class ScreensNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={ props => <DrawerContent {...props} />}
                    initialRouteName="CountryScreenDrawer"
                    drawerStyle={{
                        width: 230
                    }}
                    drawerContentOptions={{
                        activeTintColor: 'steelblue',
                        inactiveTintColor: 'gray',
                        itemStyle: { marginVertical: 10 },
                    }}
                >
                    <Drawer.Screen 
                        name="HomeDrawer"
                        component={StackHome}
                        options={{
                            drawerIcon: ({ color, size}) => (
                                <Ionicons name="ios-home" size={size} color={color}/>
                            )
                        }}
                    />
                    <Drawer.Screen 
                        name="ChatbotDrawer"
                        component={View}
                        options={{
                            drawerIcon: ({ color, size}) => (
                                <MaterialCommunityIcons name="robot" size={size} color={color}/>
                            )
                        }}
                    />
                    <Drawer.Screen 
                        name="WishlistDrawer"
                        component={StackWishLish}
                        options={{
                            drawerIcon: ({ color, size}) => (
                                <Ionicons name="ios-bookmarks" size={size} color={color}/>
                            )
                        }}
                    />
                    <Drawer.Screen 
                        name="ProfileDrawer"
                        component={StackProfile}
                        options={{
                            drawerIcon: ({ color, size}) => (
                                <Ionicons name="ios-person" size={size} color={color}/>
                            )
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}