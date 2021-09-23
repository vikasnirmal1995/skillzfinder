import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, TextInput} from 'react-native';
import styles from './styles';

const topDrawerStyle = {
    position:'absolute',
    zIndex: 1,
    top: 10,
    left: 12,
}; 

const Chating = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
          <ImageBackground source={require('../../assets/Images/header.jpg')} style={{width: '100%'}}>
            <View style={styles.topsction}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={topDrawerStyle}>
                    <Image source={require('../../assets/Images/drawerbar.png')}
                        style={{ height: 22, width: 22}} />
                </TouchableOpacity>
            </View>
            </ImageBackground>
            
            <View style={styles.areatextbg}>
                <Text style={styles.areatext}>Chat</Text>
            </View>


            

            <View style={styles.middelsection}>

                <View style={styles.username}>
                    <View  style={styles.goback}>
                        <TouchableOpacity onPress = {() => navigation.navigate ('ChatList') }>          
                            <Image source={require('../../assets/Images/goback.png')} style={styles.backarrow}/>
                        </TouchableOpacity>
                     </View>
                        <Text style={styles.usernametext}>John Doe</Text>
                </View>


    <View style={styles.chatsec}>

      <View style={styles.chatcard}>
        <Image source={require('../../assets/Images/chatuserico.png')} style={styles.chatimg}/>                  
    
      <View style={styles.chatabove}>
          <Text style={styles.chattext1}> 
            Lorem ipsum, or lipsum as it is sometimes known
            is dummy text used in laying out print.</Text>
          </View>
      </View>


      <View style={styles.chatcard}>
        <View style={styles.chatbelow}>
          <Text style={styles.chattext2}> 
            Lorem ipsum, or lipsum as it is sometimes known
            is dummy text used in laying out print.</Text>
          </View>
      </View>

      <View style={styles.chattime}>
          <Text style={styles.chattimetext}>Monday, 10:40 am</Text></View>



          <View style={styles.chatcard}>
        <Image source={require('../../assets/Images/chatuserico.png')} style={styles.chatimg}/>                  
    
      <View style={styles.chatabove}>
          <Text style={styles.chattext1}> 
            Lorem ipsum, or lipsum as it is sometimes known
            is dummy text used in laying out print.</Text>
          </View>
      </View>


      <View style={styles.chatcard}>
        <View style={styles.chatbelow}>
          <Text style={styles.chattext2}> 
            Lorem ipsum, or lipsum as it is sometimes known
            is dummy text used in laying out print.</Text>
          </View>
      </View>
  
        
      
    </View>

                </View>


            </ScrollView>
            

            <View style={styles.fixed}>

    <View style={styles.chatbox}>
      <Image source={require('../../assets/Images/camicon.png')} style={styles.camicon}/>
      <View style={styles.chatfild}><TextInput placeholder='Password' placeholderTextColor='#add7f7' style={styles.input} /></View>
    </View>

    
    </View>

            
           
        </View>
    );
};


export default Chating;