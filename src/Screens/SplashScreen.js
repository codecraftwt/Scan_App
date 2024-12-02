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
import Icon from 'react-native-vector-icons/Ionicons';

const splashBgImg = require('../Assets/images/splashScreenBg.png');
const logo = require('../Assets/images/logo.png');
const text = require('../Assets/images/text.png');

const SplashScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={splashBgImg}
          style={styles.backgroundImage}
          resizeMode="cover"
          //   blurRadius={2}
        >
          <View style={styles.upperContainer}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
              <Image source={text} style={styles.textLogo} />
            </View>
            <View style={styles.SubtextContainer}>
              <Text style={styles.subText}>
                Simply scan the label of any food, household or personal care
                product. In any language.
              </Text>
            </View>
          </View>
          <LinearGradient
            colors={['#000000c0', '#161616', '#161616']}></LinearGradient>
        </ImageBackground>
        <View style={styles.bottomContainer}>
          <View style={styles.subtypeContainer}>
            <View style={styles.individualTypecontainer}>
              <Icon
                name="checkmark-outline"
                size={25}
                color="rgba(131, 255, 180, 1)"
                style={styles.icon}
              />
              <Text style={styles.type1}>Chemicals</Text>
            </View>
            <View style={styles.individualTypecontainer}>
              <Icon
                name="checkmark-outline"
                size={25}
                color="rgba(131, 255, 180, 1)"
                style={styles.icon}
              />
              <Text style={styles.type2}>Allergens</Text>
            </View>
          </View>
          <View style={styles.subtypeContainer}>
            <View style={styles.individualTypecontainer}>
              <Icon
                name="checkmark-outline"
                size={25}
                color="rgba(131, 255, 180, 1)"
                style={styles.icon}
              />
              <Text style={styles.type1}>Vegetarian</Text>
            </View>
            <View style={styles.individualTypecontainer}>
              <Icon
                name="checkmark-outline"
                size={25}
                color="rgba(131, 255, 180, 1)"
                style={styles.icon}
              />
              <Text style={styles.type2}>Vegan</Text>
            </View>
          </View>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('terms&consitions')}>
              <Text style={styles.buttontext}>Get started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161616',
  },
  backgroundImage: {
    flex: 2,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#161616',
    marginTop: 70,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  SubtextContainer: {
    marginTop: 60,
  },
  logo: {
    marginTop: 15,
  },
  textLogo: {
    marginTop: 20,
  },
  subText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 23,
    letterSpacing: 0.36,
    color: 'rgba(176, 176, 176, 1)',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 22,
    color: '#FFFFFF',
    lineHeight: 25,
    fontWeight: '700',
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  button: {
    width: 300,
    height: 60,
    marginBottom: 15,
    borderRadius: 15,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(131, 255, 180, 1)',
  },
  buttontext: {
    fontFamily: 'Supreme Variable, sans-serif',
    fontWeight: '800',
    fontSize: 16,
    color: 'rgba(22, 22, 22, 1)',
    textTransform: 'uppercase',
    letterSpacing: 2.08,
  },
  typesContainer: {
    justifyContent: 'center',
  },
  subtypeContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    marginLeft: 100,
    justifyContent: 'flex-start',
    alignContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  type1: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 23,
    color: 'rgba(255, 255, 255, 1)',
  },
  type2: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 23,
    color: 'rgba(255, 255, 255, 1)',
  },
  icon: {
    paddingRight: 10,
  },
  individualTypecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    justifyContent: 'center',
    width: 'auto',
  },
});
