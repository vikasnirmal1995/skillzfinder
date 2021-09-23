import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topimage: {
    width: '100%',
    height: '100%',
  },
  profilheader: {
    height: hp ('32%'),
    paddingBottom: 40,
  },
  profilfild: {
    flex: 2,
    backgroundColor: '#fff',
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

  
  scrntitltext: {
    fontSize: 18,
    color: '#fff',
  },
  favico: {
    height: 25,
    width: 25,
    marginHorizontal: 7,
  },
  sharico: {
    height: 25,
    width: 25,
  },

  proviewbtn: {
    width: 100,
    height: 100,
    backgroundColor: '#0B97FB',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewtext: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 16,
  },
  avter: {
    marginHorizontal: 15,
    width: 100,
    height: 100,
  },
  avaterimg: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#0B97FB',
    borderRadius: 100,
  },
  
  ratedbtn: {
    width: 100,
    height: 100,
    backgroundColor: '#0B97FB',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateing: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 16,
  },
  startratd: {
    width: 20,
    height: 20,
  },

  bottombutn: {
    flexDirection: 'row',
    backgroundColor: '#0B97FB',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
  
  backarrow: {
    width: 28,
    height: 28,
  },

  butntext: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
  },

  secondbutn: {
    flexDirection: 'row',
    backgroundColor: '#3BE7E3',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
  

  bodycontent: {
    height: hp ('68%'),
    },

  middlescetion:{
    flexDirection: 'row',
    marginLeft: '25%',
  },  

  staricon: {
    width: 37,
    height: 37,
  },
  middltitle: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  titletext: {
    fontSize: 22,
  },
  ratetext: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
   },

});

export default styles;