import React, {useRef} from 'react';
import {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const UserSignInScreen = ({navigation}) => {
  nav = navigation;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text>SignInScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default UserSignInScreen;
