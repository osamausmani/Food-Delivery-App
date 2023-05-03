import React, {useRef} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  Animated,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {images} from '../components/images';

const SplashScreen = ({navigation}) => {
  nav = navigation;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar translucent backgroundColor="transparent" />

      <ImageBackground
        style={styles.mainBgContainer}
        source={images.mainBgImage}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}>
          <Image style={styles.mainLogo} source={images.mainLogo} />
        </Animated.View>
        {/* <Text style={styles.welcomeHeading}> Welcome to Food App </Text>
        <Text style={styles.welcomeMsg}>Thanks for downloading our app. </Text> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBgContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  mainLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 50,
  },
  welcomeHeading: {
    color: 'white',
    fontSize: 24,
    textTransform: 'uppercase',
  },
  welcomeMsg: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
});

export default SplashScreen;
