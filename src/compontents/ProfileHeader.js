import React, { useEffect, useState } from "react";
import styles from "../screens/Profile/styles";
import { Text, View, Image, TouchableOpacity, Share } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";
import { makeReq } from "../utils.js/makeReq";
import { LIKESKILLER } from "../config/urls";
import { userLikedSkillers } from "../redux/actions/user";

const ProfileHeader = ({
  profileName,
  profileRating,
  profilePicture,
  SkillerData,
  skillerLiked,
  indx,
}) => {
  const navigation = useNavigation();
  const getMyProfile = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const userLike = () => {
    dispatch({ type: "PAGE_LOADER", payload: true });
    const options = {
      finder_id: getMyProfile.id,
      skiller_id: SkillerData.skiller_id,
      skiller_profile_id: SkillerData.profile_id,
    };

    makeReq(LIKESKILLER, options)
      .then((res) => {
        console.log("log options", res);
        if (res.status === 1) {
          dispatch(userLikedSkillers(res.data));
          dispatch({ type: "PAGE_LOADER", payload: false });
        } else {
          dispatch(userLikedSkillers([]));
          dispatch({ type: "PAGE_LOADER", payload: false });
        }
      })
      .catch((err) => {
        dispatch(userLikedSkillers([]));
        dispatch({ type: "PAGE_LOADER", payload: false });
      });
  };

  const share = async (value) => {
    try {
      const result = await Share.share({
        message: `React Native | ${value}`,
        // url: "d3d3Lmdvb2dsZS5jb20",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.profilheader}>
      <View style={styles.topbar}>
        <View style={styles.scrntitle}>
          <Text style={styles.scrntitltext}>Profile</Text>
        </View>
        <TouchableOpacity
          style={[styles.favico, { marginRight: 20 }]}
          onPress={() => userLike()}
        >
          {skillerLiked ? (
            <Image
              source={require("../assets/Images/fillfav.png")}
              style={styles.favico}
            />
          ) : (
            <Image
              source={require("../assets/Images/favrouit-bl.png")}
              style={styles.favico}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => share("Abhi Jhalani")}
          style={styles.sharico}
        >
          <Image
            source={require("../assets/Images/share.png")}
            style={styles.sharico}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.usrname}>
        <Text style={styles.nametext}>{profileName}</Text>
      </View>

      <View style={styles.profiletopsec}>
        <View style={styles.proviewbtn}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProfileDetail", { index: indx })
            }
          >
            <Text style={styles.viewtext}>View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.avter}>
          <Image source={{ uri: profilePicture }} style={styles.avaterimg} />
          <View style={styles.avateredit}>
            <Image
              source={require("../assets/Images/wrench.png")}
              style={styles.avatereditimg}
            />
          </View>
        </View>

        <View style={styles.ratedbtn}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RateSkillz", {
                profileName,
                profileRating,
                profilePicture,
                SkillerData,
                skillerLiked,
              })
            }
          >
            <Image
              source={require("../assets/Images/star.png")}
              style={styles.startratd}
            />
            <Text style={styles.rateing}>{profileRating} Rated</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
