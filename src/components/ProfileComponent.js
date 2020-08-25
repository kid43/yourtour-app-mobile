import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'


import HeaderComponent from '../components/HeaderComponent';

const InfomationItem = ({ itemLeft, itemRight }) => {
    return(
        <View style={styles.containerItem}>
            <View style={styles.containerTextLeft}>
                <Text style={styles.textItemLeft}>{itemLeft}</Text>
            </View>
            <View style={styles.containerTextRight}>
                {
                    itemLeft !== 'Password:' 
                    ? <Text style={styles.textItemRight}>{itemRight}</Text>
                    : <Text style={styles.textItemRightPassword}>password is not displayed</Text>
                }
            </View>
            <TouchableOpacity style={styles.containerButtonEdit}>
                <Text style={styles.TextButtonEdit}>Edit</Text>
            </TouchableOpacity>
        </View>
    );
}

export default class ProfileItemComponent extends Component { 
    constructor(props) {
        super(props);

        const { avatar } = this.props.route.params

        this.state = {
            avatar
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    //thu vien upload anh
    getPermissionAsync = async () => {
        if(Platform.OS) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if(status !== 'granted') {
                Alert.alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    
    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            });

            if(!result.cancelled) {
                this.setState({ avatar: result.uri })
            }

        } catch(error) {

        }
    }
    //thu vien upload anh

    render() {
        return(
            <View style={styles.container}>

                <HeaderComponent {...this.props} 
                isTitle="Profile" isOpenSearch={false} 
                isHome={true} isSave={true} 
                state={this.state}/>

                <View style={styles.containerTop}>
                    <View style={styles.containerMain}>
                        <View style={styles.containerImage}>
                            {
                                this.state.avatar &&
                                <Image source={{uri: this.state.avatar}} style={styles.image}/>
                            }
                        </View>
                        <Text style={styles.textName}>Jennie</Text>
                        <Text style={styles.textUsername}>@jennierubyjane</Text>
                        <TouchableOpacity style={styles.containerChangeImage} onPress={this._pickImage}>
                            <Text style={styles.textChangeImage}>Change Image</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerBottom}>
                    <View style={styles.containerInfomation}>
                        <Text style={styles.title}>User personal information</Text>
                        <InfomationItem itemLeft="Name:" itemRight="Jennie"/>
                        <InfomationItem itemLeft="Email:" itemRight="jennieblackpink@gmail.com"/>
                        <InfomationItem itemLeft="Password:" itemRight=""/>
                        <InfomationItem itemLeft="Phone:" itemRight="0123-456-789"/>
                    </View>
                </View>
            </View>
        );
    }
}

const WIDTH_IMAGE = 120;
const HEIGHT_IMAGE = 120;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerTop: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 20
    },
    containerMain: {
        alignItems: 'center'
    },
    containerImage: {
        width: WIDTH_IMAGE,
        height: HEIGHT_IMAGE,
        borderRadius: WIDTH_IMAGE / 2,
        margin: 20
    },
    image: {
        width: WIDTH_IMAGE,
        height: HEIGHT_IMAGE,
        borderRadius: WIDTH_IMAGE / 2
    },
    containerChangeImage: {
        padding: 20,
        paddingVertical: 15,
        margin: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        borderRadius: 10,
        shadowOpacity: .1,
        shadowRadius: 1.2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    textChangeImage: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
        color: '#6495ed'
    },
    textName: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 3
    },
    textUsername: {
        color: '#999',
        fontWeight: '500'
    },
    title: {
        margin: 20,
        fontSize: 20,
        fontWeight: '600',
        color: '#aaa'
    },
    containerItem: {
        marginTop: 10,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 30,
        
    },
    containerTextLeft: {
        flex: 1
    },
    containerTextRight: {
        flex: 2
    },
    textItemLeft: {
        fontSize: 15,
        color: '#777'
    },
    textItemRight: {
        fontSize: 16,
        fontWeight: '600',
    },
    textItemRightPassword: {
        fontSize: 16,
        fontWeight: '600',
        color: '#999'
    },
    containerButtonEdit: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 30
    },
    TextButtonEdit: {
        fontSize: 18,
        fontWeight: '600',
        color: '#6495ed'
    }
})