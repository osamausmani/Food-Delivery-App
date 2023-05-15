import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import {images} from '../components/images';
import {colors} from '../components/colors';
import HomeFragment from '../fragments/home.fragment';

import OrderFragment from '../fragments/orders.fragment';
import ProfileFragment from '../fragments/profile.fragment';
import FavoriteFragment from '../fragments/favorite.fragment';

const HomeScreen = ({navigation}) => {
  const [bottomNavIndex, setBottomNavIndex] = useState(0);

  function handleBottomNavItemClick(index) {
    setBottomNavIndex(index);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.viewsContainer}>
        {bottomNavIndex == 0 ? <HomeFragment navigation={navigation} /> : null}
        {bottomNavIndex == 1 ? (
          <FavoriteFragment navigation={navigation} />
        ) : null}
        {bottomNavIndex == 2 ? <OrderFragment navigation={navigation} /> : null}
        {bottomNavIndex == 3 ? (
          <ProfileFragment navigation={navigation} />
        ) : null}
      </View>

      <ImageBackground
        style={styles.bottomNavBarContainer}
        source={images.homeBottomBarBgImage}
        resizeMode="stretch">
        <TouchableOpacity
          onPress={() => handleBottomNavItemClick(0)}
          style={styles.bottomNavItem}>
          <Image
            style={
              bottomNavIndex == 0
                ? styles.bottomNavItemImageSelected
                : styles.bottomNavItemImage
            }
            source={
              bottomNavIndex == 0
                ? images.bottomNavBarHomeSelectedIcon
                : images.bottomNavBarHomeUnSelectedIcon
            }
          />
          <Text
            style={
              bottomNavIndex == 0
                ? styles.navItemTextSelected
                : styles.navItemText
            }>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleBottomNavItemClick(1)}
          style={styles.bottomNavItem}>
          <Image
            style={
              bottomNavIndex == 1
                ? styles.bottomNavItemImageSelected
                : styles.bottomNavItemImage
            }
            source={
              bottomNavIndex == 1
                ? images.bottomNavBarFavSelectedIcon
                : images.bottomNavBarFavUnSelectedIcon
            }
          />
          <Text
            style={
              bottomNavIndex == 1
                ? styles.navItemTextSelected
                : styles.navItemText
            }>
            Favorite
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleBottomNavItemClick(2)}
          style={styles.bottomNavItem}>
          <Image
            style={
              bottomNavIndex == 2
                ? styles.bottomNavItemImageSelected
                : styles.bottomNavItemImage
            }
            source={
              bottomNavIndex == 2
                ? images.bottomNavBarOrdersSelectedIcon
                : images.bottomNavBarOrdersUnSelectedIcon
            }
          />
          <Text
            style={
              bottomNavIndex == 2
                ? styles.navItemTextSelected
                : styles.navItemText
            }>
            Orders
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleBottomNavItemClick(3)}
          style={styles.bottomNavItem}>
          <Image
            style={
              bottomNavIndex == 3
                ? styles.bottomNavItemImageSelected
                : styles.bottomNavItemImage
            }
            source={
              bottomNavIndex == 3
                ? images.bottomNavBarProfileSelectedIcon
                : images.bottomNavBarProfileUnSelectedIcon
            }
          />
          <Text
            style={
              bottomNavIndex == 3
                ? styles.navItemTextSelected
                : styles.navItemText
            }>
            Profile
          </Text>
        </TouchableOpacity>
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
    backgroundColor: colors.containersBGDark,
  },
  viewsContainer: {
    width: '100%',
    height: '100%',
    paddingBottom: 70,
    backgroundColor: 'transparent',
  },

  bottomNavBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: -4,
    paddingBottom: 15,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
  bottomNavItem: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomNavItemImage: {
    width: 30,
    height: 30,
  },
  bottomNavItemImageSelected: {
    width: 50,
    height: 50,
  },
  navItemTextSelected: {color: colors.mainColor, textTransform: 'uppercase'},
  navItemText: {color: 'white', textTransform: 'uppercase'},
});

export default HomeScreen;
