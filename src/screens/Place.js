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
                    tourGuides: 20,
                    image: require('../assets/danang.jpg'),
                    images: [
                        {
                            imgCountry: require('../assets/hoian.jpg'),
                        },
                        {
                            imgCountry: require('../assets/banahill.jpg'),
                        },
                        {
                            imgCountry: require('../assets/causonghan.jpg'),
                        },
                    ]
                },
                {
                    idCountry: 1,
                    idCity: 2,
                    nameCity: "Ho Chi Minh City",
                    tourGuides: 30,
                    image: require('../assets/hcm.jpg'),
                    images: [
                        {
                            imgCountry: require('../assets/phodibo.jpg'),
                        },
                        {
                            imgCountry: require('../assets/toanhaphcm.jpg'),
                        },
                        {
                            imgCountry: require('../assets/nhatho.jpg'),
                        },
                    ]
                },
                {
                    idCountry: 2,
                    idCity: 3,
                    nameCity: "Banff National Park",
                    tourGuides: 10,
                    image: require('../assets/canada-2.jpg'),
                    images: [
                        {
                            imgCountry: require('../assets/banff-1.jpg'),
                        },
                        {
                            imgCountry: require('../assets/banff-2.jpg'),
                        },
                        {
                            imgCountry: require('../assets/banff-3.jpg'),
                        },
                    ]
                },
                {
                    idCountry: 3,
                    idCity: 4,
                    nameCity: "The Colosseum",
                    tourGuides: 8,
                    image: require('../assets/italy-2.jpg'),
                    images: [
                        {
                            imgCountry: require('../assets/colo-1.jpg'),
                        },
                        {
                            imgCountry: require('../assets/colo-2.jpg'),
                        },
                        {
                            imgCountry: require('../assets/colo-3.jpg'),
                        },
                    ]
                },
                {
                    idCountry: 3,
                    idCity: 5,
                    nameCity: "Leaning Tower of Pisa",
                    tourGuides: 15,
                    image: require('../assets/italy-3.jpg'),
                    images: [
                        {
                            imgCountry: require('../assets/pisa-1.jpg'),
                        },
                        {
                            imgCountry: require('../assets/pisa-2.jpg'),
                        },
                        {
                            imgCountry: require('../assets/pisa-3.jpg'),
                        },
                    ]
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
        backgroundColor: '#fff'
    },
    textPopular: {
        margin: 20,
        fontSize: 20,
        color: '#aaa',
        fontWeight: '600'
    }
})