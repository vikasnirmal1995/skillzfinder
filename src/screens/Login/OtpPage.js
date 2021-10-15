import React, { useRef, useState } from "react";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { GETUSERDATA } from "../../config/urls";
import { makeReq } from "../../utils.js/makeReq";
import { userData } from "../../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";

const OtpPage = ({ route, navigation }) => {
  const { otp, phone, country_code } = route.params;
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [otp_state, setotp] = useState("");
  console.log("OtpPage", otp);
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("skilzUser", JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const handleOtp = () => {
    if (otp_state !== "") {
      if (parseInt(otp_state) === otp) {
        // const options = {
        //   phone: phone,
        //   country_code: country_code,
        // };
        // makeReq(GETUSERDATA, options).then((res) => {
        //   console.log(res);
        //   storeData(res.data);
        //   dispatch(userData(res.data));
        // });
        navigation.navigate("SignupasSkiller", {
          phone,
          country_code,
        });
      } else {
        alert("Wrong OTP");
      }
    } else {
      alert("Please insert OTP");
    }
  };

  // console.log("vikas>>", userState);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.topsction}>
          <Image
            source={require("../../assets/Images/mainheader.jpg")}
            style={styles.topimage}
          />
        </View>

        <View style={styles.bodysection}>
          <View style={styles.middelsection}>
            <Text>Enter OTP</Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <OTPInputView
                style={{ width: "80%", height: 200, color: "black" }}
                pinCount={6}
                // code={this.state.code}
                onCodeChanged={(code) => setotp(code)}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.touchbtnprim}
              // onPress={() => navigation.navigate("SignupasSkiller")}
              onPress={() => handleOtp()}
            >
              <Text style={styles.touchbtntext}>Validate OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OtpPage;
