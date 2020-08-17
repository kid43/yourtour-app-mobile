import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import PlaceItemComponent from '../components/PlaceComponent'

export default class PlaceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citys: [
                {
                    idCountry: 1,
                    idCity: 1,
                    nameCity: "Da Nang City",
                    title: "City of Bridges",
                    location: 3.2,
                    image: require('../assets/danang.jpg')
                },
                {
                    idCountry: 1,
                    idCity: 2,
                    nameCity: "Ho Chi Minh City",
                    title: "Pearl of the Far East",
                    location: 6.4,
                    image: require('../assets/hcm.jpg')
                },
                {
                    idCountry: 2,
                    idCity: 3,
                    nameCity: "Banff National Park",
                    title: "Recreation on Mountains and Ice Lakes",
                    location: 35.2,
                    image: require('../assets/canada-2.jpg')
                },
                {
                    idCountry: 3,
                    idCity: 4,
                    nameCity: "The Colosseum",
                    title: "The Great Arena of Ancient Roman",
                    location: 16.7,
                    image: require('../assets/italy-2.jpg')
                },
                {
                    idCountry: 3,
                    idCity: 5,
                    nameCity: "Leaning Tower of Pisa",
                    title: "Sophisticated tilted tower from the 14th century",
                    location: 27,
                    image: require('../assets/italy-3.jpg')
                },
            ]
        }
    }

    render() {
        return(
          <View style={styles.container}>
              <HeaderComponent  {...this.props} isOpenSearch={true}/>
              <Text style={styles.textPopular}>Popular Destination</Text>
              <FlatList 
                data={this.state.citys}
                keyExtractor={item => item.idCity.toString()}
                renderItem={({ item, index }) => {
                    return (item.idCountry === this.props.route.params.idCountry)
                        && <PlaceItemComponent item={item} index={index} {...this.props}/> 
                }}
              />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textPopular: {
        margin: 10,
        fontSize: 18,
        color: '#aaa',
        fontWeight: '600'
    }
})