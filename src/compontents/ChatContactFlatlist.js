import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from '../screens/ChatList/styles';
import { useNavigation } from '@react-navigation/core';


const Data = [
  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Time: '1hr ago',
  },

  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Time: '1hr ago',
  },

  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Time: '1hr ago',
  },

  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Time: '1hr ago',
  },

  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Time: '1hr ago',
  },

  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Time: '1hr ago',
  },

]



const ChatContactFlatlist = () => {

const navigation = useNavigation();

  return (
    
    <FlatList        
    data={Data}         
    keyExtractor={item => item.id}
    renderItem={({ item }) =>   
    (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Chating')} style={styles.chatcontact}> 
          <View>{item.Image}</View>  
            <Text style={styles.username}>{item.Name}</Text>       
            <Text style={styles.charhour}>{item.Time}</Text>
        </TouchableOpacity>
     </View>
    )
  } 
 >
 </FlatList>

  );
}


export default ChatContactFlatlist;