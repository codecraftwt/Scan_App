import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {globalColors} from '../Assets/themes/globalColors';
import {m} from 'walstar-rn-responsive';
import ToggleButton from './ToggleButton';
import {SvgXml} from 'react-native-svg';
import {Fish} from '../Assets/allergens_icons/fish';
import {Milk} from '../Assets/allergens_icons/milk';
import {Egg} from '../Assets/allergens_icons/egg';
import {Peanut} from '../Assets/allergens_icons/peanut';
import {Gluten} from '../Assets/allergens_icons/gluten';
import {Soy} from '../Assets/allergens_icons/soy';
import {Shellfish} from '../Assets/allergens_icons/shellfish';
import {Tree_nut} from '../Assets/allergens_icons/tree_nut';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={globalColors.JetBlack}
      />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Your profile</Text>
          <Text style={styles.subtext}>
            ScanAware will alert you if it finds ingredients that matches these
            preferences.
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.middleContainer}>
            <View style={[styles.typeContainer, styles.row]}>
              <Text style={styles.type}>Chemicals</Text>
              <ToggleButton value={isSwitchOn} onValueChange={setIsSwitchOn} />
            </View>
            <View style={styles.mainBoxContaniner}>
              <View style={{paddingVertical: 20}}>
                <View style={[styles.typeContainer2]}>
                  <Text style={styles.type}>Allergens</Text>
                  <ToggleButton
                    value={isSwitchOn}
                    onValueChange={setIsSwitchOn}
                  />
                </View>
                <View style={styles.unitBox}>
                  <View style={styles.boxContainer}>
                    <View style={styles.boxstyle}>
                      <SvgXml xml={Milk} style={styles.svgIcon} />
                    </View>
                    <View
                      style={[
                        styles.boxstyle,
                        {borderColor: globalColors.MintGreen},
                      ]}>
                      <SvgXml xml={Egg} style={styles.svgIcon} />
                    </View>
                    <View style={styles.boxstyle}>
                      <SvgXml xml={Peanut} style={styles.svgIcon} />
                    </View>
                    <View style={styles.boxstyle}>
                      <SvgXml xml={Gluten} style={styles.svgIcon} />
                    </View>
                  </View>
                  <View style={styles.boxContainer}>
                    <View style={styles.boxstyle}>
                      <SvgXml xml={Fish} style={styles.svgIcon} />
                    </View>
                    <View style={styles.boxstyle}>
                      <SvgXml xml={Soy} style={styles.svgIcon} />
                    </View>
                    <View style={styles.boxstyle}>
                      <SvgXml xml={Shellfish} style={styles.svgIcon} />
                    </View>
                    <View style={styles.boxstyle}>
                      <SvgXml xml={Tree_nut} style={styles.svgIcon} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.typeContainer, styles.row]}>
              <Text style={styles.type}>Vegan</Text>
              <ToggleButton value={isSwitchOn} onValueChange={setIsSwitchOn} />
            </View>
            <View style={[styles.typeContainer, styles.row]}>
              <Text style={styles.type}>Vegetarian</Text>
              <ToggleButton value={isSwitchOn} onValueChange={setIsSwitchOn} />
            </View>
          </View>
        </ScrollView>
        <LinearGradient
          colors={['transparent', globalColors.Charcoal]} // Gradient from transparent to the background color
          style={styles.gradientOverlay}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <Text style={styles.textButton}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('cameraScreen')}>
            <Text style={styles.buttontext}>Save profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.Charcoal,
  },
  scrollContainer: {
    paddingTop: 180,
    paddingBottom: 150,
  },
  middleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 50,
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 25,
    paddingVertical: 30,
    zIndex: 1,
    backgroundColor: globalColors.JetBlack,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: 22,
    lineHeight: 25,
    color: globalColors.White,
    paddingBottom: 10,
  },
  subtext: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: globalColors.LightGray,
    letterSpacing: 0.32,
    paddingRight: '20%',
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  typeContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  row: {
    height: m(75),
    width: Dimensions.get('window').width,
    borderTopWidth: m(1),
    borderBottomWidth: m(1),
    borderColor: globalColors.JetBlack,
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainBoxContaniner: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  type: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    color: globalColors.SilverGray,
    letterSpacing: 0.36,
  },
  unitBox: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  boxstyle: {
    height: 74,
    width: 74,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: globalColors.White,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    paddingTop: 20,
    position: 'absolute',
    bottom: 30,
    backgroundColor: globalColors.Charcoal,
    width: '100%',
  },
  textButton: {
    fontFamily: 'Supreme Variable',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21,
    color: globalColors.White,
    marginRight: 15,
    letterSpacing: 2.08,
    paddingLeft:30
  },
  button: {
    width: m(200),
    height: m(60),
    borderRadius: m(15),
    borderWidth: m(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: globalColors.MintGreen,
    marginLeft: 40,
  },
  buttontext: {
    fontFamily: 'Supreme Variable, sans-serif',
    fontWeight: '700',
    fontSize: m(16),
    color: globalColors.White,
    textTransform: 'uppercase',
    letterSpacing: 2.08,
  },
  trueButton: {
    width: 70,
    height: 38,
  },
  svgIcon: {
    width: 14,
    height: 31,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: '15%',
    left: 0,
    right: 0,
    height: m(50),
    zIndex: 2,
  },
});
