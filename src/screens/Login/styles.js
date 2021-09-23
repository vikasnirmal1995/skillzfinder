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
    },
    touchbtnprim: {
        backgroundColor: '#0B97FB',
        alignItems: 'center',
        color: '#fff',
        borderRadius: 7,
        paddingVertical: 18,
        marginVertical: 12,
    },
    touchbtnsecon: {
        backgroundColor: '#3BE7E3',
        alignItems: 'center',
        color: '#fff',
        borderRadius: 7,
        paddingVertical: 18,
    },
    touchbtntext: {
        textTransform: 'uppercase',
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold',
    },
    textbox: {
        borderWidth: 1.3,
        borderColor: '#717475',
        borderRadius: 7,
        paddingVertical: 14,
        paddingHorizontal: 22,
        fontSize: 17,
    },
    inputlabel: {
        fontSize:  18,
        marginVertical: 10,
        color: '#717475',
    },

    itemflg: {
        width: 60,
        height: 40,
    },
    
    picker: {
        borderWidth: 1.3,
        borderColor: '#717475',
        borderRadius: 7,
    },


   dropdown3BtnStyle: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
    borderWidth: 1.3,
    borderRadius: 7,
    borderColor: "#717475",
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: { width: 50, height: 30, },
  dropdown3BtnTxt: {
    color: '#717475',
    textAlign: "center",
    fontSize: 17,
    marginHorizontal: 12,
  },
  
  dropdown3RowStyle: {
    borderBottomColor: "#e1e4e6",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 50, height: 30, },
  dropdown3RowTxt: {
    color: '#717475',
    textAlign: "center",
    fontSize: 17,
    marginHorizontal: 12,
  },


});    


export default styles;