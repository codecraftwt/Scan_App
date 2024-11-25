import {useRoute} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const sample = require('../Assets/images/sample.png');
const mark = require('../Assets/images/Ellipse.png');
const markSymbol = require('../Assets/images/Vector.png');

const CameraResult = () => {
  const route = useRoute();
  const {imageUrl} = route.params;
  const [highlightedRows, setHighlightedRows] = useState([]);
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    const topThree = viewableItems.slice(0, 3).map(item => item.item.id);
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
          renderItem={({item}) => (
            <View style={styles.row}>
              <Text
                style={[
                  styles.listItem,
                  highlightedRows.includes(item.id) && styles.topThreeListItem,
                ]}>
                {item.title}
              </Text>
            </View>
          )}
          onViewableItemsChanged={onViewableItemsChanged.current}
          viewabilityConfig={viewabilityConfig}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Scan new label</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    height: 220,
    width: 123,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 15,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: 24,
    color: '#FFFFFF',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  listTitle: {
    paddingLeft: 25,
    paddingBottom: 15,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 18,
    color: '#545454',
    alignItems: 'flex-start',
    textTransform: 'uppercase',
    letterSpacing: 4.14,
  },
  row: {
    height: 50,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#242424',
  },
  listItem: {
    fontFamily: 'Inter',
    fontWeight: '100',
    fontSize: 20,
    paddingLeft: 25,
    color: '#FFFFFF',
    alignItems: 'flex-start',
    letterSpacing: 1.8,
  },
  topThreeListItem: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 20,
  },
  button: {
    width: 270,
    height: 60,
    marginBottom: 20,
    borderRadius: 15,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttontext: {
    fontFamily: 'Supreme Variable, sans-serif',
    fontWeight: '800',
    fontSize: 16,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 2.08,
  },
  mark: {
    width: 75,
    height: 75,
  },
  markSymbol: {
    position: 'absolute',
    bottom: 22,
    right: 12,
    width: 30,
    height: 25,
  },
  markContainer: {
    position: 'absolute',
    bottom: 95,
    right: 17,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 38,
  },
});
