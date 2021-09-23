import React from 'react';
import styles from './styles';
import {Text, View, Image, TouchableOpacity, ScrollView, TextInput,} from 'react-native';
import Modelpicker from '../../compontents/Modelpicker';


const Login = ({ navigation }) => {

  return (
<ScrollView style= {{flex: 1,}}>
    <View style={styles.container}>
          <View style={styles.topsction}>
                <Image source={require('../../assets/Images/mainheader.jpg')}
                    style={styles.topimage}
                />
            </View>

            <View style={styles.bodysection}>
               <View style={styles.middelsection}>
                   <Text style={styles.inputlabel}>Phone Number</Text>
                   <TextInput placeholder='Phone Number' placeholderTextColor='#d1d1d1' style={styles.textbox} />
                   
                  <View>
                    <Text style={styles.inputlabel}>Country</Text>                  
                      <Modelpicker/>
                  </View>

                <View>
                    <Image source={require("../../assets/Images/captcha.jpg")}
                        style={{width:"100%", height: 100, marginTop: 15,}}
                />
                </View>
                   
                    <TouchableOpacity style={styles.touchbtnprim} onPress={() => navigation.navigate ('SignupasSkiller') }>
                        <Text style={styles.touchbtntext}>Validate Number</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={styles.touchbtnsecon}>
                        <Text style={styles.touchbtntext}>Reset</Text>
                    </TouchableOpacity>
               </View>
            </View>

    </View>

    </ScrollView>
  );
};


export default Login;
