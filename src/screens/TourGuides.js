import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
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
            tourGuides: [
                {
                    id: 1,
                    name: "JENNIE",
                    username: 'jennierubyjane',
                    stars: '1.982',
                    avatar: require('../assets/jennie-logo.jpg'),
                    languages: "English, Korean",
                    albums: [
                        {
                            image: require('../assets/jennie-1.jpg')
                        },
                        {
                            image: require('../assets/jennie-2.jpg')
                        },
                        {
                            image: require('../assets/jennie-3.jpg')
                        },
                        {
                            image: require('../assets/jennie-4.jpg')
                        },
                        {
                            image: require('../assets/jennie-5.jpg')
                        },
                    ]
                },
                {
                    id: 2,
                    name: "ROSÉ",
                    username: 'roses_are_rosie',
                    stars: '1.523',
                    avatar: require('../assets/rose-1.jpg'),
                    languages: "English, Australian, Korean",
                    albums: [
                        {
                            image: require('../assets/rose-1.jpg')
                        },
                        {
                            image: require('../assets/rose-2.jpg')
                        },
                        {
                            image: require('../assets/rose-3.jpg')
                        },
                        {
                            image: require('../assets/rose-4.jpg')
                        },
                        {
                            image: require('../assets/rose-5.jpg')
                        },
                    ]
                },
                {
                    id: 3,
                    name: "LISA",
                    username: 'lalalalisa_m',
                    stars: '2.682',
                    avatar: require('../assets/lisa.jpg'),
                    languages: "English, Thailand, Korean, Japanese",
                    albums: [
                        {
                            image: require('../assets/lisa-1.jpg')
                        },
                        {
                            image: require('../assets/lisa-2.jpg')
                        },
                        {
                            image: require('../assets/lisa-3.jpg')
                        },
                        {
                            image: require('../assets/lisa-4.jpg')
                        },
                        {
                            image: require('../assets/lisa-5.jpg')
                        },
                    ]
                },
                {
                    id: 4,
                    name: "JISOO",
                    username: 'sooyaaa__',
                    stars: '1.123',
                    avatar: require('../assets/jisoo.jpg'),
                    languages: "English, Korean, Japanese",
                    albums: [
                        {
                            image: require('../assets/jisoo-1.jpg')
                        },
                        {
                            image: require('../assets/jisoo-2.jpg')
                        },
                        {
                            image: require('../assets/jisoo-3.jpg')
                        },
                        {
                            image: require('../assets/jisoo-4.jpg')
                        },
                        {
                            image: require('../assets/jisoo-5.jpg')
                        },
                    ]
                },
            ]
        }
    }

    _renderItem = ({item, index}) => {
        return(
            <TourGuidesItemComponent item={item} index={index} {...this.props}/>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderComponent {...this.props} isOpenSearch={true} isTourGuides={true}/>
                <Text style={styles.textPopular}>List of Tour Guides</Text>
                <FlatList
                    data={this.state.tourGuides}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this._renderItem}
                />
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
        fontSize: 18,
        color: '#888',
        fontWeight: '600'
    }
});