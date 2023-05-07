import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../colors';

const MainTextInput = ({
  placeholderText,
  isRequired,
  isSecure,
  onChangeText,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        secureTextEntry={isSecure}
        style={styles.textInputStyle}
        placeholderTextColor={'gray'}
        cursorColor={colors.mainColor}
        placeholder={isRequired ? placeholderText + ' *' : placeholderText}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 50,
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
  textInputStyle: {color: 'white', marginLeft: 8, marginRight: 8},
});

export default MainTextInput;
