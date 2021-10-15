import React, { Component } from 'react';

import { View, Image} from 'react-native';

export default class Splash extends Component {

  constructor (props)
  {
  super (props);
  setTimeout (() =>
  {
  this.props.navigation.navigate("Login");
  },2000);
  }

  render()

  {

  return (

    <View style={{flex: 1}}>
     
    <Image source={require('../../assets/Images/splash.png')} style={{width: "100%", height: "100%"}}/>
      
    </View>
    

  );
  };
};


