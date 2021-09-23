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
    chatcontact: {
      flexDirection: 'row',
      backgroundColor: '#DEE8EF',
      paddingHorizontal: 30,
      paddingVertical: 20,
      marginVertical: 10,
      borderRadius: 12,
    },
    rightview: {
      flexDirection: 'column',
    },
    usericon: {
      height: 50,
      width: 50,
    },
    favicon: {
      height: 25,
      width: 25,
    },
    username: {
      fontSize: 18,
      lineHeight: 30,
      paddingHorizontal: 20,
      fontWeight: 'bold',
      color: '#2699FB',
    },
    review: {
      width: 140,
      height: 25,
    },
    discriptiontext: {
      fontSize: 16,
      lineHeight: 20,
      paddingHorizontal: 20,
    },
  
    charhour: {
      fontSize: 16,
      fontStyle: 'italic',
      color: '#A0ACB5',
      marginLeft: 12,
      marginTop: 4,
    },
    areatextbg: {
      backgroundColor: '#000',
      alignItems: 'center',
      paddingVertical: 10,
      marginBottom: 10,
  },
      areatext: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
  },
  bottombtun: {
    backgroundColor: '#0B97FB',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
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