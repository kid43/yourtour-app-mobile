import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Button from 'react-native-button';

import HeaderComponent from '../components/HeaderComponent';
import DetailsPlaceItemComponent from '../components/DetailsPlaceComponent';

const { width } = Dimensions.get('window');
const WIDTH_CAROUSEL = 150;
const HEIGHT_CAROUSEL = 250;
const BORDER_RADIUS = 12;
const AVATAR_WIDTH = 90;
const AVATAR_HEIGHT = 90;
const AVATAR_BORDER = 45;


export default class DetailsGuidesItemComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            iamges: this.props.item.albums
        }
    }

    _renderItem = ({item}) => {
        return (
            <View style={styles.containerImage}>
                <Image source={item.image} style={styles.image}/>
            </View>
        );
    }
    

    render() {
        const { item } = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.ContainerInformation}>
                    <Text style={styles.textInfomation}>Information of Tour Guide</Text>
                    <View style={styles.containerTop}>
                        <View style={styles.containerLeft}>
                            <View style={styles.containerAvatar}>
                                <Image source={item.avatar} style={styles.avatar}/>
                            </View>
                            <View style={styles.containerName}>
                                <Text style={styles.textName}>{item.name}</Text>
                                <Text style={styles.textUsername}>{`@${item.username}`}</Text>
                            </View>
                        </View>
                        <View style={styles.containerRight}>
                            <View style={styles.containerSpecialized}>
                                <View style={styles.containerLanguage}>
                                    <Text style={styles.label}>Languages:</Text>
                                    <Text style={styles.textLanguage}>{item.languages}</Text>
                                </View>
                                <View style={styles.containerRate}>
                                    <Rating 
                                        type="star"
                                        ratingCount={5}
                                        imageSize={20}
                                        onFinishRating={this.ratingCompleted}
                                        readonly={true}
                                        startingValue={3.5}
                                    />
                                    <Text style={styles.styleViewers}>{`(${item.stars} reviews)`}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerBottom}>
                        <View style={styles.containerCasourel}>
                            <Carousel 
                                layout="default"
                                data={item.albums}
                                sliderWidth={width}
                                itemWidth={WIDTH_CAROUSEL}
                                renderItem={this._renderItem}
                                onSnapToItem={index => this.setState({ activeIndex: index })}
                            />
                        </View>
                        <View style={styles.containerButton}>
                            <Button 
                                containerStyle={styles.containerStyleButton}
                                style={styles.button}
                                onPress={() => {

                                }}
                            >
                                Book Guide
                            </Button>
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
        marginTop: 20,
    },
    containerCasourel: {
        marginVertical: 20
    },
    containerImage: {
        width: WIDTH_CAROUSEL,
        height: HEIGHT_CAROUSEL,
        shadowColor: '#111',
        shadowOpacity: .6,
        shadowRadius: 6.27,
        borderRadius: BORDER_RADIUS,
        shadowOffset: {
            width: 0,
            height: 5
        }
    },
    image: {
        width: WIDTH_CAROUSEL,
        height: HEIGHT_CAROUSEL
    },
    ContainerInformation: {
        width: width,
        height: 600,
        shadowColor: '#111',
        shadowRadius: 6.7,
        borderRadius: BORDER_RADIUS,
        shadowOpacity: .6,
        shadowOffset: {
            width: 0,
            height: 5
        },
        backgroundColor: '#fff'
    },
    containerAvatar: {
        width: AVATAR_WIDTH,
        height: AVATAR_HEIGHT,
        borderRadius: AVATAR_BORDER,
        marginHorizontal: 20,
        marginVertical: 10
    },
    avatar: {
        width: AVATAR_WIDTH,
        height: AVATAR_HEIGHT,
        borderRadius: AVATAR_BORDER
    },
    textInfomation: {
        margin: 20,
        fontSize: 18,
        color: '#888',
        fontWeight: '600'
    },
    containerTop: {
        flexDirection: 'row',
        alignItems:'flex-start',

    },
    containerName: {
        alignItems: 'center'
    },
    textName: {
        fontSize: 22,
        color: '#111',
        fontWeight: '600',
        marginBottom: 6,
    },
    textUsername: {
        fontSize: 16,
        color: '#aaa',
        fontWeight: '500',
    },
    containerTextName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerRight: {
        marginLeft: 20,
        marginTop: 20
    },
    containerLanguage: {

    },
    label: {
        fontSize: 17,
        color: '#888',
        fontWeight: '600',
        marginBottom: 3
    },
    textLanguage: {
        fontSize: 18,
        fontWeight: '500'
    },
    containerRate: {
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'flex-start',
    },
    styleViewers: {
        fontSize: 18,
        marginLeft: 5,
        color: '#888'
    },
    containerButton: {
        alignItems: 'center'
    },
    containerStyleButton: {
        marginVertical: 20,
        padding: 12,
        paddingHorizontal: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#6495ed'
    },
    button: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'
    }
});