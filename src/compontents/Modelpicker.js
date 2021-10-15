import React, { useRef, useEffect } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Text, View, Image, TextInput } from "react-native";
import styles from "../screens/Login/styles";

const Modelpicker = (props) => {
  const resetSelect = useRef();
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

  return (
    <View>
      <SelectDropdown
        data={countriesWithFlags}
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
              {selectedItem ? (
                <Image
                  source={selectedItem.image}
                  style={styles.dropdown3BtnImage}
                />
              ) : (
                <></>
              )}
              <Text style={styles.dropdown3BtnTxt}>
                {selectedItem ? selectedItem.title : "Select country"}
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
              <Image source={item.image} style={styles.dropdownRowImage} />
              <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Modelpicker;
