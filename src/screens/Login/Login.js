import React, { useRef, useState } from "react";
import styles from "./styles";

import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Modelpicker from "../../compontents/Modelpicker";
import ConfirmGoogleCaptcha from "react-native-google-recaptcha-v2";
import { useSelector } from "react-redux";
import { makeReq } from "../../utils.js/makeReq";
import { SEND_OTP } from "../../config/urls";

const siteKey = "6LdRM6McAAAAADNCHhLkhRSkIrfpLmvVxO05UMT-";
const baseUrl = "https://skillztrader.com";

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [countryReset, setCountryReset] = useState(false);
  const captchaForm = useRef(null);
  const captchaFormNew = useRef(null);

  const userState = useSelector((state) => state.user);
  // console.log("abhi", userState);
  const onMessage = (event) => {
    if (event && event.nativeEvent.data) {
      if (["cancel", "error", "expired"].includes(event.nativeEvent.data)) {
        captchaForm.current.hide();
        return;
      } else {
        console.log("Verified code from Google", event.nativeEvent.data);
        setTimeout(() => {
          captchaForm.current.hide();
          // do what ever you want here
          const options = {
            phone: phone,
            country_code: country,
          };
          console.log("sent object>>>>>>>>>>>>>>.>>>>", options);

          makeReq(SEND_OTP, options).then((res) => {
            if (res.status === 1) {
              alert(res.otp);
              navigation.navigate("OtpPage", {
                otp: res.otp,
                phone: options.phone,
                country_code: options.country_code,
              });
            }
          });
        }, 1500);
      }
    }
  };

  // handleLogin
  const handleLogin = () => {
    if (phone === "") {
      alert("Please enter mobile no.");
    } else if (country === "") {
      alert("Choose Country");
    } else {
      captchaForm.current.show();
    }
  };

  const resetFunction = () => {
    setPhone("");
    setCountry("");
    setCountryReset(true);
  };

  // getCountry
  const getCountry = (data) => {
    setCountry(data.title);
    // console.log("get country data", data);
  };

  // updateReset
  const updateReset = (value) => {
    setCountryReset(value);
  };

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
            <Text style={styles.inputlabel}>Phone Number</Text>
            <TextInput
              value={phone}
              placeholder="Phone Number"
              placeholderTextColor="#d1d1d1"
              style={styles.textbox}
              keyboardType="phone-pad"
              maxLength={10}
              minLength={10}
              ref={captchaFormNew}
              onChangeText={(text) => setPhone(text)}
            />

            <View>
              <Text style={styles.inputlabel}>Country</Text>
              <Modelpicker
                getCountry={getCountry}
                countryReset={countryReset}
                updateReset={updateReset}
              />
            </View>

            <ConfirmGoogleCaptcha
              ref={captchaForm}
              siteKey={siteKey}
              baseUrl={baseUrl}
              languageCode="en"
              onMessage={onMessage}
            />
            {/* <Button
                onPress={() => {
                  console.log("abhi", captchaForm);
                  captchaForm.current.show();
                }}
                title="Click"
                style={{ width: 120, backgroundColor: "darkviolet" }}
                textColor="#fff"
              /> */}

            <TouchableOpacity
              style={styles.touchbtnprim}
              // onPress={() => navigation.navigate("SignupasSkiller")}
              onPress={() => handleLogin()}
            >
              <Text style={styles.touchbtntext}>Validate Number</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchbtnsecon}
              onPress={resetFunction}
            >
              <Text style={styles.touchbtntext}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
