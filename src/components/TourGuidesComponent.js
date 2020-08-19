import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel, {  Pagination } from 'react-native-snap-carousel';


const { width } = Dimensions.get('window'); 
const WIDTH_COMPONENT = width - 50;
const HEIGHT_COMPONENT = 500;
const WIDTH_CASOUREL = 230;
const HEIGHT_CASOUREL = 300;
const BORDER_RADIUS = 12;

export default class TourGuidesItemComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            activeIndex: 0,
            images: [
                {
                    image: require('../assets/gd-1.jpg')
                },
                {
                    image: require('../assets/gd-2.jpg')
                },
                {
                    image: require('../assets/gd-3.jpg')
                },
                {
                    image: require('../assets/gd-4.jpg')
                },
                {
                    image: require('../assets/gd-5.jpg')
                },
            ]
        }
    }

    _renderItem = ({item, index}) => {
        return(
            <Image source={item.image} style={styles.imageSlide}/>
        );
    }

    get pagination() {
         const { images, activeIndex } = this.state;
         return (
            <Pagination 
                dotsLength={images.length}
                activeDotIndex={activeIndex}
                containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.92)' }}
                dotStyle={{
                    width: 5,
                    height: 5,
                    borderRadius: 5,
                    marginHorizontal: 5,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
         );
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerTourGuides}>
                   <View style={styles.profileContainer}>
                        <View style={styles.avatarContainer}>
                            <Image source={require('../assets/gd-logo.jpg')} style={styles.image}/>
                        </View>
                        <View style={styles.containerName}>
                            <View style={styles.containerNameUser}>
                                <Text style={styles.textName}>{this.props.item.name}</Text>
                                <Text style={styles.textUsername}>{`@${this.props.item.username}`}</Text>
                            </View>

                            <View style={styles.containerLikesAndNext}>
                                <View style={styles.containerLike}>
                                    <MaterialCommunityIcons name="heart" size={18} color="#aaa"/>
                                    <Text style={styles.textLike}>{this.props.item.likes}</Text>
                                </View>
                                <TouchableOpacity style={styles.containerTextProfile}>
                                    <Text style={styles.textNextProfile}>Guide Profile+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                   </View>
                   <View style={styles.containerSlide}>
                        <Carousel
                            layout="default"
                            data={this.state.images}
                            sliderWidth={350}
                            itemWidth={WIDTH_CASOUREL}
                            renderItem={this._renderItem}
                            onSnapToItem={(index) => this.setState({ activeIndex: index })}
                        />
                        {this.pagination}
                   </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
        alignItems: 'flex-start',
        marginVertical: 30,
        flexDirection: 'row'
    },
    avatarContainer: {
        width: 64,
        height: 64,
        marginHorizontal:17,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    containerName: {
        flexDirection: 'row',
        marginTop: 10
    },
    textName: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 3
    },
    textUsername: {
        fontSize: 15,
        fontWeight: '500',
        color: '#aaa'
    },
    textNextProfile: {
        color: '#1e90ff', 
        fontSize: 13, 
        marginTop: 9, 
        fontWeight: '600',
    },
    containerNameUser: {
        flex: 1,
    },
    containerLikesAndNext: { 
        flex: 1, 
        marginRight: 20
    },
    containerLike: {
        flexDirection: 'row',
    },
    textLike: {
        marginLeft: 6,
        fontSize: 16,
        color: '#666',
        fontWeight: '600'
    },
    containerTextProfile: {
        flexDirection: 'row',
    },
    containerSlide: {
        flex: 5,
    },
    imageSlide: {
        width: WIDTH_CASOUREL,
        height: HEIGHT_CASOUREL,
    }
});