import {React, useEffect, useState} from 'react';
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

import {LocalStoreDataFetch} from '../utils/storage.manager';
import {storageConstants} from '../constants/storage.constants';

import {images} from '../components/images';
import {colors} from '../components/colors';
import CategoryItem from '../components/list-items/category.item';

const HomeFragment = ({navigation}) => {
  const [address, setAddress] = useState();
  const [latitude, setLatitude] = useState();
  const [longtitude, setLongitude] = useState();

  async function fetchData() {
    setAddress(await LocalStoreDataFetch(storageConstants.LOCATION_ADDRESS));
    let coords = JSON.parse(
      await LocalStoreDataFetch(storageConstants.LOCATION_COORDS),
    );
    setLatitude(coords.latitude);
    setLongitude(coords.longitude);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const categoryDataArr = [
    {
      id: 1,
      name: 'Rice',
      catImage: require('../assets/category-icons/rice-icon.png'),
    },
    {
      id: 2,
      name: 'Pizza',
      catImage: require('../assets/category-icons/pizza-icon.png'),
    },
    {
      id: 3,
      name: 'Donout',
      catImage: require('../assets/category-icons/donut-icon.png'),
    },
    {
      id: 4,
      name: 'Chicken',
      catImage: require('../assets/category-icons/chicken-icon.png'),
    },
    {
      id: 5,
      name: 'Steaks',
      catImage: require('../assets/category-icons/steak-icon.png'),
    },
    {
      id: 6,
      name: 'Meal',
      catImage: require('../assets/category-icons/meal-icon.png'),
    },
    {
      id: 7,
      name: 'Kebab',
      catImage: require('../assets/category-icons/kebab-icon.png'),
    },
    {
      id: 8,
      name: 'All',
      catImage: require('../assets/category-icons/all-icon.png'),
    },
  ];

  return (
    <ScrollView style={styles.mainContainer}>
      <ImageBackground style={styles.homeTopBg} source={images.homeBgImage}>
        <TouchableOpacity
          style={styles.locationContainer}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('LocationSetScreen');
          }}>
          <Text style={styles.locationTitleText}>Deliver To</Text>
          <Text style={styles.locationText}>{address}</Text>
        </TouchableOpacity>

        <View style={styles.userWelcomeContainer}>
          <Text style={styles.welcomeTitleText}>Good Afternoon</Text>
          <Text style={styles.welcomeUserName}>Osama Usmani !</Text>
        </View>
      </ImageBackground>

      <View>
        <FlatList
          data={categoryDataArr}
          numColumns={4}
          contentContainerStyle={{alignItems: 'center'}}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CategoryItem item={item} />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: colors.containersBGDark},
  homeTopBg: {
    width: '100%',
    height: 350,
    display: 'flex',
    alignItems: 'center',
  },
  locationContainer: {
    marginTop: 15,
    width: '95%',
    height: 80,
    backgroundColor: colors.containersBGDark,
    borderRadius: 12,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationTitleText: {
    color: 'gray',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  userWelcomeContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  welcomeTitleText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  welcomeUserName: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '900',
  },
});

export default HomeFragment;
