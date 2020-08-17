import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import CountryItemComponent from '../components/CountryComponent'

export default class CountryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [
                {
                    id: 1,
                    information: {
                        imgCountry: require('../assets/vietnam.jpg'),
                        type: 'The Majestic Natural Landscape',
                        country: 'Pride of Vietnam',
                        places: 63,
                    }
                },
                {
                    id: 2,
                    information: {
                        imgCountry: require('../assets/canada.jpg'),
                        type: 'Natural Landmarks',
                        country: 'Wonders of Canada',
                        places: 80
                    }
                },
                {
                    id: 3,
                    information: {
                        imgCountry: require('../assets/italy.jpg'),
                        type: 'History & Culture',
                        country: 'Treasures of Italy',
                        places: 75
                    }
                }
            ] 
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.state.locations}
                    renderItem={({ item, index }) => {
                        return <CountryItemComponent {...this.props} {...item} index={index} />
                    }}
                    keyExtractor={item => item.id.toString()}
                />
                <View style={styles.containerLayoutHeader}>
                    <HeaderComponent {...this.props} isOpenSearch={false} isHome={true}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerLayoutHeader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0
    }
})