import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Linking,
} from "react-native";
import styles from "../SignupasSkiller/styles";
import { GETUSERDATA } from "../../config/urls";
import { makeReq } from "../../utils.js/makeReq";
import { userData } from "../../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupasSkiller = ({ navigation, route }) => {
  const { phone, country_code } = route.params;
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("skilzUser", JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const checkData = () => {
    const options = {
      phone: phone,
      country_code: country_code,
    };
    makeReq(GETUSERDATA, options).then((res) => {
      console.log(res);
      storeData(res.data);
      dispatch(userData(res.data));
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topsction}>
          <Image
            source={require("../../assets/Images/mainheader.jpg")}
            style={styles.topimage}
          />
        </View>

        <View style={styles.bodysection}>
          <View style={styles.middelsection}>
            <View style={styles.roundedbtn}>
              <TouchableOpacity
                // onPress={() => navigation.navigate("MyLocation")}
                onPress={checkData}
                style={styles.roundedbtnInner}
              >
                <Text style={styles.gotext}>GO</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.Termstext}>
              By creating an account you agree to our {"\n"}
              Terms of Service and Privacy Policy
            </Text>

            <Text style={styles.ortext}>OR</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottombtun}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.google.com")}
        >
          <Text style={styles.butntext}>sign up as skiller</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupasSkiller;
