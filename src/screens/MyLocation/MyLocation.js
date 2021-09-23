import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, TextInput, ImageBackground} from 'react-native';
import styles from './styles';

const topDrawerStyle = {
    position:'absolute',
    zIndex: 1,
    top: 10,
    left: 12,
}; 

const MyLocation = ({navigation}) => {
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
                <Text style={styles.areatext}>Search for Skillerz in your Area</Text>
            </View>

            <View style={styles.bodysection}>
            <Image source={require('../../assets/Images/mapone.jpg')} style={{width: '100%', height: 220,}}/>
                <View style={styles.middelsection}>
                    <View style={styles.btnrow}>
                        <View style={styles.locationbtn}>
                            <TouchableOpacity>
                                <Text style={styles.butntext}>My Location</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.locationbtn}>
                            <TouchableOpacity>
                                <Text style={styles.butntext}>Other Location</Text>
                            </TouchableOpacity>
                        </View>
                    </View>                        
                        <View style={styles.searchsection}>
                            <Image source={require('../../assets/Images/user.png')} style={styles.usericon}/>
                            <TextInput placeholder='I am looking for?' placeholderTextColor='#3673A6' style={styles.textinput} />
                        </View>
                </View>

            </View>           
            </ScrollView>
            
            <View style={styles.bottombtun}>
                <TouchableOpacity onPress={() => navigation.navigate ('Listview')}>
                    <Text style={styles.butntext}>Go</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default MyLocation;