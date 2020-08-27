import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, Dimensions } from 'react-native';
import Button from 'react-native-button';

export default class EditComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            dataEdit: null
        }

    }

    show = (data) => {
        this.setState({
            visible: true,
            dataEdit: data
        });
    }

    close = () => {
        this.setState({
            visible: false
        });
    }

    render() {
        const { dataEdit } = this.state;
        return(
            <Modal
                animationType="fade"
                presentationStyle="overFullScreen"
                transparent={true}
                visible={this.state.visible}
                onRequestClose={this.close}
            >
                <View style={styles.container}>
                    <View style={styles.containerFormEdit}>
                        <View style={styles.header}>
                            <Text style={styles.text}>Edit Information</Text>
                        </View>
                        <TextInput 
                            style={styles.textInput}
                            placeholder={`Enter Your ${dataEdit}`}
                            autoCapitalize="none"
                            onChangeText={(text) => {}}
                        />
                        <TextInput 
                            style={styles.textInput}
                            placeholder={`Enter Your New ${dataEdit}`}
                            autoCapitalize="none"
                            onChangeText={(text) => {}}
                        />
                        <TextInput 
                            style={styles.textInput}
                            placeholder={`Re-enter Your New ${dataEdit}`}
                            autoCapitalize="none"
                            onChangeText={(text) => {}}
                        />
                        <View style={styles.containerButtons}>
                            <Button
                                containerStyle={styles.containerButton}
                                style={styles.button}
                                onPress={() => {}}
                            >Save</Button>
                            <Button
                                containerStyle={styles.containerButton}
                                style={styles.button}
                                onPress={() => {
                                    this.close();
                                }}
                            >Cancel</Button>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    containerFormEdit: {
        width: width,
        height: "50%",
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowRadius: 12,
        shadowOpacity: .6,
        shadowOffset: {
            width: 0,
            height: 5
        }
    },
    header: {
        height: 70,
        backgroundColor: '#6495ed',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        justifyContent: 'center'
    },
    text: {
        fontSize: 23,
        color: '#fff',
        marginLeft: 14,
        fontWeight: '600'
    },
    textInput: {
        marginTop: 20,
        paddingLeft: 10,
        borderWidth: 1,
        height: 50,
        marginHorizontal: 20,
        borderColor: 'gray',
        color: '#05375a',
        borderRadius: 12
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
    },
    containerButton: {
        width: 130,
        height: 50,
        backgroundColor: '#6495ed',
        borderRadius: 12,
        marginHorizontal: 15
    },
    button: {
        color: '#fff',
        padding: 12
    }
});