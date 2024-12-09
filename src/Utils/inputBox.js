import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {m} from 'walstar-rn-responsive';

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
    width: m(14),
    height: m(31),
  },
});
