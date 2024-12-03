import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  ScrollView,
} from 'react-native';
import {globalColors} from '../Assets/themes/globalColors';
import { m } from 'walstar-rn-responsive';

const TermsAndConditions = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={globalColors.Charcoal}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Terms & Conditions</Text>
          <Text style={styles.subtitle}>
            ScanAware is provided for entertainment and informational purposes
            only. 
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.termContainer}>
            <Text style={styles.point}>1. Acceptance of Terms</Text>
            <Text style={styles.subPoint}>
              By downloading or using the Noxic (the “App”), you agree to these
              Terms and Conditions (“Terms”) in full. If you do not agree with
              any part of these Terms, you must not use the App.
            </Text>
          </View>
          <View style={styles.termContainer}>
            <Text style={styles.point}>
              2. Disclaimer of Medical and Nutritional Advice
            </Text>
            <Text style={styles.subPoint}>
              By downloading or using the Noxic (the “App”), you agree to these
              Terms and Conditions (“Terms”) in full. If you do not agree with
              any part of these Terms, you must not use the App.
            </Text>
          </View>
          <View style={styles.termContainer}>
            <Text style={styles.point}>
              2. Disclaimer of Medical and Nutritional Advice
            </Text>
            <Text style={styles.subPoint}>
              By downloading or using the Noxic (the “App”), you agree to these
              Terms and Conditions (“Terms”) in full. If you do not agree with
              any part of these Terms, you must not use the App.
            </Text>
          </View>
          <View style={styles.termContainer}>
            <Text style={styles.point}>
              2. Disclaimer of Medical and Nutritional Advice
            </Text>
            <Text style={styles.subPoint}>
              By downloading or using the Noxic (the “App”), you agree to these
              Terms and Conditions (“Terms”) in full. If you do not agree with
              any part of these Terms, you must not use the App.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.transparentOverlay}>
        <View style={styles.transparentView}></View>
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('cameraScreen')}>
          <Text style={styles.buttontext}>I AGREE</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.Charcoal,
    paddingBottom: m(60),
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: m(50),
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: m(22),
    color: globalColors.White,
    lineHeight: m(25),
  },
  subtitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: m(16),
    lineHeight: m(22),
    color: globalColors.White,
    letterSpacing: m(1.5),
    marginTop: m(30),
    marginBottom: m(10),
    textAlign: 'center',
    paddingHorizontal: m(20),
  },
  middleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: m(30),
  },
  termContainer: {
    marginTop: m(30),
  },
  point: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: m(16),
    lineHeight: m(24),
    color: globalColors.White,
    letterSpacing: m(1.5),
    textAlign: 'left',
    paddingHorizontal: m(25),
  },
  subPoint: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: m(16),
    lineHeight: m(20),
    color: globalColors.LightGray,
    letterSpacing: m(1.5),
    textAlign: 'left',
    paddingHorizontal: m(25),
    marginTop: m(12),
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: m(12),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: m(20),
    zIndex: 1,
    backgroundColor: globalColors.Charcoal,
    width: '100%',
    height: '15%',
  },
  button: {
    width: m(300),
    height: m(60),
    borderRadius: m(15),
    borderWidth: m(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: globalColors.MintGreen,
    marginTop: m(25),
  },
  buttontext: {
    fontFamily: 'Supreme Variable, sans-serif',
    fontWeight: '700',
    fontSize: m(16),
    color: globalColors.White,
    textTransform: 'uppercase',
    letterSpacing: 2.08,
  },
  transparentOverlay: {
    position: 'relative',
    height: m(20),
    width: '100%',
    backgroundColor: globalColors.Charcoal,
    zIndex: 1,
    marginBottom: m(50),
  },
  transparentView: {
    position: 'absolute',
    bottom: m(30),
    height: m(50),
    width: '100%',
    backgroundColor: globalColors.SmokeGray,
  },
});

export default TermsAndConditions;
