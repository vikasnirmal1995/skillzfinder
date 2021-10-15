import React, { useState } from "react";
import { ActivityIndicator } from "react-native";

const Loader = () => {
  const navigation = useNavigation();
  return <ActivityIndicator size="large" />;
};

export default Loader;
