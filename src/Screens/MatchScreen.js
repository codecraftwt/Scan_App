import React, {useRef, useState, useEffect} from 'react';
import {
  Dimensions,
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
import {globalColors} from '../Assets/themes/globalColors';
import {useRoute} from '@react-navigation/native';
import {m} from 'walstar-rn-responsive';
import {useDispatch, useSelector} from 'react-redux';
import {scanInfo} from '../Redux/slices/ScanSlice';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

const lineCircle = require('../Assets/images/LineCircle.png');
const line = require('../Assets/images/GroupLine.png');
const bgScreenImage = require('../Assets/images/bgScreenImg.png');

const MatchScreen = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {imageUrl, originalImageUrl} = route.params;

  const [highlightedRows, setHighlightedRows] = useState([
    String(1),
    String(2),
  ]);
  const scrollViewRef = useRef(null);

  const ingredients = useSelector(
    state => state?.scandata?.scanData?.ingredients,
  );

  console.log(ingredients, 'ingredients');

  const handleScroll = event => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const rowHeight = 60;
    const visibleIndex = Math.floor(contentOffsetY / rowHeight);
    setHighlightedRows([String(visibleIndex + 1), String(visibleIndex + 2)]);
  };

  useEffect(() => {
    const uploadImage = async () => {
      console.log(imageUrl, '<=== imageUrl');
      if (imageUrl) {
        try {
          const fileExists = await RNFetchBlob.fs.exists(imageUrl);
          if (!fileExists) {
            console.error('File not found');
            return;
          }
          const imageBase64 = await RNFetchBlob.fs.readFile(imageUrl, 'base64');
          const fileObject = {
            uri: imageUrl,
            name: 'image.jpg',
            type: 'image/jpeg', // You can change the MIME type (e.g., image/png for PNG files)
          };

          console.log(fileObject, '<=== fileObject');

          const formData = new FormData();
          formData.append('file', fileObject);

          dispatch(scanInfo(formData));
        } catch (error) {
          console.error('Error converting image URL to file:', error);
        }
      }
    };
    uploadImage();
  }, [dispatch, imageUrl]);

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
                <Image source={lineCircle} style={styles.lineCircle} />
                <Image source={line} style={styles.line} />
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>This product contains a</Text>
              <Text style={styles.title}>flagged ingredient.</Text>
            </View>
          </View>
          <LinearGradient
            colors={[
              globalColors.TransparentBlack,
              globalColors.Charcoal,
              globalColors.Charcoal,
            ]}>
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
          </LinearGradient>
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
                    {item}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.transparentOverlay}>
            <View style={styles.transparentView}></View>
          </View>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('matchRejectedScreen', {
                  imageUrl: imageUrl,
                  originalImageUrl: originalImageUrl,
                })
              }>
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.Charcoal,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.TransparentBlack,
  },
  sampleImageContainer: {
    position: 'relative',
    marginTop: m(25),
  },
  sampleImage: {
    height: m(230),
    width: m(130),
    borderWidth: m(3),
    borderColor: globalColors.GoldenYellow,
    borderRadius: m(24),
  },
  markContainer: {
    position: 'absolute',
    bottom: m(-50),
    right: m(-48),
  },
  lineCircle: {
    width: m(120),
    height: m(120),
  },
  line: {
    position: 'absolute',
    bottom: m(38),
    right: m(30),
    width: m(28),
    height: m(40),
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: m(22),
    color: globalColors.White,
    lineHeight: m(25),
    fontWeight: '700',
  },
  flatListView: {
    height: m(225),
  },
  listTitle: {
    paddingLeft: m(25),
    paddingBottom: m(15),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: m(13),
    color: globalColors.SlateGray,
    alignItems: 'flex-start',
    textTransform: 'uppercase',
    letterSpacing: m(4.14),
  },
  row: {
    height: m(60),
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    borderTopWidth: m(1),
    borderBottomWidth: m(1),
    borderColor: globalColors.JetBlack,
  },
  listItem: {
    fontWeight: '200',
    fontSize: m(18),
    paddingLeft: m(25),
    color: globalColors.White,
    alignItems: 'flex-start',
    letterSpacing: m(1.8),
  },
  topThreeListItem: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: m(18),
    paddingLeft: m(25),
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: m(15),
  },
  button: {
    width: m(315),
    height: m(60),
    marginBottom: m(15),
    borderRadius: m(15),
    borderColor: globalColors.White,
    borderWidth: m(2),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttontext: {
    fontFamily: 'Supreme Variable, sans-serif',
    fontWeight: '700',
    fontSize: m(16),
    color: globalColors.White,
    textTransform: 'uppercase',
    letterSpacing: m(2.08),
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: m(38),
  },
  transparentOverlay: {
    position: 'relative',
    height: m(20),
    width: '100%',
    backgroundColor: globalColors.Black,
    zIndex: 1,
  },
  transparentView: {
    position: 'absolute',
    bottom: 0,
    height: m(50),
    width: '100%',
    backgroundColor: globalColors.SmokeGray,
  },
  cardDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: m(15),
    paddingBottom: m(30),
    paddingHorizontal: m(15),
  },
  cardContainer: {
    width: m(350),
    borderRadius: m(8),
    backgroundColor: globalColors.TransparentCharcoal,
    marginTop: m(10),
    // padding: m(15),
    paddingVertical: m(25),
    paddingHorizontal: m(15),
    minHeight: m(60),
  },
  cardTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: m(14),
    lineHeight: m(17),
    letterSpacing: m(2.5),
    color: globalColors.PaleGold,
    textTransform: 'uppercase',
    marginBottom: m(10),
    textAlign: 'center',
  },
  cardPara: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: m(16),
    lineHeight: m(21),
    letterSpacing: 0.32,
    color: globalColors.PaleGray,
    paddingHorizontal: m(10),
    alignSelf: 'flex-start',
    textAlign: 'left',
    flexWrap: 'wrap',
    width: '100%',
  },
});
