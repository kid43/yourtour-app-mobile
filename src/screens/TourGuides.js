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
                    likes: '1.982',
                    avatar: require('../assets/jennie-logo.jpg')
                },
                {
                    id: 2,
                    name: "ROSÉ",
                    username: 'roses_are_rosie',
                    likes: '1.523',
                    avatar: require('../assets/rose-1.jpg')
                },
                {
                    id: 3,
                    name: "LISA",
                    username: 'lalalalisa_m',
                    likes: '2.682',
                    avatar: require('../assets/lisa.jpg')
                },
                {
                    id: 4,
                    name: "JISOO",
                    username: 'sooyaaa__',
                    likes: '1.123',
                    avatar: require('../assets/jisoo.jpg')
                },
            ]
        }
    }

    _renderItem = ({item, index}) => {
        return(
            <TourGuidesItemComponent item={item} index={index}/>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderComponent {...this.props} isOpenSearch={true} isTourGuides={true}/>
                <View style={styles.containerCover}>
                    <Image source={require('../assets/causonghan.jpg')} style={styles.imageCover}/>
                </View>
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
    },
    containerCover: {
        width: width,
        height: 180,
        shadowColor: '#000',
        borderRadius: 12,
        shadowRadius: BORDER_RADIUS,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: .4,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    imageCover: {
        width: width,
        height: 180,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
});