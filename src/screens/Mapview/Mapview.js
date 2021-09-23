import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, TextInput,} from 'react-native';
import styles from './styles';

const topDrawerStyle = {
    position:'absolute',
    zIndex: 1,
    top: 10,
    left: 12,
}; 

const Mapview = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.topsction}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={topDrawerStyle}>
                    <Image source={require('../../assets/Images/drawerbar.png')}
                        style={{ height: 22, width: 22}} />
                </TouchableOpacity>
               <Image source={require('../../assets/Images/header.jpg')} style={styles.topimage}/>              
            </View>
            
            <View style={styles.areatextbg}>
                <Text style={styles.areatext}>Search for Skillerz in your Area</Text>
            </View>

            <View style={styles.bodysection}>
            <Image source={require('../../assets/Images/fullmap.jpg')} style={styles.mapview}/>
                
            </View>           
            </ScrollView>
            
            <View style={styles.bottombtun}>
                <TouchableOpacity onPress={() => navigation.navigate ('Listview')}>
                    <Text style={styles.butntext}>List View</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default Mapview;