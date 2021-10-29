import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "../screens/ListView/styles";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { LIKESKILLER } from "../config/urls";
import { makeReq } from "../utils.js/makeReq";
import ItemCard from "./ItemCard";

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
  const getMyProfile = useSelector((state) => state.user.user);
  const navigation = useNavigation();

  return (
    <FlatList
      data={getSkillersData}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <ItemCard item={item} navigation={navigation} />
      )}
    ></FlatList>
  );
}

export default Skillzerlist;
