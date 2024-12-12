import React, {useRef, useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
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
import {useSelector} from 'react-redux';

const mark = require('../Assets/images/Ellipse.png');
const markSymbol = require('../Assets/images/Vector.png');
const lineCircle = require('../Assets/images/LineCircle.png');
const line = require('../Assets/images/GroupLine.png');
const scanIcon = require('../Assets/images/scanicon.png');
const menuIcon = require('../Assets/images/menuicon.png');

const MatchScreen = ({navigation}) => {
  const route = useRoute();
  const {imageUrl, originalImageUrl} = route.params;

  const [highlightedRows, setHighlightedRows] = useState([
    String(1),
    String(2),
  ]);

  const ingredients = useSelector(
    state => state?.scandata?.scanData?.ingredients || [],
  );
  const harmfulIngredients = useSelector(
    state => state?.scandata?.scanData?.harmful_ingredients || [],
  );

  const hasHighRisk = harmfulIngredients.some(
    ingredient => ingredient.risk_level <= 3,
  );

  console.log(ingredients, 'ingredients');
  console.log(harmfulIngredients, 'harmfulIngredients');

  const handleScroll = event => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const rowHeight = 60;
    const visibleIndex = Math.floor(contentOffsetY / rowHeight);
    setHighlightedRows([String(visibleIndex + 1), String(visibleIndex + 2)]);
  };

  const renderIcon = () => {
    if (!harmfulIngredients || harmfulIngredients.length === 0) {
      return (
        <>
          <Image source={mark} style={styles.mark} />
          <Image source={markSymbol} style={styles.markSymbol} />
        </>
      );
    }

    if (hasHighRisk) {
      return (
        <>
          <Image source={lineCircle} style={styles.lineCircle} />
          <Image source={line} style={styles.line} />
        </>
      );
    }

    return (
      <>
        <Image source={crossCircle} style={styles.crossCircle} />
        <Image source={crossMark} style={styles.crossMark} />
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: globalColors.Charcoal}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={globalColors.Charcoal}
      />
      <View style={styles.fixedTopContainer}>
        {/* <TouchableOpacity onPress={() => navigation.DrawerNav()}> */}
        <Image source={menuIcon} style={styles.sidebar} />
        {/* </TouchableOpacity> */}
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.mainScroll}>
        <ImageBackground
          source={{uri: originalImageUrl}}
          style={styles.backgroundImage}
          resizeMode="cover"
          blurRadius={2}>
          <View style={styles.upperContainer}>
            <View style={styles.sampleImageContainer}>
              <Image
                source={{uri: imageUrl}}
                style={[
                  styles.sampleImage,
                  {
                    borderWidth: m(3),
                    borderColor:
                      !harmfulIngredients || harmfulIngredients.length == 0
                        ? globalColors.MintGreen
                        : hasHighRisk
                        ? globalColors.GoldenYellow
                        : globalColors.VividRed,
                  },
                ]}
              />
              <View style={styles.markContainer}>{renderIcon()}</View>
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
            {ingredients?.map((item, index) => {
              const rowId = String(index + 1);
              return (
                <View style={styles.row} key={item.id}>
                  <Text
                    style={[
                      styles.listItem,
                      highlightedRows.includes(rowId) &&
                        styles.topThreeListItem,
                    ]}>
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <LinearGradient
        colors={['transparent', globalColors.Charcoal]}
        style={styles.gradientOverlay}
      />
      <View style={styles.fixedButtonContainer}>
        <View style={styles.scanButtonView}>
          <Image source={scanIcon} style={styles.scanIcon} />
        </View>
      </View>
    </SafeAreaView>
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: globalColors.GunmetalGray,
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
  mainScroll: {
    flex: 1,
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
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    paddingBottom: m(80),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: m(22),
    color: globalColors.White,
    lineHeight: m(25),
    fontWeight: '700',
  },
  flatListView: {
    paddingHorizontal: m(0),
    paddingBottom: m(15),
    marginBottom: m(40),
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
    fontWeight: '400',
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
    marginBottom: m(10),
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
  mark: {
    width: m(120),
    height: m(120),
  },
  markSymbol: {
    position: 'absolute',
    bottom: m(38),
    right: m(27),
    width: m(35),
    height: m(40),
  },
  crossCircle: {
    width: m(120),
    height: m(120),
  },
  crossMark: {
    position: 'absolute',
    bottom: m(42),
    right: m(30),
    width: m(28),
    height: m(40),
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: m(100),
    zIndex: 2,
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: m(20),
    alignItems: 'center',
    alignItems: 'flex-end',
    zIndex: 2,
  },
  scanButtonView: {
    width: 80,
    height: 80,
    borderRadius: 67,
    backgroundColor: globalColors.JetBlack,
    marginBottom: 15,
    marginRight: 10,
  },
  scanIcon: {
    position: 'relative',
    bottom: m(-22),
    right: m(-24),
    width: m(30),
    height: m(35),
  },
  fixedTopContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: m(20),
    alignItems: 'center',
    alignItems: 'flex-end',
    zIndex: 2,
  },
  sidebar: {
    position: 'relative',
    width: m(22),
    height: m(25),
  },
});
