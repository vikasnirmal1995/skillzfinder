import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, TextInput,} from 'react-native';
import styles from '../SignupasSkiller/styles';

const SignupasSkiller = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.topsction}>
                <Image source={require('../../assets/Images/mainheader.jpg')}
                    style={styles.topimage}
                />
            </View>

            <View style={styles.bodysection}>
                <View style={styles.middelsection}>
                    
                    <View style={styles.roundedbtn}>
                    <TouchableOpacity onPress={() => navigation.navigate ('MyLocation')}>
                        <Text style={styles.gotext}>GO</Text>
                    </TouchableOpacity>
                    </View>
                        <Text style={styles.Termstext}>By creating an account you agree to our {"\n"}
                        Terms of Service and Privacy Policy</Text>
                    
                    <Text style={styles.ortext}>OR</Text>     
                </View>
            </View>
            </ScrollView>
            <View style={styles.bottombtun}>
                <TouchableOpacity onPress={() => navigation.navigate ('MyLocation')}>
                    <Text style={styles.butntext}>sign up as skiller</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default SignupasSkiller;