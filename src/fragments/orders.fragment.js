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

const OrderFragment = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text>OrderFragment</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'green'},
});

export default OrderFragment;
