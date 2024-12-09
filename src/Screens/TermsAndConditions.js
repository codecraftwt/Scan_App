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
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {globalColors} from '../Assets/themes/globalColors';
import {m} from 'walstar-rn-responsive';

const TermsAndConditions = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={globalColors.Charcoal}
      />
      <SafeAreaView style={{flex: 1, backgroundColor: globalColors.Charcoal}}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Terms & Conditions</Text>
            <Text style={styles.subtitle}>Last Updated: November 10, 2024</Text>
          </View>
          <View style={styles.middleContainer}>
            <View style={styles.termContainer}>
              <Text style={styles.point}>1. Acceptance of Terms</Text>
              <Text style={styles.subPoint}>
                By downloading or using the ScanAware (the “App”), you agree to
                these Terms and Conditions (“Terms”) in full. If you do not
                agree with any part of these Terms, you must not use the App.
              </Text>
            </View>
            <View style={styles.termContainer}>
              <Text style={styles.point}>
                2. Disclaimer of Medical and Nutritional Advice
              </Text>
              <Text style={styles.subPoint}>
                The information provided by ScanAware is intended solely for
                informational and entertainment purposes. It should not be
                relied upon as a factual source for making dietary or
                health-related decisions. This App is not a substitute for
                professional medical, nutritional, or dietary advice. The App
                scans and interprets ingredient labels on food, personal care-
                and household products but does not guarantee accuracy or
                completeness of the information provided. Always consult with a
                qualified healthcare professional before making any decisions
                regarding your diet or health.
              </Text>
            </View>
            <View style={styles.termContainer}>
              <Text style={styles.point}>3. Limitation of Liability</Text>
              <Text style={styles.subPoint}>
                By using ScanAware, you agree that we, the developers and
                operators of the App, shall not be held liable for any damages,
                injuries, or health complications that may arise from the use or
                misuse of the App. The App's information should not be relied
                upon as the sole basis for dietary decisions. We disclaim all
                warranties, express or implied, regarding the accuracy or
                reliability of the data presented.
              </Text>
            </View>
            <View style={styles.termContainer}>
              <Text style={styles.point}>4. User Responsibility</Text>
              <Text style={styles.subPoint}>
                Users of the App acknowledge that any information provided by
                the App is to be verified independently. We encourage users to
                read food labels carefully and consult official sources or
                professionals for critical dietary or allergy-related
                information.
              </Text>
            </View>
            <View style={styles.termContainer}>
              <Text style={styles.point}>5. No Warranty</Text>
              <Text style={styles.subPoint}>
                ScanAware is provided “as-is,” without any warranties of any
                kind, either express or implied. We do not guarantee that the
                App will be free from errors, bugs, or inaccuracies, and we are
                not responsible for any incorrect or incomplete information
                displayed in the App.
              </Text>
            </View>
            <View style={styles.termContainer}>
              <Text style={styles.point}>6. Changes to Terms</Text>
              <Text style={styles.subPoint}>
                We reserve the right to modify these Terms at any time. By
                continuing to use the App after changes are made, you agree to
                be bound by the revised Terms.
              </Text>
            </View>
            <View style={styles.termContainer}>
              <Text style={styles.point}>Contact Us</Text>
              <Text style={styles.subPoint}>
                If you have any questions or concerns about these Terms, please
                contact us at support@scanaware.app
              </Text>
            </View>
          </View>
        </ScrollView>

        <LinearGradient
          colors={['transparent', globalColors.Charcoal]} // Gradient from transparent to the background color
          style={styles.gradientOverlay}
        />
        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('profile')}>
            <Text style={styles.buttontext}>I AGREE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.Charcoal,
    paddingBottom: m(120),
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
    color: globalColors.LightGray,
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
  gradientOverlay: {
    position: 'absolute',
    bottom: '15%',
    left: 0,
    right: 0,
    height: m(60),
    zIndex: 2,
  },
});

export default TermsAndConditions;
