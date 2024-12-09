import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {globalColors} from '../Assets/themes/globalColors';

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
    width: 68,
    height: 38,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#ccc',
    flexDirection: 'row',
    padding: 2,
    display: 'flex',
    alignItems: 'center',
  },
  thumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    // backgroundColor: '#fff',
    position: 'realtive',
    left: -10,
  },
});
