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
  },
  middlesection: {
    width: wp ('100%'),
    paddingBottom: 40,
    paddingHorizontal: 30,
    paddingTop: 22,
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

  swpipebg: {
    backgroundColor: '#0B97FB',
    alignItems: 'center',
    paddingVertical: 10,
  },
  swiptext: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },

 
  profiletopsec: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  scrntitle: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 60,
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
  avateredit: {
    width: 30,
    height: 30,
    backgroundColor: '#0B97FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    right: 0,
  },
  avatereditimg: {
    width: 20,
    height: 20,
  },
  usrname: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  nametext: {
    fontSize: 24,
    color: '#fff',
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
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
  
  backarrow: {
    width: 28,
    height: 28,
  },

  
  detailtext: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    paddingVertical: 13,
  },
  text1: {
    fontSize: 20,
  },
  text2: {
    fontSize: 16,
    lineHeight: 22,
    marginLeft: 50,
  },
});

export default styles;