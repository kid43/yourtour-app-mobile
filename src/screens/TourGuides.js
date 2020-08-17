import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HeaderComponent from '../components/HeaderComponent';
import TourGuidesItemComponent from '../components/TourGuidesComponent';

const { width } = Dimensions.get('window');


export default class TourGuidesComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderComponent {...this.props} isOpenSearch={true} isTourGuides={true}/>
                <TourGuidesItemComponent />
            </View>
        );
    }
}

const WIDTH_COMPONENT = width - 50;
const HEIGHT_COMPONENT = 130;
const BORDER_RADIUS = 12;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});