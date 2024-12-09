import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {globalColors} from '../Assets/themes/globalColors';
import { m } from 'walstar-rn-responsive';

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
    outputRange: [2, 20],
  });

  const trackColor = isOn ? globalColors.MintGreen : globalColors.DarkGray;
  const circleColour =isOn? globalColors.White : globalColors.ExtremeLightGreay;

  return (
    <TouchableOpacity
      onPress={toggleSwitch}
      style={[styles.switchContainer, {backgroundColor: trackColor}]}>
      <Animated.View
        style={[
          styles.thumb,
          {
            backgroundColor: circleColour
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
    width: m(68),
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
    width: m(28),
    height: m(28),
    borderRadius: m(14),
    position: 'realtive',
    left: -10,
  },
});
