import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Platform, TextInput, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';

export default class SignInComponent extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            usernameOrEmail: '',
            password: '',
            check_textInputChange: false,
            secureTextEntry: true
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#6495ed" barStyle="light-content"/>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Welcome!</Text>
                </View>
                <Animatable.View 
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <Text style={styles.textFooter}>Username or Email</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput 
                            style={styles.textInput}
                            placeholder="Your Username or Email"
                            autoCapitalize="none"
                            onChangeText={(text) => {
                                if(text.length !== 0) {
                                    this.setState({
                                        usernameOrEmail: text,
                                        check_textInputChange: true
                                    })
                                } else {
                                    this.setState({
                                        usernameOrEmail: '',
                                        check_textInputChange: false
                                    })
                                }
                            }}
                        />
                        {
                            this.state.check_textInputChange 
                            ? 
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather 
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                /> 
                            </Animatable.View>
                            : null
                        }
                    </View>
                    <Text style={[styles.textFooter, {
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput 
                            style={styles.textInput}
                            placeholder="Your Password"
                            autoCapitalize="none"
                            secureTextEntry={this.state.secureTextEntry}
                            onChangeText={(text) => {
                                this.setState({
                                    password: text
                                })
                            }}
                        />
                        <TouchableOpacity onPress={ () => {
                            this.setState({ secureTextEntry: !this.state.secureTextEntry });
                            console.log(this.state.secureTextEntry);
                        }}>
                            {
                                this.state.secureTextEntry
                                ? <Feather 
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                : <Feather 
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={[styles.signIn, {
                            backgroundColor: '#6495ed'
                        }]}>
                            <Text style={[styles.textSign]}>Sign In</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            onPress={() => {
                                const { navigate } = this.props.navigation;
                                navigate('SignUp');
                            }}
                            style={[styles.signIn, {
                                borderColor: '#6495ed',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#6495ed'
                            }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6495ed'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    textFooter: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
});