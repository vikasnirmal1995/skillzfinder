import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topsction: {
        backgroundColor: "blue",
        width: '100%',
        height: hp ('27%'),
    },
    topimage: {
        width: '100%',
        height: '100%',
    },
    bodysection: {
        height: hp ('73%'),
        alignItems: 'center',
        paddingVertical: 22,
    },
    middelsection: {
        width: wp ('90%'),
        alignItems: 'center',
    },
    roundedbtn: {
        backgroundColor: '#0B97FB',
        lineHeight: 180,
        borderRadius: 500,
        width: 180,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    gotext: {
        backgroundColor: '#0B97FB',
        color: '#fff',
        textAlign: 'center',
        fontSize: 50,
        lineHeight: 170,
        borderRadius: 500,
        width: 170,
        height: 170,
        borderWidth: 2,
        borderColor: '#FFF',
    },
    Termstext: {
        color: '#4C4C4C',
        textAlign: 'center',
        fontSize: 15,
        lineHeight: 22,
        marginVertical: 24,
    },
    ortext: {
        color: '#0B97FB',
        textAlign: 'center',
        fontSize: 40,
    },
    bottombtun: {
        backgroundColor: '#0B97FB',
        alignContent: 'center',
        alignItems: 'center',
    },
    butntext: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
        textTransform: 'uppercase',
        paddingVertical: 20,
    },
});    


export default styles;