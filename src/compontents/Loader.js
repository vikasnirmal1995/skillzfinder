import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Dimensions,
  Text,
} from "react-native";
const { width, height } = Dimensions.get("window");

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <ActivityIndicator size={40} color="#ffffff" />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.7)",
    width,
    height,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 999999,
    elevation: 999,
  },
  inner: {
    width: width - 40,
    height: 200,
    backgroundColor: "transparent",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    color: "#ffffff",
  },
});

export default Loader;
