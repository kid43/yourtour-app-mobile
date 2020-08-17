import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');


export default class PlaceItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        return(
            <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.container}>
                    <View style={styles.containerPlace}>
                        <Image source={item.image} style={styles.image}/>
                        <View style={styles.containerLayout}>
                            <Text style={styles.nameCity}>{item.nameCity}</Text>
                            <View style={styles.containerInfo}>
                                <Text style={styles.title}>{item.title}</Text>  
                                <View style={styles.containerLocation}>
                                    <Ionicons name="ios-pin" size={15} color="#fff" style={styles.location}/>
                                    <Text style={styles.location}>{`${item.location}km`}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerPlace: {
        width: width - 20,
        height: 170,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10, // android
    },
    image: {
        width: width - 20,
        height: 170,
    },
    containerLayout: {
        width: width - 20,
        height: 170,
        position: 'absolute',
        backgroundColor: 'rgba(54, 54, 54, 0.5)',
        justifyContent: 'flex-end',
        padding: 10
    },
    containerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerLocation: {
        flexDirection: 'row',
        marginRight: 20
    },
    nameCity: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '600',
        marginBottom: 7
    },
    title: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '500'
    },
    location: {
        color: '#fff',
        fontWeight: '500',
        marginLeft: 7
    },
});