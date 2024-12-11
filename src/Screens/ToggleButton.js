import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {globalColors} from '../Assets/themes/globalColors';
import {m} from 'walstar-rn-responsive';

const ToggleButton = ({value, onValueChange}) => {
  const thumbAnim = useRef(new Animated.Value(value ? 1 : 0)).current;
  const [isOn, setIsOn] = useState(value);

  const toggleSwitch = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onValueChange(newValue);

    Animated.timing(thumbAnim, {
      toValue: newValue ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const thumbPosition = thumbAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-3, 23],
  });

  const trackColor = isOn ? globalColors.MintGreen : globalColors.DarkGray;
  const circleColour = isOn
    ? globalColors.White
    : globalColors.ExtremeLightGreay;

  return (
    <TouchableOpacity
      onPress={toggleSwitch}
      style={[styles.switchContainer, {backgroundColor: trackColor}]}>
      <Animated.View
        style={[
          styles.thumb,
          {
            backgroundColor: circleColour,
          },
          {
            transform: [{translateX: thumbPosition}],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  switchContainer: {
    width: m(64),
    height: m(38),
    borderRadius: m(20),
    justifyContent: 'center',
    backgroundColor: '#ccc',
    flexDirection: 'row',
    padding: m(2),
    display: 'flex',
    alignItems: 'center',
  },
  thumb: {
    width: m(26),
    height: m(26),
    borderRadius: m(14),
    position: 'relative',
    left: -10,
    backgroundColor: globalColors.White,
    shadowColor: globalColors.JetBlack,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
});
