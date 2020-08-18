import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';

import HeaderComponent from '../components/HeaderComponent';
import TourGuidesItemComponent from '../components/TourGuidesComponent';

const { width } = Dimensions.get('window');
const WIDTH_CAROUSEL = 250;
const HEIGHT_CAROUSEL = 300;
const BORDER_RADIUS = 12;


export default class TourGuidesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            images: [
                {
                    imgCountry: require('../assets/vietnam.jpg'),
                },
                {
                    imgCountry: require('../assets/canada.jpg'),
                },
                {
                    imgCountry: require('../assets/italy.jpg'),
                }
            ]
        }
    }

    _renderItem = ({item, index}) => {
        return(
            <View style={styles.containerImage}>
                <Image source={item.imgCountry} style={styles.image}/>
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderComponent {...this.props} isOpenSearch={true} isTourGuides={true}/>
                <Text style={styles.textPopular}>List of Tour Guides</Text>
                <TourGuidesItemComponent />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerImage: {
        marginTop: 20,
        width: WIDTH_CAROUSEL,
        height: HEIGHT_CAROUSEL,
        shadowColor: "#000",
        borderRadius: 12,
        shadowRadius: BORDER_RADIUS,
        shadowOpacity: .4,
        shadowOffset: {
            width: 5,
            height: 5
        }
    },
    image: {
        width: WIDTH_CAROUSEL,
        height: HEIGHT_CAROUSEL,
    },
    textPopular: {
        margin: 20,
        fontSize: 20,
        color: '#aaa',
        fontWeight: '600'
    }
});