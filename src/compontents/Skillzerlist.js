import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from '../screens/ListView/styles';
import { useNavigation } from '@react-navigation/core';



const Data = [
  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Caption: 'Description of the services \n offeredby this company',
    Reviewpoint: '3.5 (5)',
    Review: <Image source={require('../assets/Images/reviewstar.png')} style={styles.review}/>,
    Favicon: <Image source={require('../assets/Images/favrouit-bl.png')} style={styles.favicon}/>
  },
  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Caption: 'Description of the services \n offeredby this company',
    Reviewpoint: '3.5 (5)',
    Review: <Image source={require('../assets/Images/reviewstar.png')} style={styles.review}/>,
    Favicon: <Image source={require('../assets/Images/favrouit-bl.png')} style={styles.favicon}/>
  },
  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Caption: 'Description of the services \n offeredby this company',
    Reviewpoint: '3.5 (5)',
    Review: <Image source={require('../assets/Images/reviewstar.png')} style={styles.review}/>,
    Favicon: <Image source={require('../assets/Images/favrouit-bl.png')} style={styles.favicon}/>
  },
  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Caption: 'Description of the services \n offeredby this company',
    Reviewpoint: '3.5 (5)',
    Review: <Image source={require('../assets/Images/reviewstar.png')} style={styles.review}/>,
    Favicon: <Image source={require('../assets/Images/favrouit-bl.png')} style={styles.favicon}/>
  },
  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Caption: 'Description of the services \n offeredby this company',
    Reviewpoint: '3.5 (5)',
    Review: <Image source={require('../assets/Images/reviewstar.png')} style={styles.review}/>,
    Favicon: <Image source={require('../assets/Images/favrouit-bl.png')} style={styles.favicon}/>
  },
  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Caption: 'Description of the services \n offeredby this company',
    Reviewpoint: '3.5 (5)',
    Review: <Image source={require('../assets/Images/reviewstar.png')} style={styles.review}/>,
    Favicon: <Image source={require('../assets/Images/favrouit-bl.png')} style={styles.favicon}/>
  },
  {
    Image: <Image source={require('../assets/Images/chatuserico.png')} style={styles.usericon}/>,
    Name: 'Name Surname',
    Caption: 'Description of the services \n offeredby this company',
    Reviewpoint: '3.5 (5)',
    Review: <Image source={require('../assets/Images/reviewstar.png')} style={styles.review}/>,
    Favicon: <Image source={require('../assets/Images/favrouit-bl.png')} style={styles.favicon}/>
  },
]



export function Skillzerlist () {

const navigation = useNavigation();

  return (
    
    <FlatList        
    data={Data}         
    keyExtractor={item => item.id}
    renderItem={({ item }) =>   
    (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.chatcontact}> 
        <View>{item.Image}</View>  
        <View style={styles.rightview}>  
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.username}>{item.Name}</Text> 
            <View>{item.Favicon}</View>   
          </View>

        <Text style={styles.discriptiontext}>{item.Caption}</Text>   
          <View style={{flexDirection: 'row', marginTop: 7, marginLeft: 12,}}>
            <View>{item.Review}</View>    
              <Text style={styles.charhour}>{item.Reviewpoint}</Text>
          </View>
        </View>
        </TouchableOpacity>
     </View>
    )
  } 
 >
 </FlatList>

  );
}


export default Skillzerlist;