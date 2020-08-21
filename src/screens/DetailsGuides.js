import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';

import HeaderComponent from '../components/HeaderComponent';
import DetailsGuidesItemComponent from '../components/DetailsGuidesComponent';

const { width } = Dimensions.get('window');
const WIDTH_CAROUSEL = 250;
const HEIGHT_CAROUSEL = 300;
const BORDER_RADIUS = 12;

export default class TourGuidesScreen extends Component {
    constructor(props) {
        super(props);

        const { route } = this.props;
        this.state = {
            user: {
                name: route.params.name,
                username: route.params.username,
                stars: route.params.stars,
                languages: route.params.languages,
                albums: route.params.albums,
                avatar: route.params.avatar
            }
        }

    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderComponent {...this.props} isOpenSearch={true} isTourGuides={true}/>
                <DetailsGuidesItemComponent item={this.state.user}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})