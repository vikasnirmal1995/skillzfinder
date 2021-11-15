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
    height: hp("15%"),
  },
  topimage: {
    width: "100%",
    height: "100%",
  },
  bodysection: {
    height: hp("73%"),
    alignItems: "center",
  },
  areatextbg: {
    backgroundColor: "#000",
    alignItems: "center",
    paddingVertical: 10,
  },
  areatext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto-Regular",
  },
  mapview: {
    width: wp("100%"),
    height: hp("100%"),
  },
  bottombtun: {
    backgroundColor: "#0B97FB",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  butntext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
    paddingVertical: 20,
    fontFamily: "Roboto-Bold",
  },

  mapbox: {
    height: height * 0.8,
    width: width,
  },
  mapWrapper: {
    height: height * 0.8,
  },

  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: height * 0.8,
    width: width,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  myPointer: {
    backgroundColor: "rgba(0, 153, 255, 1)",
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;
