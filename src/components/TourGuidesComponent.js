import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const { width } = Dimensions.get('window'); 
const WIDTH_COMPONENT = width - 50;
const HEIGHT_COMPONENT = 100;
const BORDER_RADIUS = 12;

export default class TourGuidesItemComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerTourGuides}>
                   <View style={styles.profileContainer}>
                        <View style={styles.avatarContainer}>
                            <MaterialCommunityIcons name="account" size={42} color="#fff"/>
                        </View>
                        <View style={styles.containerName}>
                            <Text style={styles.textName}>Le Hung Phong</Text>
                            <Text style={styles.textUsername}>@phongcozyboy__</Text>
                        </View>
                   </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    containerTourGuides: {
        width: WIDTH_COMPONENT,
        height: HEIGHT_COMPONENT,
        backgroundColor: '#fff',
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        borderRadius: BORDER_RADIUS,
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10, // android
    },
    profileContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    avatarContainer: {
        width: 64,
        height: 64,
        padding: 10,
        marginHorizontal:17,
        borderRadius: 32,
        backgroundColor: '#bbb',
    },
    containerName: {
        
    },
    textName: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 5
    },
    textUsername: {
        fontSize: 13,
        fontWeight: '500',
        color: '#aaa'
    }
});