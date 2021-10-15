import React, { useState } from "react";
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
      <ScrollView>
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
          <Image
            source={require("../../assets/Images/mapone.jpg")}
            style={{ width: "100%", height: 220 }}
          />
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
      </ScrollView>

      <View style={styles.bottombtun}>
        <TouchableOpacity onPress={() => navigation.navigate("Listview")}>
          <Text style={styles.butntext}>Go</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyLocation;
