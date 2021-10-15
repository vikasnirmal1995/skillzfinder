import React, { useEffect } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Splash from "./src/screens/Splash/Splash";
import { DrawerContent } from "./src/compontents/DrawerContent";
import Listview from "./src/screens/ListView/Listview";
import { Skillzerlist } from "./src/compontents/Skillzerlist";

import Login from "./src/screens/Login/Login";
import OtpPage from "./src/screens/Login/OtpPage";
import Modelpicker from "./src/compontents/Modelpicker";
import SignupasSkiller from "./src/screens/SignupasSkiller/SignupasSkiller";
import MyLocation from "./src/screens/MyLocation/MyLocation";
import Profile from "./src/screens/Profile/Profile";
import ProfileHeader from "./src/compontents/ProfileHeader";
import ProfileDetail from "./src/screens/ProfileDetail/ProfileDetail";
import Mapview from "./src/screens/Mapview/Mapview";
import RateSkillz from "./src/screens/RateSkillz/RateSkillz";
import ChatList from "./src/screens/ChatList/ChatList";
import ChatContactFlatlist from "./src/compontents/ChatContactFlatlist";
import Chating from "./src/screens/Chating/Chating";
import Favourites from "./src/screens/Favourites/Favourites";
import SkillerSlider from "./src/compontents/SkillerSlider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "./src/redux/actions/user";
import { Text, View } from "react-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OtpPage" component={OtpPage} />
      <Stack.Screen name="SignupasSkiller" component={SignupasSkiller} />
    </Stack.Navigator>
  );
};
const MainNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="main" component={Root} />
    </Stack.Navigator>
  );
};

function Root() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="MyLocation"
      headerMode="none"
    >
      <Drawer.Screen name="ProfileDetail" component={ProfileDetail} />
      <Drawer.Screen name="Modelpicker" component={Modelpicker} />
      <Drawer.Screen name="MyLocation" component={MyLocation} />
      <Drawer.Screen name="DrawerContent" component={DrawerContent} />
      <Drawer.Screen name="Listview" component={Listview} />
      <Drawer.Screen name="Skillzerlist" component={Skillzerlist} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="ProfileHeader" component={ProfileHeader} />

      <Drawer.Screen name="Mapview" component={Mapview} />
      <Drawer.Screen name="RateSkillz" component={RateSkillz} />
      <Drawer.Screen name="ChatList" component={ChatList} />
      <Drawer.Screen
        name="ChatContactFlatlist"
        component={ChatContactFlatlist}
      />
      <Drawer.Screen name="Chating" component={Chating} />
      <Drawer.Screen name="Favourites" component={Favourites} />
      <Drawer.Screen name="SkillerSlider" component={SkillerSlider} />
    </Drawer.Navigator>
  );
}

function App() {
  const userState = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  // get data
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("skilzUser");
      if (value !== null) {
        dispatch(userData(value));
        console.log("data mil gaya,", JSON.parse(value));
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (e) {
      // error reading value
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
    // AsyncStorage.clear();
    // setIsLoading(false);
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        {userState.user !== null ? <MainNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}

export default App;
