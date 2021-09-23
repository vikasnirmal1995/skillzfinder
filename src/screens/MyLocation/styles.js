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
        width: '100%',
        height: hp ('15%'),
    },
    topimage: {
        width: '100%',
        height: '100%',
    },
    bodysection: {
        height: hp ('73%'),
        alignItems: 'center',
    },
    middelsection: {
        width: wp ('90%'),
        alignItems: 'center',
    },
    areatextbg: {
        backgroundColor: '#000',
        alignItems: 'center',
        paddingVertical: 10,
    },
    areatext: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    searchsection: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#BCE0FD',
    },
    usericon: {
        height: 28,
        width: 28,
        marginTop: 8,
    },
    textinput: {
        fontSize: 18,
        paddingHorizontal: 18,
    },
    btnrow: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    locationbtn: {
        backgroundColor: '#0B97FB',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        paddingHorizontal: 30,
        borderRadius: 4,
    },
    bottombtun: {
        backgroundColor: '#0B97FB',
        alignContent: 'center',
        alignItems: 'center',
    },
    butntext: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        textTransform: 'uppercase',
        paddingVertical: 20,
    },
});    


export default styles;