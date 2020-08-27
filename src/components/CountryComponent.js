import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('screen'); 

export default class CountryItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { information, index } = this.props;

        const heightScreen = index === 0 ? 400 : 320;
       
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={() => {

                const { navigation, id } = this.props;
                navigation.navigate('Places', {
                    idCountry: id
                });
            }}>
                <View style={styles.containerPlaceItem}>
                    <Image source={information.imgCountry}
                        style={{ width: width, height: heightScreen }}/>
                    <View style={[styles.layoutContainer, { width: width, height: heightScreen }]}>
                        <Text style={styles.landmarks}>{information.type}</Text>
                        <Text style={styles.city}>{information.country}</Text>
                        <View style={styles.location}>
                            <View style={styles.numberPlace}>
                                <Ionicons name="ios-pin" size={15} color="#fff"/>
                                <Text style={styles.text}>{`${information.places} places`}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    containerPlaceItem: {
        marginBottom: 1
    },
    layoutContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        position: 'absolute',
        backgroundColor: 'rgba(54, 54, 54, 0.5)'
    },
    landmarks: {
        color: '#eee',
        fontSize: 19,
        marginBottom: 10,
    },
    city: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 20
    },
    location: {
        flexDirection: 'row'
    },
    numberPlace: {
        flexDirection: 'row',
        paddingRight: 10
    },
    duration: {
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
        marginLeft: 5,
        fontWeight: '600',
        fontSize: 15
    },
});