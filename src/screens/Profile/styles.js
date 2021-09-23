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
  fillform: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  profileinfo: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 20,
  },

  usericon: {
    height: 30,
    width: 30,
    marginTop: 20,
    marginHorizontal: 8,
  },
  visibalpro: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  dfinename: {
    marginTop: 22,
    fontSize: 16,
    marginLeft: 12,
  },
  visitext: {
    textTransform: 'uppercase',
    fontSize: 16,
  },
  hidtext: {
    textTransform: 'uppercase',
    fontSize: 16,
  },
  switchbtn: {

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

  logtop: {
    width: width,
  },

  logtopimg: {
    width: '100%',
    height: 200,
  },

  draertop: {
    flexDirection: 'row',
    backgroundColor: '#BCE0FD',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  drwerbot: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  drawitem: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  itemico: {
    width: 30,
    height: 30,
  },

  avater: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },

  avainfo: {
    marginTop: 12,
    marginLeft: 12,
  },

  avatitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#38434C',
  },

  avacaption: {
    fontSize: 16,
    color: '#38434C',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  rateing: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 16,
  },
  startratd: {
    width: 30,
    height: 30,
    left: '20%',
  },
 
  otherlink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  linkicon: {
    width: 80,
    height: 81,
    marginHorizontal: 6,
  },
  bottombutn: {
    flexDirection: 'row',
    backgroundColor: '#0B97FB',
    justifyContent: 'space-between',
    paddingVertical: 20,
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

});

export default styles;