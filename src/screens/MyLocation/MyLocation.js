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
import { SEARCHSKILLERS } from "../../config/urls";
import { makeReq } from "../../utils.js/makeReq";
// import BingMapsView from "react-native-bing-maps";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import { useSelector, useDispatch } from "react-redux";
import { userSearchedSkillers } from "../../redux/actions/user";
import Loader from "../../compontents/Loader";

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
  const searchInputRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);

  const locationUser = useSelector((state) => state.user);
  console.log("User data redux-->", locationUser.location);
  const dispatch = useDispatch();

  const getAllSkillers = () => {
    if (selected !== "") {
      const options = {
        skills: selected,
        latitude: locationUser.location.latitude,
        longitude: locationUser.location.longitude,
        distance: "300",
      };
      makeReq(SEARCHSKILLERS, options).then((res) => {
        console.log("searched skillers--", res);
        dispatch({ type: "PAGE_LOADER", payload: true });
        if (res.status === 1) {
          dispatch(userSearchedSkillers(res.data));
          navigation.navigate("Listview");
        } else {
          alert("No Skiller found in your area");
        }
        dispatch({ type: "PAGE_LOADER", payload: false });
      });
    } else {
      alert("Please select skill to search");
    }
  };

  const handleSearch = (value) => {
    dispatch({ type: "PAGE_LOADER", payload: true });
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
        dispatch({ type: "PAGE_LOADER", payload: false });
      });
    } else {
      setSearchData([]);
      dispatch({ type: "PAGE_LOADER", payload: false });
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
                ref={searchInputRef}
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

        {locationUser.location !== null && (
          <View style={styles.bodysection}>
            <View style={styles.mapWrapper}>
              <View style={styles.mapContainer}>
                <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={styles.map}
                  customMapStyle={[
                    {
                      featureType: "administrative",
                      elementType: "geometry",
                      stylers: [
                        {
                          visibility: "off",
                        },
                      ],
                    },
                    {
                      featureType: "poi",
                      stylers: [
                        {
                          visibility: "off",
                        },
                      ],
                    },
                    {
                      featureType: "road",
                      elementType: "labels.icon",
                      stylers: [
                        {
                          visibility: "off",
                        },
                      ],
                    },
                    {
                      featureType: "transit",
                      stylers: [
                        {
                          visibility: "off",
                        },
                      ],
                    },
                  ]}
                  region={{
                    latitude: locationUser.location.latitude,
                    longitude: locationUser.location.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: locationUser.location.latitude,
                      longitude: locationUser.location.longitude,
                    }}
                    // image={{ uri: "custom_pin" }}
                  />
                </MapView>
              </View>
            </View>

            <View style={[styles.middelsection]}>
              <View style={styles.btnrow}>
                <View style={styles.locationbtn}>
                  <TouchableOpacity>
                    <Text style={styles.butntext}>My Location</Text>
                  </TouchableOpacity>
                </View>
                {/* <View style={styles.locationbtn}>
                <TouchableOpacity>
                  <Text style={styles.butntext}>Other Location</Text>
                </TouchableOpacity>
              </View> */}
              </View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
                style={styles.searchsection}
              >
                <Image
                  source={require("../../assets/Images/user.png")}
                  style={styles.usericon}
                />
                <Text style={styles.textinput}>
                  {selected === "" ? "I'm looking for?" : selected}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      <View style={styles.bottombtun}>
        <TouchableOpacity onPress={() => getAllSkillers()}>
          <Text style={styles.butntext}>Go</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyLocation;
