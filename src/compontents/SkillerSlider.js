import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "../screens/ProfileDetail/styles";

const slides = [
  {
    key: 1,
    Title: "Profile",
    Name: "John Smith",
    Phone: "+27 76 341 8470",
    Mail: "Q@mybrandadvertising.com",
    Web: "mybrandadvertising.com",
    Skills: "Skillz",
    Listskills:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
  },

  {
    key: 2,
    Title: "Profile",
    Name: "John Smith",
    Phone: "+27 76 341 8470",
    Mail: "Q@mybrandadvertising.com",
    Web: "mybrandadvertising.com",
    Skills: "Skillz",
    Listskills:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
  },

  {
    key: 3,
    Title: "Profile",
    Name: "John Smith",
    Phone: "+27 76 341 8470",
    Mail: "Q@mybrandadvertising.com",
    Web: "mybrandadvertising.com",
    Skills: "Skillz",
    Listskills:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
  },
];

export default class SkillerSlider extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/Images/header.jpg")}
          style={{ width: "100%", paddingBottom: 18 }}
        >
          <View style={styles.usrname}>
            <Text style={styles.nametext}>John Smith</Text>
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
                source={require("../assets/Images/Jhonsmith.jpg")}
                style={styles.avaterimg}
              />
              <View style={styles.avateredit}>
                <Image
                  source={require("../assets/Images/wrench.png")}
                  style={styles.avatereditimg}
                />
              </View>
            </View>

            <View style={styles.ratedbtn}>
              <TouchableOpacity
                onPress={() => navigation.navigate("RateSkillz")}
              >
                <Image
                  source={require("../assets/Images/star.png")}
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
            <Text style={styles.text1}>{item.Title}</Text>
          </View>

          <View style={styles.detailtext}>
            <Text style={styles.text2}>{item.Name}</Text>
            <Text style={styles.text2}>{item.Phone}</Text>
            <Text style={styles.text2}>{item.Mail}</Text>
            <Text style={styles.text2}>{item.Web}</Text>
          </View>

          <View style={styles.detailtext}>
            <Text style={styles.text1}>{item.Skills}</Text>
          </View>

          <View style={styles.detailtext}>
            <Text style={styles.text2}>{item.Listskills}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    if (this.state.showHomePage) {
      return <App />;
    } else
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          activeDotStyle={{
            backgroundColor: "#A5BCD0",
            position: "relative",
            bottom: "92%",
          }}
          dotStyle={{
            backgroundColor: "#E4EAEE",
            position: "relative",
            bottom: "92%",
          }}
        />
      );
  }
}
