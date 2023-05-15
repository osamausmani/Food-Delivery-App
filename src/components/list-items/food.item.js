import {React, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors} from '../colors';
import {images} from '../images';

const windowWidth = Dimensions.get('window').width;

const FoodItem = ({item}) => (
  <TouchableOpacity activeOpacity={0.9} style={styles.mainContainer}>
    <View style={styles.itemTopView}>
      <Image
        style={styles.itemImage}
        resizeMode="cover"
        source={{uri: item.thumbnail_url}}
      />

      <View style={styles.itemImageOverlay} />

      <View style={styles.itemImageTextView}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            bottom: 12,
            textAlign: 'center',
          }}>
          {item.name}
        </Text>

        <Text
          style={{
            color: 'white',
            fontSize: 20,
            bottom: 12,
          }}>
          Ranchers
        </Text>
      </View>
    </View>

    <View style={styles.itemBottomView}>
      <View style={styles.foodQuickInfoView}>
        <Image
          style={styles.quickInfoItemIcon}
          resizeMode="cover"
          source={images.itemTimeIcon}
        />

        <Text style={styles.quickInfoItemText}>
          {' '}
          {item.total_time_minutes} Mins{' '}
        </Text>
      </View>

      <View style={styles.foodQuickInfoView}>
        <Image
          style={styles.quickInfoItemIcon}
          resizeMode="cover"
          source={images.itemRatingIcon}
        />
        <Text style={styles.quickInfoItemText}> 4.9/5 </Text>
      </View>

      <View style={styles.foodQuickInfoView}>
        <Image
          style={styles.quickInfoItemIcon}
          resizeMode="cover"
          source={images.itemDistanceIcon}
        />
        <Text style={styles.quickInfoItemText}> 10Km </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    margin: 0,
    marginBottom: 10,
    marginTop: 10,
    width: windowWidth - 20,
    height: 250,
    backgroundColor: colors.containersBG,
    borderRadius: 12,
  },
  itemTopView: {
    width: '100%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 12,
  },
  itemBottomView: {
    display: 'flex',
    flexDirection: 'row',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  itemImageOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    display: 'flex',
    position: 'absolute',
    opacity: 0.6,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },

  itemImageTextView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
  },

  foodQuickInfoView: {
    height: 40,
    margin: 4,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  quickInfoItemIcon: {width: 30, height: 30},
  quickInfoItemText: {color: 'white', fontSize: 16, fontWeight: 'bold'},
});

export default FoodItem;
