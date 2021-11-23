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
import { useNavigation } from "@react-navigation/core";
import { makeReq } from "../../utils.js/makeReq";
import { TraderRating } from "../../config/urls";
import { useSelector, useDispatch } from "react-redux";

const topDrawerStyle = {
  position: "absolute",
  zIndex: 1,
  top: 10,
  left: 12,
};

const RateSkillz = ({
  profileName,
  profileRating,
  profilePicture,
  SkillerData,
  skillerLiked,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const handleRating = () => {
    if (rating === 0) {
      alert("Please rate the skiller");
    } else {
      dispatch({ type: "PAGE_LOADER", payload: true });
      const options = {
        action: "add",
        ip_address: "172.16.17.260",
        profile_id: 118,
        rate: rating,
        finder_id: 28,
      };
      console.log("sent rating object>>>>>>>>>>>>>>.>>>>", options);

      makeReq(TraderRating, options).then((res) => {
        dispatch({ type: "PAGE_LOADER", payload: false });
        alert(res.message);
      });
    }
  };

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
          <Text style={styles.areatext}>Electrician in Garsfontein</Text>
        </View>

        <View style={styles.bodycontent}>
          <View style={styles.middltitle}>
            <Text style={styles.titletext}>Please rate my skillz!</Text>
          </View>
          <TouchableOpacity onPress={() => setRating(5)}>
            <View style={styles.middlescetion}>
              {rating >= 5 ? (
                <Image
                  source={require("../../assets/Images/starfill.png")}
                  style={styles.staricon}
                />
              ) : (
                <Image
                  source={require("../../assets/Images/starskiller.png")}
                  style={styles.staricon}
                />
              )}
              <Text style={styles.ratetext}>Uber Excellent</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setRating(4)}>
            <View style={styles.middlescetion}>
              {rating >= 4 ? (
                <Image
                  source={require("../../assets/Images/starfill.png")}
                  style={styles.staricon}
                />
              ) : (
                <Image
                  source={require("../../assets/Images/starskiller.png")}
                  style={styles.staricon}
                />
              )}
              <Text style={styles.ratetext}>Excellent</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(3)}>
            <View style={styles.middlescetion}>
              {rating >= 3 ? (
                <Image
                  source={require("../../assets/Images/starfill.png")}
                  style={styles.staricon}
                />
              ) : (
                <Image
                  source={require("../../assets/Images/starskiller.png")}
                  style={styles.staricon}
                />
              )}
              <Text style={styles.ratetext}>Good</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(2)}>
            <View style={styles.middlescetion}>
              {rating >= 2 ? (
                <Image
                  source={require("../../assets/Images/starfill.png")}
                  style={styles.staricon}
                />
              ) : (
                <Image
                  source={require("../../assets/Images/starskiller.png")}
                  style={styles.staricon}
                />
              )}
              <Text style={styles.ratetext}>Okay</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(1)}>
            <View style={styles.middlescetion}>
              {rating === 0 ? (
                <Image
                  source={require("../../assets/Images/starskiller.png")}
                  style={styles.staricon}
                />
              ) : (
                <Image
                  source={require("../../assets/Images/starfill.png")}
                  style={styles.staricon}
                />
              )}
              <Text style={styles.ratetext}>Bad</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.secondbutn}>
        <TouchableOpacity
          //onPress={() => navigation.navigate("MyLocation")}
          onPress={() => handleRating()}
        >
          <Text style={styles.butntext}>submit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottombutn}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Listview")}
          style={{ width: "50%", alignItems: "center" }}
        >
          <View>
            <Image
              source={require("../../assets/Images/back.png")}
              style={styles.backarrow}
            />
          </View>
        </TouchableOpacity>
        <View>
          <Image source={require("../../assets/Images/divder.jpg")} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyLocation")}
          style={{ width: "50%", alignItems: "center" }}
        >
          <Text style={styles.butntext}>New Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RateSkillz;
