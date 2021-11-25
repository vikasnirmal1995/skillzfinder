import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../Drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { logOutSkiller } from "../redux/actions/user";

export function DrawerContent(props) {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    AsyncStorage.clear();
    dispatch(logOutSkiller(null));
  };
  const locationUser = useSelector((state) => state.user.user);

  return (
    <View style={{ flex: 1, backgroundColor: "#0B97FB" }}>
      <DrawerContentScrollView {...props}>
        <View>
          <TouchableOpacity
            style={styles.draertop}
            // onPress={() => {
            //   props.navigation.navigate("Profile");
            // }}
          >
            <Image
              source={require("../assets/Images/chatuserico.png")}
              style={styles.avater}
            />
            <View style={styles.avainfo}>
              <Text style={styles.avatitle}>{locationUser.phone}</Text>
              <Text style={styles.avacaption}>{locationUser.country_code}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.drwerbot}>
          <DrawerItem
            icon={() => (
              <Image
                source={require("../assets/Images/chat.png")}
                style={styles.itemico}
              />
            )}
            label={() => <Text style={styles.drawitem}>chats</Text>}
            onPress={() => {
              props.navigation.navigate("ChatList");
            }}
          />

          <DrawerItem
            icon={() => (
              <Image
                source={require("../assets/Images/newsearch.png")}
                style={styles.itemico}
              />
            )}
            label={() => <Text style={styles.drawitem}>New Search</Text>}
            onPress={() => {
              props.navigation.navigate("MyLocation");
            }}
          />

          <DrawerItem
            icon={() => (
              <Image
                source={require("../assets/Images/favrouit.png")}
                style={styles.itemico}
              />
            )}
            label={() => <Text style={styles.drawitem}>Favourites</Text>}
            onPress={() => {
              props.navigation.navigate("Favourites");
            }}
          />

          <DrawerItem
            icon={() => (
              <Image
                source={require("../assets/Images/logout.png")}
                style={styles.itemico}
              />
            )}
            label={() => <Text style={styles.drawitem}>Log out</Text>}
            onPress={() => handleLogOut()}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerContent;
