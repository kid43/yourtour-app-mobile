import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');


export default class PlaceItemComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onTap: false
        }
    }

    render() {
        const { item, navigation } = this.props;
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
                navigation.navigate('DetailsPlace', {
                    idCity: item.idCity
                });
            }}>
                <View style={styles.container}>
                    <View style={styles.containerPlace}>
                        <Image source={item.image} style={styles.image}/>
                        <View style={styles.containerLayout}>
                            <Text style={styles.nameCity}>{item.nameCity}</Text>
                            <View style={styles.containerInfo}>
                                <View style={styles.containerTourGuides}>
                                    <Text style={styles.title}>{`${item.tourGuides} tour guides`}</Text>
                                    <MaterialCommunityIcons name="account-multiple" size={17} color="#fff" style={styles.location}/>
                                </View>
                                <View style={styles.containerLocation}>
                                    <TouchableOpacity onPress={() => {
                                        this.setState({
                                            onTap: !this.state.onTap
                                        })
                                    }}>
                                        {
                                            !this.state.onTap
                                                ? <MaterialCommunityIcons name="heart-outline" size={20} color="#fff" style={styles.location}/>
                                                : <MaterialCommunityIcons name="heart" size={20} color="#fff" style={styles.location}/>
                                        }
                                    </TouchableOpacity>                 
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const WIDTH_COMPONENT = width - 50;
const HEIGHT_COMPONENT = 130;
const BORDER_RADIUS = 12;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    containerPlace: {
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
    image: {
        width: WIDTH_COMPONENT,
        height: HEIGHT_COMPONENT,
        borderRadius: BORDER_RADIUS,
    },
    containerLayout: {
        width: WIDTH_COMPONENT,
        height: HEIGHT_COMPONENT,
        position: 'absolute',
        backgroundColor: 'rgba(54, 54, 54, 0.5)',
        justifyContent: 'flex-end',
        padding: 10,
        borderRadius: BORDER_RADIUS,
    },
    containerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerLocation: {
        flexDirection: 'row',
        marginRight: 10
    },
    nameCity: {
        fontSize: 27,
        color: '#fff',
        fontWeight: '600',
        marginBottom: 7
    },
    containerTourGuides: {
        flexDirection: 'row'
    },
    title: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
    },
    location: {
        color: '#fff',
        fontWeight: '500',
        marginLeft: 7
    },
});