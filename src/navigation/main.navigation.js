import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash.screen';
import UserSignUpScreen from '../screens/user/user.signup.screen';
import UserSignInScreen from '../screens/user/user.signin.screen';
import LocationSetScreen from '../screens/location.set.screen';
import HomeScreen from '../screens/home.screen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UserSignUpScreen"
          component={UserSignUpScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UserSignInScreen"
          component={UserSignInScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LocationSetScreen"
          component={LocationSetScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
