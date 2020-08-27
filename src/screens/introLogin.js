import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';

export default class LoginComponent extends Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#6495ed" barStyle="light-content"/>
                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                    />
                </View>
                <Animatable.View 
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <Text style={styles.title}>Stay connected with everyone!</Text>
                    <Text style={styles.text}>Sign in with account</Text>
                    <View style={styles.button}>
                        <Button 
                            containerStyle={styles.signIn}
                            onPress={() => {
                                const { navigate } = this.props.navigation;
                                navigate('SignIn');
                            }}
                        >
                            <Text style={styles.textSign}>Get Stared</Text>
                            <Icon name="navigate-next" color="#fff" size={20}/>
                        </Button>
                    </View>
                </Animatable.View>
            </View>
        );
    }
}

const { height } = Dimensions.get('screen');
const HEIGHT_LOGO = height * 0.28

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6495ed'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: HEIGHT_LOGO,
        height: HEIGHT_LOGO
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 130,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: '#6495ed'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});