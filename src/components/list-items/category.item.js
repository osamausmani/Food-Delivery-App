import {React, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../colors';

const CategoryItem = ({item}) => (
  console.log(item),
  (
    <TouchableOpacity activeOpacity={0.9} style={styles.mainContainer}>
      <View style={styles.itemImageView}>
        <Image style={styles.itemImage} source={item.catImage} />
      </View>
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  )
);

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    marginBottom: 10,
    marginTop: 10,
  },
  homeTopBg: {
    width: '100%',
    height: 350,
    display: 'flex',
    alignItems: 'center',
  },
  itemImageView: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: colors.containersBG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {width: 50, height: 50},
  itemName: {color: 'white', fontSize: 14, marginTop: 6},
});

export default CategoryItem;
