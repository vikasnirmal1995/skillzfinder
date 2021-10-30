import React, { useState, useRef } from "react";
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

const topDrawerStyle = {
  position: "absolute",
  zIndex: 1,
  top: 10,
  left: 12,
};

const ProfileDetail = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const allSkillers = useSelector((state) => state.user.skillers);
  const flatlistRef = useRef(null);

  console.log("flatlistRef", flatlistRef.current);

  const scrollChange = () => {
    console.log("scrolled");
    setTimeout(() => flatlistRef.current.scrollToIndex(2), 500);
  };

  // renderitem
  const renderitem = ({ item }) => {
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
            <Text style={styles.swiptext}>Swipe to see more skillers</Text>
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

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={allSkillers}
        ref={flatlistRef}
        renderItem={(item) => renderitem(item)}
        keyExtractor={(item, index) => index}
        style={{ width: width, height: "100%" }}
        // onScroll={scrollChange}
        initialScrollIndex={6}
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
