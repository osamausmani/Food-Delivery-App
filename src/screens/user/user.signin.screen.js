import React, {useRef, useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';

import {images} from '../../components/images';
import MainTextInput from '../../components/textinput/main.textinput';
import MainButton from '../../components/buttons/main.button';

const UserSignInScreen = ({navigation}) => {
  nav = navigation;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSignIn() {
    var validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validEmailRegex)) {
      Alert.alert('You email is invalid.');
    } else if (password.length < 8) {
      Alert.alert('You password is invalid.');
    } else {
      Alert.alert('Sucess');
    }
  }

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.mainBgContainer}
        source={images.loginBgImage}>
        <View style={styles.contentContainer}>
          <Image style={styles.mainLogo} source={images.logoSmall} />
          <Text style={styles.welcomeHeading}> Welcome to Food App </Text>
          <Text style={styles.welcomeMsg}>
            Thanks for downloading our app.{' '}
          </Text>

          <View style={styles.inputContainer}>
            <MainTextInput
              placeholderText={'Email Address'}
              isRequired={true}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <MainTextInput
              placeholderText={'Password'}
              isRequired={true}
              isSecure={true}
              onChangeText={text => setPassword(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <MainButton
              buttonLabel={'Sign In'}
              onPress={() => handleSignIn()}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
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
    width: 30,
    height: 30,
    marginBottom: 30,
  },
  contentContainer: {
    width: '100%',
    top: '25%',
    alignItems: 'center',
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
  inputContainer: {
    width: '90%',
    marginTop: 10,
  },
  buttonContainer: {
    width: '90%',
    marginTop: 30,
  },
});

export default UserSignInScreen;
