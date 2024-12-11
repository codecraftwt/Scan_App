import {
  Dimensions,
  SafeAreaView,
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
import {Fish} from '../Assets/allergens_icons/fish';
import {Milk} from '../Assets/allergens_icons/milk';
import {Egg} from '../Assets/allergens_icons/egg';
import {Peanut} from '../Assets/allergens_icons/peanut';
import {Gluten} from '../Assets/allergens_icons/gluten';
import {Soy} from '../Assets/allergens_icons/soy';
import {Shellfish} from '../Assets/allergens_icons/shellfish';
import {Tree_nut} from '../Assets/allergens_icons/tree_nut';
import LinearGradient from 'react-native-linear-gradient';
import InputBox from '../Utils/inputBox';

const Profile = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isSelected, setSelectedAllergens] = useState({
    milk: false,
    egg: false,
    peanut: false,
    gluten: false,
    fish: false,
    soy: false,
    shellfish: false,
    treeNut: false,
  });

  const handlePress = allergen => {
    setSelectedAllergens(prevState => ({
      ...prevState,
      [allergen]: !prevState[allergen],
    }));
  };

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={
            isScrolling ? globalColors.JetBlack : globalColors.Charcoal
          }
        />
        <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.container}>
            <View
              style={[
                styles.topContainer,
                isScrolling
                  ? {
                      backgroundColor: globalColors.JetBlack,
                      ...styles.shadowStyle,
                    }
                  : {backgroundColor: globalColors.Charcoal},
              ]}>
              <Text style={styles.title}>Your profile</Text>
              <Text style={styles.subtext}>
                ScanAware will alert you if it finds ingredients that matches
                these preferences.
              </Text>
            </View>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              onScroll={handleScroll}
              scrollEventThrottle={16}>
              <View style={styles.middleContainer}>
                <View style={[styles.typeContainer, styles.row]}>
                  <Text style={styles.type}>Chemicals</Text>
                  <ToggleButton
                    value={isSwitchOn}
                    onValueChange={setIsSwitchOn}
                  />
                </View>
                <View style={styles.mainBoxContaniner}>
                  <View style={{paddingVertical: 20}}>
                    <View style={[styles.typeContainer2]}>
                      <Text style={styles.type}>Vegetarian</Text>
                      <ToggleButton
                        value={isSwitchOn}
                        onValueChange={setIsSwitchOn}
                      />
                    </View>
                    <View style={styles.unitBox}>
                      <View style={styles.boxContainer}>
                        <TouchableOpacity onPress={() => handlePress('milk')}>
                          <View style={styles.foodContainer}>
                            <View
                              style={[
                                styles.boxstyle,
                                {
                                  borderColor: isSelected.milk
                                    ? globalColors.MintGreen
                                    : globalColors.DarkGray,
                                },
                              ]}>
                              <InputBox icon={Milk} />
                            </View>
                            <Text
                              style={[
                                styles.foodName,
                                {
                                  color: isSelected.milk
                                    ? globalColors.White
                                    : globalColors.MediumGray,
                                },
                              ]}>
                              Milk
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePress('egg')}>
                          <View style={styles.foodContainer}>
                            <View
                              style={[
                                styles.boxstyle,
                                {
                                  borderColor: isSelected.egg
                                    ? globalColors.MintGreen
                                    : globalColors.DarkGray,
                                },
                              ]}>
                              <InputBox icon={Egg} />
                            </View>
                            <Text
                              style={[
                                styles.foodName,
                                {
                                  color: isSelected.egg
                                    ? globalColors.White
                                    : globalColors.MediumGray,
                                },
                              ]}>
                              Egg
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePress('peanut')}>
                          <View style={styles.foodContainer}>
                            <View
                              style={[
                                styles.boxstyle,
                                {
                                  borderColor: isSelected.peanut
                                    ? globalColors.MintGreen
                                    : globalColors.DarkGray,
                                },
                              ]}>
                              <InputBox icon={Peanut} />
                            </View>
                            <Text
                              style={[
                                styles.foodName,
                                {
                                  color: isSelected.peanut
                                    ? globalColors.White
                                    : globalColors.MediumGray,
                                },
                              ]}>
                              Peanut
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePress('gluten')}>
                          <View style={styles.foodContainer}>
                            <View
                              style={[
                                styles.boxstyle,
                                {
                                  borderColor: isSelected.gluten
                                    ? globalColors.MintGreen
                                    : globalColors.DarkGray,
                                },
                              ]}>
                              <InputBox icon={Gluten} />
                            </View>
                            <Text
                              style={[
                                styles.foodName,
                                {
                                  color: isSelected.gluten
                                    ? globalColors.White
                                    : globalColors.MediumGray,
                                },
                              ]}>
                              Gluten
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.boxContainer}>
                        <TouchableOpacity onPress={() => handlePress('fish')}>
                          <View style={styles.foodContainer}>
                            <View
                              style={[
                                styles.boxstyle,
                                {
                                  borderColor: isSelected.fish
                                    ? globalColors.MintGreen
                                    : globalColors.DarkGray,
                                },
                                ,
                              ]}>
                              <InputBox icon={Fish} />
                            </View>
                            <Text
                              style={[
                                styles.foodName,
                                {
                                  color: isSelected.fish
                                    ? globalColors.White
                                    : globalColors.MediumGray,
                                },
                              ]}>
                              Fish
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePress('soy')}>
                          <View style={styles.foodContainer}>
                            <View
                              style={[
                                styles.boxstyle,
                                {
                                  borderColor: isSelected.soy
                                    ? globalColors.MintGreen
                                    : globalColors.DarkGray,
                                },
                              ]}>
                              <InputBox icon={Soy} />
                            </View>
                            <Text
                              style={[
                                styles.foodName,
                                {
                                  color: isSelected.soy
                                    ? globalColors.White
                                    : globalColors.MediumGray,
                                },
                              ]}>
                              Soy
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handlePress('shellfish')}>
                          <View style={styles.foodContainer}>
                            <View
                              style={[
                                styles.boxstyle,
                                {
                                  borderColor: isSelected.shellfish
                                    ? globalColors.MintGreen
                                    : globalColors.DarkGray,
                                },
                              ]}>
                              <InputBox icon={Shellfish} />
                            </View>
                            <Text
                              style={[
                                styles.foodName,
                                {
                                  color: isSelected.shellfish
                                    ? globalColors.White
                                    : globalColors.MediumGray,
                                },
                              ]}>
                              Shellfish
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handlePress('treeNut')}>
                          <View style={styles.foodContainer}>
                            <View
                              style={[
                                styles.boxstyle,
                                {
                                  borderColor: isSelected.treeNut
                                    ? globalColors.MintGreen
                                    : globalColors.DarkGray,
                                },
                              ]}>
                              <InputBox icon={Tree_nut} />
                            </View>
                            <Text
                              style={[
                                styles.foodName,
                                {
                                  color: isSelected.treeNut
                                    ? globalColors.White
                                    : globalColors.MediumGray,
                                },
                              ]}>
                              Tree Nut
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.typeContainer, styles.row]}>
                  <Text style={styles.type}>Vegan</Text>
                  <ToggleButton
                    value={isSwitchOn}
                    onValueChange={setIsSwitchOn}
                  />
                </View>
                <View style={[styles.typeContainer, styles.row]}>
                  <Text style={styles.type}>Allergens</Text>
                  <ToggleButton
                    value={isSwitchOn}
                    onValueChange={setIsSwitchOn}
                  />
                </View>
              </View>
            </ScrollView>
            <LinearGradient
              colors={['transparent', globalColors.Charcoal]}
              style={styles.gradientOverlay}
            />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('cameraScreen')}>
                <Text style={styles.textButton}>SKIP</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('cameraScreen')}>
                <Text style={styles.buttontext}>Save profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: globalColors.JetBlack,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.Charcoal,
  },
  scrollContainer: {
    paddingTop: m(160),
    paddingBottom: m(150),
  },
  middleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: m(50),
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: m(25),
    paddingVertical: m(30),
    zIndex: 1,
    transition: 'background-color 0.2s ease',
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: m(22),
    lineHeight: m(25),
    color: globalColors.White,
    paddingBottom: m(10),
  },
  subtext: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: m(16),
    lineHeight: m(20),
    color: globalColors.LightGray,
    letterSpacing: 0.32,
    paddingRight: '20%',
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: m(25),
  },
  typeContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: m(15),
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
    fontSize: m(18),
    lineHeight: m(24),
    color: globalColors.SilverGray,
    letterSpacing: m(0.36),
  },
  unitBox: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: m(10),
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: m(8),
    width: '100%',
  },
  boxstyle: {
    height: m(74),
    width: m(74),
    borderRadius: m(13),
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: m(0),
    backgroundColor: globalColors.Charcoal,
    width: '100%',
    height: '15%',
  },
  textButton: {
    fontFamily: 'Supreme Variable',
    fontWeight: '700',
    fontSize: m(16),
    lineHeight: m(21),
    color: globalColors.White,
    marginRight: m(15),
    letterSpacing: m(2.08),
    paddingLeft: m(30),
  },
  button: {
    width: m(200),
    height: m(60),
    borderRadius: m(15),
    borderWidth: m(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: globalColors.MintGreen,
    marginLeft: m(40),
  },
  buttontext: {
    fontFamily: 'Supreme Variable, sans-serif',
    fontWeight: '700',
    fontSize: m(16),
    color: globalColors.White,
    textTransform: 'uppercase',
    letterSpacing: m(2.08),
  },
  trueButton: {
    width: m(70),
    height: m(38),
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: '15%',
    left: 0,
    right: 0,
    height: m(50),
    zIndex: 1,
    // backgroundColor:'blue'
  },
  foodContainer: {
    alignItems: 'center',
  },
  foodName: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.24,
    color: globalColors.MediumGray,
    paddingTop: 10,
  },
});
