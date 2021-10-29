import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import ProfileHeader from "../../compontents/ProfileHeader";
import SkillerSlider from "../../compontents/SkillerSlider";

const topDrawerStyle = {
  position: "absolute",
  zIndex: 1,
  top: 10,
  left: 12,
};

const ProfileDetail = ({ navigation, route }) => {
  const { skillerdata } = route.params;

  console.log("Detail page data:", skillerdata);
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require("../../assets/Images/header.jpg")}
          style={{ width: "100%" }}
        >
          <View style={styles.profilheader}>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={topDrawerStyle}
            >
              <Image
                source={require("../../assets/Images/drawerbar.png")}
                style={{ height: 22, width: 22 }}
              />
            </TouchableOpacity>

            <ProfileHeader />
          </View>
        </ImageBackground>

        <View style={styles.areatextbg}>
          <Text style={styles.areatext}>Eletrician in Garsfontein</Text>
        </View>

        <View style={styles.swpipebg}>
          <Text style={styles.swiptext}>Swipe to see more skillers</Text>
        </View>

        <SkillerSlider />
      </ScrollView>

      <View style={styles.bottombutn}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View>
            <Image
              source={require("../../assets/Images/back.png")}
              style={styles.backarrow}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileDetail;
