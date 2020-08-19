import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';

import HeaderComponent from '../components/HeaderComponent';
import DetailsPlaceItemComponent from '../components/DetailsPlaceComponent';

const { width } = Dimensions.get('window');
const WIDTH_CAROUSEL = 250;
const HEIGHT_CAROUSEL = 300;
const BORDER_RADIUS = 12;


export default class DetailsPlaceComponent extends Component {
    constructor(props) {
        super(props);

        const { route } = this.props;
        
        if(route.params.images) {
            this.state = { 
                activeIndex: 0,
                images: route.params.images
            }
        } else {
            this.state = { 
                activeIndex: 0,
                images: []
            }
        }
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.containerImage}>
                <Image source={item.imgCountry} style={styles.image}/>
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderComponent {...this.props} isOpenSearch={true} isTourGuides={false}/>
                <View style={{ flex: 1.7}}>
                    <Text style={styles.textPopular}>Some Pictures of Where You Travel</Text>
                    <Carousel 
                        layout="default"
                        ref={ref => this.carousel = ref}
                        data={this.state.images}
                        sliderWidth={width}
                        itemWidth={WIDTH_CAROUSEL}
                        renderItem={(this._renderItem)}
                        onSnapToItem={index => this.setState({activeIndex: index})}
                    />
                </View>
                <View style={{ flex: 1}}>
                    <DetailsPlaceItemComponent {...this.props}/>
                </View>
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