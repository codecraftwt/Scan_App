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
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/native';
import {globalColors} from '../Assets/themes/globalColors';

const supplementResult = require('../Assets/images/suplementResultImg.png');
const mark = require('../Assets/images/Ellipse.png');
const markSymbol = require('../Assets/images/Vector.png');
const bgScreenImage = require('../Assets/images/bgImage.png');

const NoMatchScreen = ({navigation}) => {
  const route = useRoute();
  const {imageUrl, originalImageUrl} = route.params;
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
      <StatusBar
        barStyle="light-content"
        backgroundColor={globalColors.Charcoal}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={{uri: originalImageUrl}}
          style={styles.backgroundImage}
          resizeMode="cover"
          blurRadius={7}>
          <View style={styles.upperContainer}>
            <View style={styles.sampleImageContainer}>
              <Image source={{uri: imageUrl}} style={styles.sampleImage} />
              <View style={styles.markContainer}>
                <Image source={mark} style={styles.mark} />
                <Image source={markSymbol} style={styles.markSymbol} />
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>No match!</Text>
              <Text style={styles.title}>That’s a good thing.</Text>
            </View>
            <LinearGradient
              colors={[
                globalColors.TransparentBlack,
                globalColors.Charcoal,
                globalColors.Charcoal,
                globalColors.Charcoal,
              ]}>
              <View style={{height: 20, width: '100%'}}></View>
            </LinearGradient>
          </View>
        </ImageBackground>
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
    backgroundColor: globalColors.CharcoalGray,
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.TransparentBlack,
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
    marginTop: 25,
  },
  sampleImage: {
    height: 230,
    width: 130,
    borderWidth: 3,
    borderColor: globalColors.PaleMint,
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
    color: globalColors.White,
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
    color: globalColors.SlateGray,
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
    borderColor: globalColors.JetBlack,
  },
  listItem: {
    fontWeight: '200',
    fontSize: 18,
    paddingLeft: 25,
    color: globalColors.White,
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
    borderColor: globalColors.White,
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
    backgroundColor: globalColors.Black,
    zIndex: 1,
  },
  transparentView: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: globalColors.SmokeGray,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
