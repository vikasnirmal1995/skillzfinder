import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Splash from './src/screens/Splash/Splash';
import {DrawerContent} from './src/compontents/DrawerContent';
import Listview from './src/screens/ListView/Listview';
import {Skillzerlist} from './src/compontents/Skillzerlist';

import Login from './src/screens/Login/Login';
import Modelpicker from './src/compontents/Modelpicker';
import SignupasSkiller from './src/screens/SignupasSkiller/SignupasSkiller';
import MyLocation from './src/screens/MyLocation/MyLocation';
import Profile from './src/screens/Profile/Profile';
import ProfileHeader from './src/compontents/ProfileHeader';
import ProfileDetail from './src/screens/ProfileDetail/ProfileDetail';
import Mapview from './src/screens/Mapview/Mapview';
import RateSkillz from './src/screens/RateSkillz/RateSkillz';
import ChatList from './src/screens/ChatList/ChatList';
import ChatContactFlatlist from './src/compontents/ChatContactFlatlist';
import Chating from './src/screens/Chating/Chating';
import Favourites from './src/screens/Favourites/Favourites';
import SkillerSlider from './src/compontents/SkillerSlider';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function Root() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Splash" component={Splash} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Modelpicker" component={Modelpicker} />
        <Drawer.Screen name="SignupasSkiller" component={SignupasSkiller} />
        <Drawer.Screen name="MyLocation" component={MyLocation} />
        <Drawer.Screen name="DrawerContent" component={DrawerContent} />
        <Drawer.Screen name="Listview" component={Listview} />
        <Drawer.Screen name="Skillzerlist" component={Skillzerlist} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="ProfileHeader" component={ProfileHeader} />
        <Drawer.Screen name="ProfileDetail" component={ProfileDetail} />
        <Drawer.Screen name="Mapview" component={Mapview} />
        <Drawer.Screen name="RateSkillz" component={RateSkillz} />
        <Drawer.Screen name="ChatList" component={ChatList} />
        <Drawer.Screen name="ChatContactFlatlist" component={ChatContactFlatlist} />
        <Drawer.Screen name="Chating" component={Chating} />
        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen name="SkillerSlider" component={SkillerSlider} />
     </Drawer.Navigator>
   
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options = {{title : "Splash", headerShown : false}}/>
        <Stack.Screen name="Login" component={Root} options = {{title : "Login", headerShown : false}}/>
        <Stack.Screen name="Modelpicker" component={Modelpicker} options = {{title : "Modelpicker", headerShown : false}}/>    
        <Stack.Screen name="SignupasSkiller" component={SignupasSkiller} options = {{title : "SignupasSkiller", headerShown : false}}/>
        <Stack.Screen name="MyLocation" component={MyLocation} options = {{title : "MyLocation", headerShown : false}}/>
        <Stack.Screen name="DrawerContent" component={DrawerContent} options = {{title : "DrawerContent", headerShown : false}}/>
        <Stack.Screen name="Listview" component={Listview} options = {{title : "Listview", headerShown : false}}/>
        <Stack.Screen name="Skillzerlist" component={Skillzerlist} options = {{title : "Skillzerlist", headerShown : false}}/>
        <Stack.Screen name="Profile" component={Profile} options = {{title : "Profile", headerShown : false}}/>
        <Stack.Screen name="ProfileHeader" component={ProfileHeader} options = {{title : "ProfileHeader", headerShown : false}}/>
        <Stack.Screen name="ProfileDetail" component={ProfileDetail} options = {{title : "ProfileDetail", headerShown : false}}/>
        <Stack.Screen name="Mapview" component={Mapview} options = {{title : "Mapview", headerShown : false}}/>
        <Stack.Screen name="RateSkillz" component={RateSkillz} options = {{title : "RateSkillz", headerShown : false}}/>
        <Stack.Screen name="ChatList" component={ChatList} options = {{title : "ChatList", headerShown : false}}/>
        <Stack.Screen name="ChatContactFlatlist" component={ChatContactFlatlist} options = {{title : "ChatContactFlatlist", headerShown : false}}/>
        <Stack.Screen name="Chating" component={Chating} options = {{title : "Chating", headerShown : false}}/>
        <Stack.Screen name="Favourites" component={Favourites} options = {{title : "Favourites", headerShown : false}}/>
        <Stack.Screen name="SkillerSlider" component={SkillerSlider} options = {{title : "SkillerSlider", headerShown : false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;