import React from 'react';
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
import {globalColors} from '../Assets/themes/globalColors';
import {m, w} from 'walstar-rn-responsive';

const splashBgImg = require('../Assets/images/splashScreenBg.png');
const logo = require('../Assets/images/logo.png');
const text = require('../Assets/images/text.png');

const SplashScreen = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={globalColors.Charcoal}
      />
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
            colors={[
              globalColors.TransparentBlack,
              globalColors.Charcoal,
              globalColors.Charcoal,
            ]}></LinearGradient>
        </ImageBackground>
        <View style={styles.bottomContainer}>
          <View style={styles.typeContainer}>
            <View style={styles.subtypeContainer}>
              <View style={styles.individualTypecontainer}>
                <Icon
                  name="checkmark-outline"
                  size={25}
                  color={globalColors.MintGreen}
                  style={styles.icon}
                />
                <Text style={styles.type1}>Chemicals</Text>
              </View>
              <View style={styles.individualTypecontainer}>
                <Icon
                  name="checkmark-outline"
                  size={25}
                  color={globalColors.MintGreen}
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
                  color={globalColors.MintGreen}
                  style={styles.icon}
                />
                <Text style={styles.type1}>Vegetarian</Text>
              </View>
              <View style={styles.individualTypecontainer}>
                <Icon
                  name="checkmark-outline"
                  size={25}
                  color={globalColors.MintGreen}
                  style={styles.icon}
                />
                <Text style={styles.type2}>Vegan</Text>
              </View>
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
    backgroundColor: globalColors.Charcoal,
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
    marginTop: m(70),
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: m(50),
  },
  SubtextContainer: {
    marginTop: m(50),
  },
  logo: {
    marginTop: m(15),
  },
  textLogo: {
    marginTop: m(20),
  },
  subText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: m(18),
    lineHeight: m(23),
    letterSpacing: m(0.36),
    color: globalColors.LightGray,
    textAlign: 'center',
    paddingHorizontal: m(30),
    marginTop: m(30),
    paddingBottom: m(20),
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
    color: globalColors.White,
    lineHeight: m(25),
    fontWeight: '700',
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: m(15),
  },
  button: {
    width: m(300),
    height: m(60),
    marginBottom: m(15),
    borderRadius: m(15),
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: globalColors.MintGreen,
  },
  buttontext: {
    fontFamily: 'Supreme Variable',
    fontWeight: '800',
    fontSize: m(16),
    color: globalColors.CharcoalGray,
    textTransform: 'uppercase',
    letterSpacing: m(2.08),
  },
  typesContainer: {
    justifyContent: 'center',
  },
  subtypeContainer: {
    flexDirection: 'row',
    marginBottom: m(25),
    marginLeft: w(5),
    justifyContent: 'flex-start',
    alignContent: 'center',
    width: '100%',
    paddingHorizontal: m(20),
  },
  type1: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: m(18),
    lineHeight: m(23),
    color: globalColors.White,
  },
  type2: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: m(18),
    lineHeight: m(23),
    color: globalColors.White,
  },
  icon: {
    paddingRight: m(10),
  },
  individualTypecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: m(20),
    justifyContent: 'center',
    width: 'auto',
  },
  typeContainer: {
    justifyContent: 'center',
    paddingBottom: m(25),
  },
});
