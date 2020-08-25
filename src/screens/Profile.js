import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProfileItemComponent from '../components/ProfileComponent';

export default class ProfileComponent extends Component { 
    constructor(props) {
        super(props);
    }

    
    render() {
        return(
            <View style={styles.container}>
                <ProfileItemComponent {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})