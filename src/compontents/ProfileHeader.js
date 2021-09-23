import React, { useState } from 'react';
import styles from '../screens/Profile/styles';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/core';



const ProfileHeader = () => {

  const navigation = useNavigation();

return (

<View style={styles.profilheader}>

    <View style={styles.topbar}>

      <View style={styles.scrntitle}><Text style={styles.scrntitltext}>Profile</Text></View>
      <Image source={require('../assets/Images/favrouit.png')}  style={styles.favico}/>
      <Image source={require('../assets/Images/share.png')}  style={styles.sharico}/>
    </View>

    <View style={styles.usrname}>
      <Text style={styles.nametext}>John Smith</Text>
    </View>

<View style={styles.profiletopsec}>
    <View style={styles.proviewbtn}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}> 
          <Text style={styles.viewtext}>View</Text>
        </TouchableOpacity>
    </View>
    
    <View style={styles.avter}>
      <Image source={require('../assets/Images/Jhonsmith.jpg')} style={styles.avaterimg}/>
      <View style={styles.avateredit}>
        <Image source={require('../assets/Images/wrench.png')} style={styles.avatereditimg}/>
        </View>
    </View>

    <View style={styles.ratedbtn}>
      <TouchableOpacity onPress={() => navigation.navigate('RateSkillz')}>
        <Image source={require('../assets/Images/star.png')} style={styles.startratd}/>
          <Text style={styles.rateing}>3.5 Rated</Text>
      </TouchableOpacity>
    </View>

</View>    

</View>



  );
};


export default ProfileHeader;
