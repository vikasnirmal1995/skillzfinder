import React, { useState } from "react";
import styles from "./styles";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Skillzerlist from "../../compontents/Skillzerlist";
import { useSelector } from "react-redux";

const topDrawerStyle = {
  position: "absolute",
  zIndex: 1,
  top: 10,
  left: 12,
};

const Listview = ({ navigation }) => {
  const getSkillersData = useSelector((state) => state.user.skillers);
  console.log("data from list page", getSkillersData);

  return (
    <View style={styles.container}>
      <View style={styles.topsction}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={topDrawerStyle}
        >
          <Image
            source={require("../../assets/Images/drawerbar.png")}
            style={{ height: 22, width: 22 }}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/Images/header.jpg")}
          style={styles.topimage}
        />
      </View>

      <View style={styles.areatextbg}>
        <Text style={styles.areatext}>Search for Skillerz in your Area</Text>
      </View>

      <View style={styles.bodysection}>
        <View style={styles.middelsection}>
          <Skillzerlist />
        </View>
      </View>

      <View style={styles.bottombtun}>
        <TouchableOpacity onPress={() => navigation.navigate("Mapview")}>
          <Text style={styles.butntext}>Map View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Listview;
