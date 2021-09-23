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
    contactsec: {
        flex: 1,
        paddingVertical: 30,
      },
      
      chatcontact: {
        flexDirection: 'row',
        backgroundColor: '#DEE8EF',
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 12,
      },
    
      usericon: {
        height: 50,
        width: 50,
      },
    
      username: {
        fontSize: 18,
        lineHeight: 50,
        paddingHorizontal: 20,
      },
    
      charhour: {
        fontSize: 16,
        lineHeight: 50,
        fontStyle: 'italic',
        color: '#A0ACB5',
      },
    
});    


export default styles;