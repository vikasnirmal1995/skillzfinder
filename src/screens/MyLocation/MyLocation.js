import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  Modal,
  FlatList,
} from "react-native";
import styles from "./styles";
import CloseIcon from "../../assets/Images/icons/cancel.png";
import { GETSKILLERDATA } from "../../config/urls";
import { makeReq } from "../../utils.js/makeReq";
import BingMapsView from "react-native-bing-maps";

import MapMarker from "../../assets/Images/icons/marker.svg";

const topDrawerStyle = {
  position: "absolute",
  zIndex: 1,
  top: 10,
  left: 12,
};

const MyLocation = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selected, setSelected] = useState("");
  const mapRef = useRef();

  console.log("mapRef>>>>>>>", mapRef.current);

  const handleSearch = (value) => {
    setSearch(value);

    if (value !== "") {
      const options = {
        search: search,
      };
      makeReq(GETSKILLERDATA, options).then((res) => {
        console.log(res);
        if (res.status === 1) {
          setSearchData(res.data);
        }
      });
    } else {
      setSearchData([]);
    }
  };

  // renderItem
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.searchItem}
        onPress={() => handleSelect(item)}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  // handleSelect
  const handleSelect = (data) => {
    setSelected(data);
    setModalVisible(false);
    setSearch(data);
    setSearchData([]);
  };

  // handleclose
  const handleClose = () => {
    setModalVisible(false);
    setSearchData([]);
  };
  console.log("searchData", searchData);

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalInner}>
            <TouchableOpacity
              style={styles.modalCloseIcon}
              onPress={() => handleClose()}
            >
              <Image source={CloseIcon} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Search skiller</Text>
            </View>
            <View style={{ marginTop: 15, marginBottom: 15 }}>
              <TextInput
                placeholder="I am looking for..."
                placeholderTextColor="#555555"
                style={styles.searchInput}
                value={search}
                onChangeText={(value) => handleSearch(value)}
              />
            </View>
            {searchData.length > 0 && (
              <View style={styles.faltlist}>
                <FlatList
                  data={searchData}
                  renderItem={(item) => renderItem(item)}
                  keyExtractor={(item, index) => index}
                />
              </View>
            )}
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/Images/header.jpg")}
          style={{ width: "100%" }}
        >
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
          </View>
        </ImageBackground>

        <View style={styles.areatextbg}>
          <Text style={styles.areatext}>Search for Skillerz in your Area</Text>
        </View>

        <View style={styles.bodysection}>
          <View style={styles.mapWrapper}>
            <View style={styles.mapContainer}>
              <BingMapsView
                credentialsKey="AttU8jIa7QFCfA5S70Nj5iFTPR1eklgdDl8lnG07gxWjpgxSrZrmxrulETbVWWdE"
                mapLocation={{
                  lat: 26.8505,
                  long: 75.7628,
                  zoom: 15,
                }}
                style={styles.mapbox}
                buildingsVisible={true}
                businessLandmarksVisible={true}
                compassButtonVisible={true}
                transitFeaturesVisible={true}
                tiltButtonVisible={true}
                zoomButtonsVisible={true}
                copyrightDisplay="allowHiding"
                pins={[
                  {
                    lat: 26.8505,
                    long: 75.7628,
                    icon: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.47 78.64"><title>marker</title><image width="68" height="100" transform="scale(0.79)" xlink:href="data:image/png;base64,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"/></svg>`,
                  },
                ]}
                ref={mapRef}
              />
            </View>
          </View>
          <View style={styles.middelsection}>
            <View style={styles.btnrow}>
              <View style={styles.locationbtn}>
                <TouchableOpacity>
                  <Text style={styles.butntext}>My Location</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.locationbtn}>
                <TouchableOpacity>
                  <Text style={styles.butntext}>Other Location</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.searchsection}
            >
              <Image
                source={require("../../assets/Images/user.png")}
                style={styles.usericon}
              />
              <Text style={styles.textinput}>
                {selected === "" ? "I am looking for?" : selected}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottombtun}>
        <TouchableOpacity onPress={() => navigation.navigate("Listview")}>
          <Text style={styles.butntext}>Go</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyLocation;
