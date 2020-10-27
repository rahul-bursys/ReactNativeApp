/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  FlatList,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

 

const App: () => React$Node = () => {
  const DATA = [
    {
      id: '1',
      title: 'Farmhouse Pizza',
      img: require('./assets/Farmhouse.jpg'),
    },
    {
      id: '2',
      title: 'Classic Veg',
      img: require('./assets/Classic_veg.jpg'),
    },
    {
      id: '3',
      title: 'Farm Fresh Veggie Pizza',
      img: require('./assets/Fresh_Veggie.jpg'),
    },
    {
      id: '4',
      title: 'Farmhouse Pizza - Cheese Overloaded',
      img: require('./assets/Heavy.png'),
    },
    {
      id: '5',
      title: 'Indian Paneer Makhni Pizza',
      img: require('./assets/Paneer_Makhni.jpg'),
    },
    {
      id: '6',
      title: 'Veggie Paradise Pizza - Cheese Overloaded',
      img: require('./assets/veggie_paradise.jpg'),
    },
    {
      id: '7',
      title: 'Mexican wave Pizza',
      img: require('./assets/veggie_paradise.jpg'),
    },
    {
      id: '8',
      title: 'Onion Pizza',
      img: require('./assets/veggie_paradise.jpg'),
    },
    {
      id: '9',
      title: 'Tomato Pizza',
      img: require('./assets/veggie_paradise.jpg'),
    },
  ];

  let renderItems = (i)=>{
    console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiii", i)
  return  <Card>
     <View key={i.item.id}>
       <View style={{ flexDirection: "row", flex: 1, height: wp("20%"), alignItems: "center" }}>
         <Image
           style={{ flex: 2 }}
           resizeMode="center"
           source={i.item.img}
         />
         <View style={{ flex: 5, }}>
           <Text>{i.item.title}</Text>
         </View>
       </View>
     </View>
   </Card>
  }

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Image
        style={{ alignSelf: "center" }}
        resizeMode="contain"
        source={require('./assets/pizza1.png')}
      />
      <FlatList
        data={DATA}
        renderItem={(item,i)=> renderItems(item)}
        keyExtractor={(item,index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.blue,
  },
  sectionDescription: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '800',
  },
  footer: {
    color: Colors.dark,
    fontSize: 14,
    fontWeight: '800',
    padding: 6,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
