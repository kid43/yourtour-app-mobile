import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import ProfileItemComponent from '../components/ProfileComponent';

export default class ProfileComponent extends Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderComponent {...this.props} isTitle="Profile" isOpenSearch={false} isHome={true}/>
                <ProfileItemComponent />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})