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

const Item = ({ i }) => (
  <Card>
    <View key={i.id}>
      <View style={{ flexDirection: "row", flex: 1, height: wp("20%"), alignItems: "center" }}>
        <Image
          style={{ flex: 2 }}
          resizeMode="center"
          source={i.img}
        />
        <View style={{ flex: 5, }}>
          <Text>{i.title}</Text>
        </View>
      </View>
    </View>
  </Card>
);

const App: () => React$Node = () => {
  const DATA = [
    {
      id: '1',
      title: 'Farmhouse Pizza',
      img: require('./assets/Farmhouse.jpg'),
    },

  ];

  const renderItem = ({ item }) => (
    <Item i={item} />
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Image
            style={{ alignSelf: "center" }}
            resizeMode="contain"
            source={require('./assets/pizza1.png')}
          />
          <View style={styles.body}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
