import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "../screens/ListView/styles";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { LIKESKILLER } from "../config/urls";
import { makeReq } from "../utils.js/makeReq";
import ItemLikedCard from "./ItemLikedCard";

export function LikedSkillerlist() {
  const getSkillersData = useSelector((state) => state.user.likedSkillers);
  const getAllSkillersData = useSelector((state) => state.user.skillers);

  const getMyProfile = useSelector((state) => state.user.user);
  const navigation = useNavigation();

  console.log("liked skiller", getSkillersData);
  return (
    <FlatList
      data={getSkillersData}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <ItemLikedCard item={item} navigation={navigation} />
      )}
    ></FlatList>
  );
}

export default LikedSkillerlist;
