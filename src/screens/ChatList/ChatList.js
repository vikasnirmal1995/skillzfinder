import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import styles from './styles';
import ChatContactFlatlist from '../../compontents/ChatContactFlatlist';

const topDrawerStyle = {
    position:'absolute',
    zIndex: 1,
    top: 10,
    left: 12,
}; 

const ChatList = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
          <ImageBackground source={require('../../assets/Images/header.jpg')} style={{width: '100%'}}>
            <View style={styles.topsction}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={topDrawerStyle}>
                    <Image source={require('../../assets/Images/drawerbar.png')}
                        style={{ height: 22, width: 22}} />
                </TouchableOpacity>
            </View>
            </ImageBackground>
            
            <View style={styles.areatextbg}>
                <Text style={styles.areatext}>Chat</Text>
            </View>

            <View style={styles.contactsec}>
                <ChatContactFlatlist/>
            </View>         

            </ScrollView>
            
           
        </View>
    );
};


export default ChatList;