import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';

const InputBox = ({icon, borderColor}) => {
  return (
    <>
      <SvgXml xml={icon} style={styles.svgIcon} />
    </>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  svgIcon: {
    width: 14,
    height: 31,
  },
});
