import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    _onSave = () => {
        Alert.alert('Notification', 'Do you want to save it or not ?', [
            {
                text: 'OK',
                onPress: () => {
                    const { goBack } = this.props.navigation;
                    const { params } = this.props.route;
                    const newAvatar = this.props.state.avatar

                    params.onReturnData(newAvatar);
                    goBack();
                }
            },
            {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel'
            }
        ], { cancelable: false });
    }

    render() {
        const { isOpenSearch, isHome, isTourGuides, isTitle, isSave } = this.props;
        const textDrawer = isTitle ? isTitle : 'YourTour';
        let textPlaceHolder = !isTourGuides ? 'Enter city you want to go?' : 'Enter name you want to tour guides?'
        return(
            <View style={[styles.container, {
                backgroundColor: (isOpenSearch || isTitle) ? '#6495ed' : 'rgba(52, 52, 52, 0.1)' //trong suot
             }]}>
                {
                    (isHome ?  <TouchableOpacity onPress={() => {
                                        const { navigation } = this.props;
                                        navigation.openDrawer();
                                    }}>
                                    <Ionicons name="ios-menu" size={30} color="#fff" style={styles.iconMenu}/>
                                </TouchableOpacity>
                            : <TouchableOpacity onPress={() => {
                                        const { navigation } = this.props;
                                        navigation.goBack();
                                    }}>
                                    <Ionicons name="ios-arrow-back" size={30} color="#fff" style={styles.iconMenu}/>
                                </TouchableOpacity>)
                }
                {
                    isOpenSearch === false 
                        ?   <Text style={[styles.brand, { 
                                marginRight: (isOpenSearch || isSave === true) ? 0 : 35
                            }]}>{textDrawer}</Text> 
                        :
                            <View style={styles.containerSearch}>
                                <TextInput 
                                    style={styles.textInput}
                                    autoCorrect={false}
                                    placeholder={textPlaceHolder}
                                /> 
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => {

                                    }}
                                    style={styles.containerIcon}
                                >
                                    <Ionicons name="ios-search" size={23} color="gray" style={styles.iconSearch}/>
                                </TouchableOpacity> 
                            </View>
                }
                {
                    isSave 
                    ? <TouchableOpacity 
                        style={styles.containerSave}
                        onPress={this._onSave}
                    >
                        <Text style={styles.textSave}>Save</Text>
                    </TouchableOpacity>
                    : <View />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconMenu: {
        marginLeft: 15,
    },
    brand: {
        fontFamily: 'Arial',
        color: '#fff',
        fontSize: 24,
        fontWeight: '500'
    },
    containerSearch: {
        flexDirection: 'row',
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 250,
        height: 40,
        backgroundColor: '#fff',
        padding: 5,
        paddingLeft: 10
    },
    containerIcon: {
        backgroundColor: '#fff',
        padding: 7.2,
        paddingRight: 17
    },
    containerSave: {
        marginRight: 10
    },
    textSave: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff'
    }
})