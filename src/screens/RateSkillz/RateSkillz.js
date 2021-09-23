import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';
import ProfileHeader from '../../compontents/ProfileHeader';

const topDrawerStyle = {
  position: 'absolute',
  zIndex: 1,
  top: 10,
  left: 12,
};

const RateSkillz = ({ navigation }) => {

  return (
    
  <View style={styles.container}>
    <ScrollView>
     
     <ImageBackground source={require('../../assets/Images/header.jpg')} style={{width: '100%'}}>
      <View style={styles.profilheader}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={topDrawerStyle}>
          <Image source={require('../../assets/Images/drawerbar.png')}
            style={{ height: 22, width: 22 }} />
        </TouchableOpacity>
           
           <ProfileHeader />
           
           
      </View>
      </ImageBackground>


      <View style={styles.areatextbg}>
        <Text style={styles.areatext}>Electrician in Garsfontein</Text>
      </View>

        <View style={styles.bodycontent}>
          <View style={styles.middltitle}><Text style={styles.titletext}>Please rate my skillz!</Text></View>
            <View style={styles.middlescetion}>
              <Image source={require('../../assets/Images/starskiller.png')} style={styles.staricon}/>
                <Text style={styles.ratetext}>Uber Excellent</Text>
            </View>
            <View style={styles.middlescetion}>
              <Image source={require('../../assets/Images/starskiller.png')} style={styles.staricon}/>
                <Text style={styles.ratetext}>Excellent</Text>
            </View>

            <View style={styles.middlescetion}>
              <Image source={require('../../assets/Images/starskiller.png')} style={styles.staricon}/>
                <Text style={styles.ratetext}>Good</Text>
            </View>

            <View style={styles.middlescetion}>
              <Image source={require('../../assets/Images/starskiller.png')} style={styles.staricon}/>
                <Text style={styles.ratetext}>Okay</Text>
            </View>

            <View style={styles.middlescetion}>
              <Image source={require('../../assets/Images/starskiller.png')} style={styles.staricon}/>
                <Text style={styles.ratetext}>Bad</Text>
            </View>
        </View>
            
      </ScrollView> 

      <View style={styles.secondbutn}>
        <TouchableOpacity onPress={() => navigation.navigate ('MyLocation') }>
          <Text style={styles.butntext}>submit</Text>
        </TouchableOpacity>
      </View>
    

      <View style={styles.bottombutn}>
        <TouchableOpacity onPress={() => navigation.navigate ('Listview')} style={{width: '50%', alignItems: 'center'}}>
          <View><Image source={require('../../assets/Images/back.png')} style={styles.backarrow} /></View>
        </TouchableOpacity>
        <View><Image source={require('../../assets/Images/divder.jpg')}/></View>
        <TouchableOpacity onPress={() => navigation.navigate ('MyLocation') } style={{width: '50%', alignItems: 'center'}}>
          <Text style={styles.butntext}>New Search</Text>
        </TouchableOpacity>
      </View>
    

   </View>

  );
};


export default RateSkillz;
