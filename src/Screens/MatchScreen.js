import {useRoute} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const supplementResult = require('../Assets/images/suplementResultImg.png');
const lineCircle = require('../Assets/images/LineCircle.png');
const line = require('../Assets/images/GroupLine.png');
const bgScreenImage = require('../Assets/images/bgScreenImg.png');

const MatchScreen = () => {
  const [highlightedRows, setHighlightedRows] = useState([]);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    const topThree = viewableItems
      .slice(0, 2)
      .map(item => String(item.item.id));
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.upperContainer}>
          <Image source={supplementResult} style={styles.sampleImage} />
          <View style={styles.markContainer}>
            <Image source={lineCircle} style={styles.lineCircle} />
            <Image source={line} style={styles.line} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>This product contains a</Text>
            <Text style={styles.title}>flagged ingredient.</Text>
          </View>
        </View>
        <View style={styles.cardDiv}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Titanium dioxide</Text>
            <Text style={styles.cardPara}>
              Titanium oxide is banned in foods in the EU and California.
              Nanoparticles of titanium oxide (nano-TiO₂) is often used in
              sunscreen.
            </Text>
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
                  ]}>
                  {item.title}
                </Text>
              </View>
            )}
            onViewableItemsChanged={onViewableItemsChanged.current}
            viewabilityConfig={viewabilityConfig}
          />
          <View style={styles.transparentOverlay}>
            <View style={styles.transparentView}></View>
          </View>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>Scan new label</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MatchScreen;

const styles = StyleSheet.create({
  scrollContainer: {
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
    borderColor: 'rgba(253, 204, 95, 1)',
    borderRadius: 24,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 22,
    color: '#FFFFFF',
    lineHeight: 25,
    fontWeight: '700',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  listTitle: {
    paddingLeft: 25,
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
    fontWeight: '200',
    fontSize: 18,
    paddingLeft: 25,
    color: '#FFFFFF',
    alignItems: 'flex-start',
    letterSpacing: 1.8,
  },
  topThreeListItem: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 18,
    paddingLeft: 25,
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },
  button: {
    width: 315,
    height: 60,
    marginBottom: 15,
    borderRadius: 15,
    borderColor: '#FFFFFF',
    borderWidth: 2,
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
  lineCircle: {
    width: 120,
    height: 120,
  },
  line: {
    position: 'absolute',
    bottom: 38,
    right: 30,
    width: 28,
    height: 40,
  },
  markContainer: {
    position: 'absolute',
    bottom: 0,
    right: 5,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 38,
  },
  transparentOverlay: {
    position: 'relative',
    height: 20,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    zIndex: 1,
  },
  transparentView: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(23, 23, 23, 0.8)',
  },
  cardDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 15,
  },
  cardContainer: {
    height: 150,
    width: 350,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(75, 75, 75, 0.1)',
  },
  cardTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 2.5,
    color: 'rgba(255, 220, 164, 1)',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  cardPara: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.32,
    color: 'rgba(255, 255, 255, 1)',
    paddingHorizontal: 20,
  },
});
