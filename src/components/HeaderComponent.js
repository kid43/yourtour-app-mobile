import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isOpenSearch, isHome, isTourGuides } = this.props;
        let textPlaceHolder = !isTourGuides ? 'Enter city you want to go?' : 'Enter name you want to tour guides?'
        return(
            <View style={[styles.container, {
                backgroundColor: isOpenSearch ? '#6495ed' : 'rgba(52, 52, 52, 0.1)' //trong suot
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
                                marginRight: isOpenSearch ? 0 : 35
                            }]}>Your Tours</Text> 
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
                <View />
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
})