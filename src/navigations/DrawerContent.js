import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class DrawerContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            avatar: "https://i.pinimg.com/564x/8e/ee/0d/8eee0de2cdfd08bf19f5153ebd1f6953.jpg"
        }
    }

    _returnData = newAvatar => {
        this.setState({ avatar: newAvatar });
    }
    
    render() {
        const { avatar } = this.state;
        const { navigate} = this.props.navigation;

        return (
            <View style={{ flex: 1}}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image 
                                    source={{uri: avatar}}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>Jennie</Title>
                                    <Caption style={styles.caption}>@jennierubyjane</Caption>
                                </View>
                            </View>
                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={
                                    ({ color, size }) => <Icon name="home-outline" color={color} size={size}/>
                                }
                                label="Home"
                                onPress={() => {
                                    navigate('HomeDrawer');
                                }}
                            />
                            <DrawerItem
                                icon={
                                    ({ color, size }) => <Icon name="map-marker-outline" color={color} size={size}/>
                                }
                                label="Locations"
                                onPress={() => {
                                    navigate('LocationsDrawer');
                                }}
                            />
                            <DrawerItem
                                icon={
                                    ({ color, size }) => <Icon name="robot-vacuum" color={color} size={size}/>
                                }
                                label="Chatbot"
                                onPress={() => {
                                    navigate('ChatbotDrawer');
                                }}
                            />
                            <DrawerItem
                                icon={
                                    ({ color, size }) => <Icon name="star-outline" color={color} size={size}/>
                                }
                                label="Wish List"
                                onPress={() => {
                                    navigate('WishlistDrawer');
                                }}
                            />
                            <DrawerItem
                                icon={
                                    ({ color, size }) => <Icon name="account-circle-outline" color={color} size={size}/>
                                }
                                label="Profile"
                                onPress={() => {
                                    navigate('ProfileDrawer', {
                                        avatar: avatar,
                                        onReturnData: this._returnData.bind(this)
                                    });
                                }}
                            />
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => <Icon name="exit-to-app" color={color} size={size}/>}
                        label="Sign Out"
                        onPress={() => {
                            //logout
                        }}
                    />
                </Drawer.Section>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight : 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});