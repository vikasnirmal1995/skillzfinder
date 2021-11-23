import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Linking,
} from "react-native";
import styles from "./styles";
import ProfileHeader from "../../compontents/ProfileHeader";
import { useSelector } from "react-redux";

const topDrawerStyle = {
  position: "absolute",
  zIndex: 1,
  top: 10,
  left: 12,
};

const Profile = ({ navigation, route }) => {
  const { skillerData } = route.params;
  const allSkillers = useSelector((state) => state.user.skillers);
  const [index, setIndex] = useState(0);
  const getLikedSkillersData = useSelector((state) => state.user.likedSkillers);
  const isLiked = getLikedSkillersData.some(
    (data) => data.profile_id == skillerData.profile_id
  );

  useEffect(() => {
    const currentIndex = allSkillers.findIndex(
      (item) => item.skiller_id === skillerData.skiller_id
    );
    setIndex(currentIndex);
    // console.log("id mil gayi bhao>>", currentIndex);
  }, [skillerData.skiller_id]);
  console.log("skillerData", skillerData);
  return (
    <SafeAreaView style={styles.container}>
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
            <ProfileHeader
              profilePicture={skillerData.profile_image}
              profileRating={skillerData.rating}
              profileName={skillerData.skiller_name}
              SkillerData={skillerData}
              skillerLiked={isLiked}
              indx={index}
            />
          </View>
        </ImageBackground>

        <View style={styles.areatextbg}>
          <Text style={styles.areatext}>
            {skillerData.skills} in Garsfontein
          </Text>
        </View>

        <View style={styles.profilfild}>
          <View style={styles.fillform}>
            <View style={styles.profileinfo}>
              <Image
                source={require("../../assets/Images/avatarline.png")}
                style={styles.usericon}
              />
              <View>
                <Text style={styles.dfinename}>{skillerData.skiller_name}</Text>
              </View>
            </View>

            <View style={styles.profileinfo}>
              <Image
                source={require("../../assets/Images/magnifying.png")}
                style={styles.usericon}
              />
              <View>
                <Text style={styles.dfinename}>{skillerData.skills}</Text>
              </View>
            </View>

            <View style={styles.profileinfo}>
              <Image
                source={require("../../assets/Images/expchart.png")}
                style={styles.usericon}
              />
              <View>
                <Text style={styles.dfinename}>{skillerData.description}.</Text>
              </View>
            </View>
          </View>

          <View style={styles.otherlink}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`tel:${skillerData.skiller_mobile}`)
              }
            >
              <Image
                source={require("../../assets/Images/call.jpg")}
                style={styles.linkicon}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require("../../assets/Images/profilechat.jpg")}
                style={styles.linkicon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onpress={() => {
                Linking.openURL(`mailto:${skillerData.skiller_email}`);
              }}
            >
              <Image
                source={require("../../assets/Images/mail.jpg")}
                style={styles.linkicon}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require("../../assets/Images/like.jpg")}
                style={styles.linkicon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

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
    </SafeAreaView>
  );
};

export default Profile;
