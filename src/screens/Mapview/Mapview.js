import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import styles from "./styles";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { useSelector } from "react-redux";

const topDrawerStyle = {
  position: "absolute",
  zIndex: 1,
  top: 10,
  left: 12,
};

const Mapview = ({ navigation }) => {
  const getSkillersData = useSelector((state) => state.user.skillers);
  const [radius, setRadius] = useState(500);
  const [latLng, setLatLng] = useState({
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  console.log("getSkillersData", latLng);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
          <Image
            source={require("../../assets/Images/header.jpg")}
            style={styles.topimage}
          />
        </View>

        <View style={styles.areatextbg}>
          <Text style={styles.areatext}>Search for Skillerz in your Area</Text>
        </View>

        <View style={styles.bodysection}>
          <View style={styles.mapWrapper}>
            <View style={styles.mapContainer}>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                zoomEnabled={true}
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
                  latitude: -25.798484,
                  longitude: 28.331165,
                  latitudeDelta: latLng.latitudeDelta,
                  longitudeDelta: latLng.longitudeDelta,
                }}
              >
                <MapView.Circle
                  key={(-25.798484 + 28.331165).toString()}
                  center={{ latitude: -25.798484, longitude: 28.331165 }}
                  radius={radius}
                  strokeWidth={3}
                  strokeColor={"transparent"}
                  fillColor={"rgba(0,153,255,0.3)"}
                ></MapView.Circle>
                <Marker
                  coordinate={{
                    latitude: -25.798484,
                    longitude: 28.331165,
                  }}
                  title={"My Location"}
                >
                  <View style={styles.myPointer}></View>
                </Marker>
                {getSkillersData.length > 0 && (
                  <>
                    {getSkillersData.map((item, index) => (
                      <Marker
                        coordinate={{
                          latitude: parseFloat(item.skiller_latitude),
                          longitude: parseFloat(item.skiller_longitude),
                        }}
                        key={index}
                        image={require("../../assets/Images/icons/marker.png")}
                        title={item.skiller_name}
                      >
                        <Callout
                          tooltip={false}
                          onPress={() =>
                            navigation.navigate("Profile", {
                              skillerData: item,
                            })
                          }
                        />
                      </Marker>
                    ))}
                  </>
                )}
              </MapView>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottombtun}>
        <TouchableOpacity onPress={() => navigation.navigate("Listview")}>
          <Text style={styles.butntext}>List View</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Mapview;
