import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from 'react-native-button';


const { width } = Dimensions.get('window'); 
const WIDTH_COMPONENT = width - 50;
const HEIGHT_COMPONENT = 150;
const WIDTH_CASOUREL = 230;
const HEIGHT_CASOUREL = 300;
const BORDER_RADIUS = 12;

export default class TourGuidesItemComponent extends Component {
    constructor(props) {
        super(props);
 
    }

    render() {
        const { item } = this.props;
        
        return(
            <View style={styles.container}>
                <View style={styles.containerTourGuides}>
                   <View style={styles.profileContainer}>
                        <View style={styles.avatarContainer}>
                            <Image source={item.avatar} style={styles.image}/>
                        </View>
                        <View style={styles.containerName}>
                            <View style={styles.containerNameUser}>
                                <Text style={styles.textName}>{this.props.item.name}</Text>
                                <Text style={styles.textUsername}>{`@${this.props.item.username}`}</Text>
                            </View>

                            <View style={styles.containerLikes}>
                                <View style={styles.containerLike}>
                                    <MaterialCommunityIcons name="star" size={19} color="#daa520"/>
                                    <Text style={styles.textLike}>{this.props.item.stars}</Text>
                                </View>
                            </View>
                        </View>
                   </View>
                   <View style={styles.containerButton}>
                    <Button
                        style={{ fontSize: 20, color: 'white' }}
                        containerStyle={styles.containerStyleButton}
                        onPress={() => {
                            const { navigation } = this.props;
                            navigation.navigate('DetailsGuides', {
                                avatar: item.avatar,
                                stars: item.stars,
                                name: item.name,
                                username: item.username,
                                languages: item.languages,
                                albums: item.albums
                            });
                        }}
                    >
                            View Profile
                        </Button>
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
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        borderRadius: BORDER_RADIUS,
        shadowOpacity: 0.15,
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
    containerLikes: { 
        flex: 1, 
        marginRight: 20,
        justifyContent: 'center'
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
    containerStyleButton: {
        padding: 10,
        height: 40,
        width: 120,
        marginRight: 30,
        overflow: 'visible', 
        borderRadius: 15, 
        backgroundColor: '#6495ed'
    },
    containerButton: { 
        flex: 1,
        alignItems: 'flex-end',
        marginBottom: 20
    }
});