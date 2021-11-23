import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../screens/ListView/styles";
import { useSelector, useDispatch } from "react-redux";
import { makeReq } from "../utils.js/makeReq";
import { LIKESKILLER } from "../config/urls";
import { userLikedSkillers } from "../redux/actions/user";
import Loader from "../compontents/Loader";

function ItemLikedCard({ item, navigation }) {
  const getLikedSkillersData = useSelector((state) => state.user.likedSkillers);
  const getMyProfile = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const isLiked = getLikedSkillersData.some(
    (data) => data.skiller_id == item.skiller_id
  );

  const handleFollow = (value_skiller, value_profile_id) => {
    dispatch({ type: "PAGE_LOADER", payload: true });
    const options = {
      finder_id: getMyProfile.id,
      skiller_id: value_skiller,
      skiller_profile_id: value_profile_id,
    };
    // console.log("sent liked object>>>>>>>>>>>>>>.>>>>", options);

    makeReq(LIKESKILLER, options).then((res) => {
      if (res.status === 1) {
        if (res.is_liked === 1) {
          dispatch(userLikedSkillers(res.data));
        } else {
          dispatch(userLikedSkillers(res.data));
        }
      } else {
        dispatch(userLikedSkillers([]));
      }
      dispatch({ type: "PAGE_LOADER", payload: false });
    });
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Profile", {
            skillerData: item,
          })
        }
        style={styles.chatcontact}
      >
        <View>
          <Image source={{ uri: item.profile_image }} style={styles.review} />
        </View>
        <View style={styles.rightview}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.username}>{item.skiller_name}</Text>
            <TouchableOpacity
              style={styles.favionFix}
              onPress={() => handleFollow(item.skiller_id, item.profile_id)}
            >
              {isLiked ? (
                <Image
                  source={require("../assets/Images/fillfav.png")}
                  style={styles.favicon}
                />
              ) : (
                <Image
                  source={require("../assets/Images/favrouit-bl.png")}
                  style={styles.favicon}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.captionWrapper}>
            <Text style={styles.discriptiontext}>{item.description}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 7, marginLeft: 12 }}>
            <View>{item.Review}</View>
            <Text style={styles.charhour}>{item.rating}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ItemLikedCard;
