import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

var height = Dimensions.get('window').height;

const styles = StyleSheet.create({

  fullheight: {
    flex: 1,
  },
  maptop: {
      width: width,
      flexDirection:'row',
      flex: 1,
  },
  mapview: {
    width: width,
    flexDirection: 'row',
    flex: 1,
  },
  btutouch: {
    backgroundColor: '#0B97FB',
    paddingVertical: 20,
    alignItems: 'center',
  },
  btntext: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 18,
  },

});

export default styles;