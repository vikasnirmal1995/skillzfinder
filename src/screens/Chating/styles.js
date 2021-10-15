import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topsction: {
        
        width: '100%',
        height: hp ('15%'),
    },
  middelsection: {
    width: wp('90%'),
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
  username: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  backarrow: {
    width: 25,
    height: 25,
  },

  goback: {
    flex: 0.6,
  },

  usernametext: {
    fontSize: 20,
    textTransform: 'uppercase',
    flex: 1,
  },

  chatsec: {
    flex: 1,
    width: width,
  },
  chatcard: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  chatimg: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
  chatabove: {
    backgroundColor: '#0B97FB',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
    marginLeft: 15,
  },
  chattext1: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 25,
  },
  chatbelow: {
    backgroundColor: '#E2EBF2',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    marginRight: 40,
  },
  chattext2: {
    fontSize: 16,
    color: '#6B757C',
    lineHeight: 25,
  },
  chatbox: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  chatfild: {
    flex: 1,
    paddingVertical: 25,
  },
  input: {
    borderWidth: 2,
    width: '95%',
    paddingVertical: 15,
    marginLeft: 18,
    borderColor: '#add7f7',
    fontSize: 18,
    color: '#222',
    paddingLeft: 20,
  },
  camicon: {
    width: 30,
    height: 30,
    marginTop: 36,
  },
  chattime: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  chattimetext: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default styles;