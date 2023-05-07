import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../colors';

const MainButton = ({buttonLabel, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}> {buttonLabel} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.mainColor,
    width: '100%',
    height: 50,
    marginBottom: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default MainButton;
