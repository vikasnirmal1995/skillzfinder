import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
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
    paddingVertical: 40,
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

  itemico : {
    width: 30,
    height: 30,
  },
  
  avater: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  
  avainfo: {
    marginTop: 7,
    marginLeft:12,
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
});

export default styles;