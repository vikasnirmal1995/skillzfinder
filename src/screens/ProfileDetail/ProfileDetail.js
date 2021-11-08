import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
const { width, height } = Dimensions.get("window");
import Carousel from "react-native-snap-carousel";
import Svg from "react-native-svg";

const topDrawerStyle = {
  position: "absolute",
  zIndex: 1,
  top: 10,
  left: 12,
};

const ProfileDetail = ({ navigation, route }) => {
  // console.log("all routes", route);
  const { index } = route.params;
  const [currentIndex, setCurrentIndex] = useState(null);
  const allSkillers = useSelector((state) => state.user.skillers);
  const flatlistRef = useRef(null);

  console.log("all skillers from profile details", index);
  useEffect(() => {
    setCurrentIndex(index);
    flatlistRef.current.snapToItem(index, true);
  }, [index]);

  // renderitem
  const renderitem = ({ item }) => {
    if (currentIndex !== null)
      return (
        <View style={{ flex: 1, width }}>
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

              <View style={styles.topbar}>
                <View style={styles.scrntitle}>
                  <Text style={styles.scrntitltext}>Profile</Text>
                </View>
                <Image
                  source={require("../../assets/Images/favrouit.png")}
                  style={styles.favico}
                />
                <Image
                  source={require("../../assets/Images/share.png")}
                  style={styles.sharico}
                />
              </View>
            </View>
          </ImageBackground>

          <View style={{ flex: 1 }}>
            <ImageBackground
              source={require("../../assets/Images/header.jpg")}
              style={{ width: "100%", paddingBottom: 18 }}
            >
              <View style={styles.usrname}>
                <Text style={styles.nametext}>{item.skiller_name}</Text>
              </View>

              <View style={styles.profiletopsec}>
                <View style={styles.proviewbtn}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ProfileDetail")}
                  >
                    <Text style={styles.viewtext}>View</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.avter}>
                  <Image
                    source={{ uri: item.profile_image }}
                    style={styles.avaterimg}
                  />
                  <View style={styles.avateredit}>
                    <Image
                      source={require("../../assets/Images/wrench.png")}
                      style={styles.avatereditimg}
                    />
                  </View>
                </View>

                <View style={styles.ratedbtn}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("RateSkillz")}
                  >
                    <Image
                      source={require("../../assets/Images/star.png")}
                      style={styles.startratd}
                    />
                    <Text style={styles.rateing}>3.5 Rated</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>

            <View style={styles.areatextbg}>
              <Text style={styles.areatext}>Eletrician in Garsfontein</Text>
            </View>

            <View style={styles.swpipebg}>
              {currentIndex > 0 && (
                <TouchableOpacity
                  style={styles.leftArrow}
                  onPress={() => flatlistRef.current.snapToPrev(true)}
                >
                  <Image
                    source={require("../../assets/Images/icons/left.png")}
                    style={{ width: 24, height: 24 }}
                  />
                </TouchableOpacity>
              )}

              <Text style={styles.swiptext}>Swipe to see more skillers</Text>
              {allSkillers.length - 1 > currentIndex && (
                <TouchableOpacity
                  style={styles.rightArrow}
                  onPress={() => flatlistRef.current.snapToNext(true)}
                >
                  <Image
                    source={require("../../assets/Images/icons/right.png")}
                    style={{ width: 24, height: 24 }}
                  />
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.middlesection}>
              <View style={styles.detailtext}>
                <Text style={styles.text1}>{"Profile"}</Text>
              </View>

              <View style={styles.detailtext}>
                <Text style={styles.text2}>{item.skiller_name}</Text>
                <Text style={styles.text2}>{item.skiller_mobile}</Text>
                <Text style={styles.text2}>{item.skiller_email}</Text>
                <Text style={styles.text2}>{item.website}</Text>
              </View>

              <View style={styles.detailtext}>
                <Text style={styles.text1}>{item.skills}</Text>
              </View>

              <View style={styles.detailtext}>
                <Text style={styles.text2}>{item.Listskills}</Text>
              </View>
            </View>
          </View>
        </View>
      );
  };

  console.log("current index", currentIndex);

  return (
    <View style={styles.container}>
      <Carousel
        horizontal
        data={allSkillers}
        ref={flatlistRef}
        renderItem={(item) => renderitem(item)}
        keyExtractor={(item, index) => index}
        sliderWidth={width}
        itemWidth={width}
        currentIndex={currentIndex}
        currentScrollPosition={currentIndex}
        onSnapToItem={(index) => setCurrentIndex(index)}
      />

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
