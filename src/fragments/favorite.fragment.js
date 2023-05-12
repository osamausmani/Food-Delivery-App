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

const FavoriteFragment = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text>FavFragment</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'yellow'},
});

export default FavoriteFragment;
