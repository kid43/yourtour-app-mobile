import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const { width } = Dimensions.get('window'); 
const WIDTH_COMPONENT = width - 20;
const HEIGHT_COMPONENT = 200;
const BORDER_RADIUS = 12;

export default class DetailsPlaceItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerInfoPlace}>
                   <View style={styles.containerDetailsPlace}>
                       
                    <View style={styles.containerBookmarks}>
                        <Text style={styles.textNameCity}>Da Nang City</Text>   
                    </View>

                    <Text style={styles.textContent}>
                        Danang is a developing coastal city in the central part of Vietnam and is known as one of the largest cities alongside Hanoi and Ho Chi Minh city. Visiting Da Nang, you will be astounded by the amazing natural landscape, the friendly locals and a countless number of great attractions around the city. The city is surrounded by many great attractions such as Ba Na Hills, The Marble Mountains, My Son Sanctuary and many more…
                    </Text>

                    <TouchableOpacity onPress={() => {
                        const { navigation } = this.props;
                        navigation.navigate('TourGuides', {
                            
                        });
                    }}>
                        <Text style={styles.textNextGuides}>Show The Guides for That Place >></Text>
                    </TouchableOpacity>
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
    containerInfoPlace: {
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
    containerDetailsPlace: {
        padding: 12
    },
    textNameCity: {
        marginBottom: 7,
        fontSize: 25,
        fontWeight: '600'
    },
    textContent: {
        fontSize: 15,
        fontWeight: '500',
        color: '#aaa'
    },
    containerBookmarks: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textNextGuides: { 
        textAlign: 'right', 
        color: '#1e90ff', 
        fontSize: 13, 
        marginTop: 9, 
        fontWeight: '600' 
    }
});