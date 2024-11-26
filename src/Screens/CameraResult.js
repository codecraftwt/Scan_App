import {useRoute} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const sample = require('../Assets/images/sample.png');
const mark = require('../Assets/images/Ellipse.png');
const markSymbol = require('../Assets/images/Vector.png');
const bgImage = require('../Assets/images/Ellipse1.png');

const CameraResult = () => {
  const route = useRoute();
  const {imageUrl} = route.params;
  const [highlightedRows, setHighlightedRows] = useState([]);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    const topThree = viewableItems
      .slice(0, 2)
      .map(item => String(item.item.id));
    console.log('Top three visible items:', topThree);
    setHighlightedRows(topThree);
  });

  const ingredients = [
    {id: '1', title: 'Wheat'},
    {id: '2', title: 'Flour'},
    {id: '3', title: 'Sugar'},
    {id: '4', title: 'Salt'},
    {id: '5', title: 'Milk'},
    {id: '6', title: 'Butter'},
    {id: '7', title: 'Eggs'},
    {id: '8', title: 'Yeast'},
  ];

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Image source={{uri: imageUrl}} style={styles.sampleImage} />
          <View style={styles.markContainer}>
            <Image source={mark} style={styles.mark} />
            <Image source={markSymbol} style={styles.markSymbol} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>No match!</Text>
            <Text style={styles.title}>That’s a good thing.</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.listTitle}>Ingredients of interest</Text>
          <FlatList
            data={ingredients}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flatListContent}
            renderItem={({item, index}) => (
              <View style={styles.row}>
                <Text
                  style={[
                    styles.listItem,
                    highlightedRows.includes(item.id) &&
                      styles.topThreeListItem,
                    index === 2 && styles.thirdListItem,
                  ]}>
                  {item.title}
                </Text>
              </View>
            )}
            onViewableItemsChanged={onViewableItemsChanged.current}
            viewabilityConfig={viewabilityConfig}
          />
          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>Scan new label</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default CameraResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171717',
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  sampleImage: {
    height: 230,
    width: 130,
    borderWidth: 3,
    borderColor: '#83FFCB',
    borderRadius: 24,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 24,
    color: '#FFFFFF',
    lineHeight: 25,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  listTitle: {
    paddingLeft: 16,
    paddingBottom: 15,
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    color: '#545454',
    alignItems: 'flex-start',
    textTransform: 'uppercase',
    letterSpacing: 4.14,
  },
  row: {
    height: 60,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#242424',
  },
  listItem: {
    fontWeight: '100',
    fontSize: 18,
    paddingLeft: 16,
    color: '#FFFFFF',
    alignItems: 'flex-start',
    letterSpacing: 1.8,
  },
  topThreeListItem: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 18,
  },
  thirdListItem: {
    fontWeight: '300',
    fontSize: 18,
    paddingLeft: 16,
    color: '#FFFFFF',
    alignItems: 'flex-start',
    letterSpacing: 1.8,
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 25,
  },
  button: {
    width: 270,
    height: 60,
    marginBottom: 15,
    borderRadius: 15,
    borderColor: '#FFFFFF',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttontext: {
    fontFamily: 'Supreme Variable, sans-serif',
    fontWeight: '700',
    fontSize: 16,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 2.08,
  },
  mark: {
    width: 120,
    height: 120,
  },
  markSymbol: {
    position: 'absolute',
    bottom: 38,
    right: 27,
    width: 35,
    height: 40,
  },
  markContainer: {
    position: 'absolute',
    bottom: 65,
    right: -5,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 38,
  },
});
