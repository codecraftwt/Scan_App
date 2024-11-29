import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const supplementResult = require('../Assets/images/suplementResultImg.png');
const mark = require('../Assets/images/Ellipse.png');
const markSymbol = require('../Assets/images/Vector.png');
const bgScreenImage = require('../Assets/images/bgImage.png');

const NoMatchScreen = () => {
  const [highlightedRows, setHighlightedRows] = useState([]);

  const scrollViewRef = useRef(null);

  const handleScroll = event => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const rowHeight = 60;
    const visibleIndex = Math.floor(contentOffsetY / rowHeight);
    setHighlightedRows([String(visibleIndex + 1), String(visibleIndex + 2)]);
  };

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
        <ImageBackground
          source={bgScreenImage}
          style={styles.backgroundImage}
          // resizeMode="cover"
        >
          <View style={styles.upperContainer}>
            <View style={styles.sampleImageContainer}>
              <Image source={supplementResult} style={styles.sampleImage} />
              <View style={styles.markContainer}>
                <Image source={mark} style={styles.mark} />
                <Image source={markSymbol} style={styles.markSymbol} />
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>No match!</Text>
              <Text style={styles.title}>That’s a good thing.</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.listTitle}>Ingredients of interest</Text>
            <View style={styles.flatListView}>
            <ScrollView
                style={styles.ingredientList}
                nestedScrollEnabled={true}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                ref={scrollViewRef}>
                {ingredients.map(item => (
                  <View style={styles.row} key={item.id}>
                    <Text
                      style={[
                        styles.listItem,
                        highlightedRows.includes(item.id) &&
                          styles.topThreeListItem,
                      ]}>
                      {item.title}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View style={styles.transparentOverlay}>
              <View style={styles.transparentView}></View>
            </View>
            <View style={styles.buttoncontainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Scan new label</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

export default NoMatchScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(22, 22, 22, 1)',
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  flatListView: {
    height: 225,
  },
  sampleImageContainer: {
    position: 'relative',
  },
  sampleImage: {
    height: 230,
    width: 130,
    borderWidth: 3,
    borderColor: '#83FFCB',
    borderRadius: 24,
  },
  markContainer: {
    position: 'absolute',
    bottom: -50,
    right: -48,
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
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '48%',
    justifyContent: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
});
