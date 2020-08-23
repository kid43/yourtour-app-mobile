import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import WishListItem from '../components/WishListComponent';

export default class WishListComponent extends Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderComponent isTitle={"Wish List"} isOpenSearch={false} isHome={true} {...this.props}/>
                <Text style={styles.textMarked}>Tourist places you have marked</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textMarked: {
        margin: 20,
        fontSize: 20,
        color: '#888',
        fontWeight: '600'
    }
})