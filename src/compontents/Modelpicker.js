import React, { useRef, useEffect, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Text, View, Image, TextInput } from "react-native";
import styles from "../screens/Login/styles";
import { makeReq } from "../utils.js/makeReq";
import { GETCOUNTRYLISTING } from "../config/urls";

const Modelpicker = (props) => {
  const resetSelect = useRef();
  const options = {};
  // console.log("sent object>>>>>>>>>>>>>>.>>>>", options);

  const [allCountries, setAllCountries] = useState([]);

  const countriesWithFlags = [
    {
      title: "South Africa",
      image: require("../assets/Images/south-africa.png"),
    },
    { title: "Canada", image: require("../assets/Images/canada.png") },
    { title: "Australia", image: require("../assets/Images/australia.png") },
    { title: "Ireland", image: require("../assets/Images/ireland.png") },
  ];

  useEffect(() => {
    if (props.countryReset) {
      resetSelect.current.reset();
      props.updateReset(false);
    }
  }, [props.countryReset]);

  useEffect(() => {
    makeReq(GETCOUNTRYLISTING, options).then((res) => {
      setAllCountries(res.data);
    });
  }, []);

  return (
    <View>
      <SelectDropdown
        data={allCountries}
        // defaultValueByIndex={1}
        onSelect={(selectedItem, index) => {
          // console.log(selectedItem, index);
          props.getCountry(selectedItem);
        }}
        buttonStyle={styles.dropdown3BtnStyle}
        ref={resetSelect}
        renderCustomizedButtonChild={(selectedItem, index) => {
          return (
            <View style={styles.dropdown3BtnChildStyle}>
              <Text style={styles.dropdown3BtnTxt}>
                {selectedItem ? selectedItem.name : "Select country"}
              </Text>
              <Image
                source={require("../assets/Images/downarrow.png")}
                style={{
                  width: 20,
                  height: 20,
                  position: "absolute",
                  right: 15,
                }}
              />
            </View>
          );
        }}
        dropdownStyle={styles.dropdown3DropdownStyle}
        rowStyle={styles.dropdown3RowStyle}
        renderCustomizedRowChild={(item, index) => {
          return (
            <View style={styles.dropdown3RowChildStyle}>
              {/* <Image source={item.image} style={styles.dropdownRowImage} /> */}
              <Text style={styles.dropdown3RowTxt}>
                ({item.country_code}) {item.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Modelpicker;
