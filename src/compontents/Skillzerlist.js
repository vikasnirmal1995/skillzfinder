import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "../screens/ListView/styles";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";

// const Data = [
//   {
//     Image: (
//       <Image
//         source={require("../assets/Images/chatuserico.png")}
//         style={styles.usericon}
//       />
//     ),
//     Name: "Name Surname",
//     Caption: "Description of the services \n offeredby this company",
//     Reviewpoint: "3.5 (5)",
//     Review: (
//       <Image
//         source={require("../assets/Images/reviewstar.png")}
//         style={styles.review}
//       />
//     ),
//     Favicon: (
//       <Image
//         source={require("../assets/Images/favrouit-bl.png")}
//         style={styles.favicon}
//       />
//     ),
//   },
//   {
//     Image: (
//       <Image
//         source={require("../assets/Images/chatuserico.png")}
//         style={styles.usericon}
//       />
//     ),
//     Name: "Name Surname",
//     Caption: "Description of the services \n offeredby this company",
//     Reviewpoint: "3.5 (5)",
//     Review: (
//       <Image
//         source={require("../assets/Images/reviewstar.png")}
//         style={styles.review}
//       />
//     ),
//     Favicon: (
//       <Image
//         source={require("../assets/Images/favrouit-bl.png")}
//         style={styles.favicon}
//       />
//     ),
//   },
//   {
//     Image: (
//       <Image
//         source={require("../assets/Images/chatuserico.png")}
//         style={styles.usericon}
//       />
//     ),
//     Name: "Name Surname",
//     Caption: "Description of the services \n offeredby this company",
//     Reviewpoint: "3.5 (5)",
//     Review: (
//       <Image
//         source={require("../assets/Images/reviewstar.png")}
//         style={styles.review}
//       />
//     ),
//     Favicon: (
//       <Image
//         source={require("../assets/Images/favrouit-bl.png")}
//         style={styles.favicon}
//       />
//     ),
//   },
//   {
//     Image: (
//       <Image
//         source={require("../assets/Images/chatuserico.png")}
//         style={styles.usericon}
//       />
//     ),
//     Name: "Name Surname",
//     Caption: "Description of the services \n offeredby this company",
//     Reviewpoint: "3.5 (5)",
//     Review: (
//       <Image
//         source={require("../assets/Images/reviewstar.png")}
//         style={styles.review}
//       />
//     ),
//     Favicon: (
//       <Image
//         source={require("../assets/Images/favrouit-bl.png")}
//         style={styles.favicon}
//       />
//     ),
//   },
//   {
//     Image: (
//       <Image
//         source={require("../assets/Images/chatuserico.png")}
//         style={styles.usericon}
//       />
//     ),
//     Name: "Name Surname",
//     Caption: "Description of the services \n offeredby this company",
//     Reviewpoint: "3.5 (5)",
//     Review: (
//       <Image
//         source={require("../assets/Images/reviewstar.png")}
//         style={styles.review}
//       />
//     ),
//     Favicon: (
//       <Image
//         source={require("../assets/Images/favrouit-bl.png")}
//         style={styles.favicon}
//       />
//     ),
//   },
//   {
//     Image: (
//       <Image
//         source={require("../assets/Images/chatuserico.png")}
//         style={styles.usericon}
//       />
//     ),
//     Name: "Name Surname",
//     Caption: "Description of the services \n offeredby this company",
//     Reviewpoint: "3.5 (5)",
//     Review: (
//       <Image
//         source={require("../assets/Images/reviewstar.png")}
//         style={styles.review}
//       />
//     ),
//     Favicon: (
//       <Image
//         source={require("../assets/Images/favrouit-bl.png")}
//         style={styles.favicon}
//       />
//     ),
//   },
//   {
//     Image: (
//       <Image
//         source={require("../assets/Images/chatuserico.png")}
//         style={styles.usericon}
//       />
//     ),
//     Name: "Name Surname",
//     Caption: "Description of the services \n offeredby this company",
//     Reviewpoint: "3.5 (5)",
//     Review: (
//       <Image
//         source={require("../assets/Images/reviewstar.png")}
//         style={styles.review}
//       />
//     ),
//     Favicon: (
//       <Image
//         source={require("../assets/Images/favrouit-bl.png")}
//         style={styles.favicon}
//       />
//     ),
//   },
// ];

export function Skillzerlist() {
  const getSkillersData = useSelector((state) => state.user.skillers);
  const navigation = useNavigation();

  return (
    <FlatList
      data={getSkillersData}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profile", {
                skillerData: item,
              })
            }
            style={styles.chatcontact}
          >
            <View>
              <Image
                source={{ uri: item.profile_image }}
                style={styles.review}
              />
            </View>
            <View style={styles.rightview}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.username}>{item.skiller_name}</Text>
                <TouchableOpacity
                  style={styles.favionFix}
                  onPress={() => {
                    alert("Hello");
                  }}
                >
                  <Image
                    source={require("../assets/Images/favrouit-bl.png")}
                    style={styles.favicon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.captionWrapper}>
                <Text style={styles.discriptiontext}>{item.description}</Text>
              </View>
              <View
                style={{ flexDirection: "row", marginTop: 7, marginLeft: 12 }}
              >
                <View>{item.Review}</View>
                <Text style={styles.charhour}>{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    ></FlatList>
  );
}

export default Skillzerlist;
