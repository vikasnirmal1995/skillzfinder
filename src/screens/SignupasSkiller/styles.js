import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topsction: {
    backgroundColor: "blue",
    width: "100%",
    height: hp("27%"),
  },
  topimage: {
    width: "100%",
    height: "100%",
  },
  bodysection: {
    height: hp("73%"),
    alignItems: "center",
    paddingVertical: 22,
  },
  middelsection: {
    width: wp("90%"),
    alignItems: "center",
  },
  roundedbtn: {
    backgroundColor: "#0B97FB",
    display: "flex",
    borderRadius: 90,
    width: 180,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  gotext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 50,
    fontFamily: "Roboto-Bold",
  },
  roundedbtnInner: {
    borderColor: "#FFF",
    borderWidth: 2,
    borderRadius: 90,
    backgroundColor: "#0B97FB",
    minWidth: 165,
    height: 165,
    borderRadius: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Termstext: {
    color: "#4C4C4C",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 22,
    marginVertical: 40,
    fontFamily: "RobotoCondensed-Regular",
  },
  ortext: {
    color: "#0B97FB",
    textAlign: "center",
    fontSize: 40,
    fontFamily: "RobotoCondensed-Bold",
  },
  bottombtun: {
    backgroundColor: "#0B97FB",
    alignContent: "center",
    alignItems: "center",
  },
  butntext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    textTransform: "uppercase",
    paddingVertical: 20,
    fontFamily: "RobotoCondensed-Bold",
  },
});

export default styles;
