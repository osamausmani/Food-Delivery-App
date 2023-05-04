import React, {useRef} from 'react';
import {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const UserSignUpScreen = ({navigation}) => {
  nav = navigation;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text>SignUpScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default UserSignUpScreen;
