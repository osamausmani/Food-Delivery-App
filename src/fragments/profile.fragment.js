import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const ProfileFragment = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text>ProfileFragment</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'yellow'},
});

export default ProfileFragment;
