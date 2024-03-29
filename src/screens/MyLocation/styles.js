import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
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
    width: "100%",
    height: hp("15%"),
  },
  topimage: {
    width: "100%",
    height: "100%",
  },
  bodysection: {
    // height: hp("73%"),
    // alignItems: "center",
  },
  middelsection: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
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
  searchsection: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#BCE0FD",
  },
  usericon: {
    height: 28,
    width: 28,
    marginTop: 8,
  },
  textinput: {
    fontSize: 18,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontFamily: "Roboto-Medium",
    color: "#10436E",
  },
  btnrow: {
    flexDirection: "row",
    marginVertical: 20,
  },
  locationbtn: {
    backgroundColor: "#0B97FB",
    marginHorizontal: 5,
    paddingHorizontal: 30,
    borderRadius: 4,
    width: "100%",
  },
  bottombtun: {
    backgroundColor: "#0B97FB",
    alignContent: "center",
    alignItems: "center",
  },
  butntext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "Roboto-Bold",
    paddingVertical: 20,
  },
  modalInner: {
    width: width - 30,
    minHeight: height - 200,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: "relative",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    zIndex: 99,
    position: "absolute",
    top: 60,
    left: 15,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  modalCloseIcon: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 999,
  },
  modalHeader: {
    marginTop: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "#dddddd",
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  searchInput: {
    borderRadius: 5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
    height: 45,
    padding: 10,
    color: "#4C4C4C",
  },
  searchItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  faltlist: {
    maxHeight: height - 320,
  },
  // mapContainer: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  mapbox: {
    height: height * 0.4,
    width: width,
  },
  mapWrapper: {
    height: height * 0.4,
  },

  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: height * 0.4,
    width: width,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
