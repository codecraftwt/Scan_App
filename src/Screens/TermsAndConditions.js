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
    paddingBottom: 60,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 22,
    color: globalColors.White,
    lineHeight: 25,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: globalColors.White,
    letterSpacing: 1.5,
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  middleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  termContainer: {
    marginTop: 30,
  },
  point: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: globalColors.White,
    letterSpacing: 1.5,
    textAlign: 'left',
    paddingHorizontal: 25,
  },
  subPoint: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: globalColors.LightGray,
    letterSpacing: 1.5,
    textAlign: 'left',
    paddingHorizontal: 25,
    marginTop: 10,
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
    zIndex: 1,
    backgroundColor: globalColors.Charcoal,
    width: '100%',
    height: '15%',
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: globalColors.MintGreen,
    marginTop: 25,
  },
  buttontext: {
    fontFamily: 'Supreme Variable, sans-serif',
    fontWeight: '700',
    fontSize: 16,
    color: globalColors.White,
    textTransform: 'uppercase',
    letterSpacing: 2.08,
  },
  transparentOverlay: {
    position: 'relative',
    height: 20,
    width: '100%',
    backgroundColor: globalColors.Charcoal,
    zIndex: 1,
    marginBottom: 50,
  },
  transparentView: {
    position: 'absolute',
    bottom: 50,
    height: 50,
    width: '100%',
    backgroundColor: globalColors.SmokeGray,
  },
});

export default TermsAndConditions;
