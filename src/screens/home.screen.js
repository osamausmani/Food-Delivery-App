import React, {useRef, useState} from 'react';
import {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LocalStoreDataFetch} from '../utils/storage.manager';
import {storageConstants} from '../constants/storage.constants';

const HomeScreen = ({navigation}) => {
  const [address, setAddress] = useState();
  const [latitude, setLatitude] = useState();
  const [longtitude, setLongitude] = useState();

  async function fetchData() {
    setAddress(await LocalStoreDataFetch(storageConstants.LOCATION_ADDRESS));

    let coords = JSON.parse(
      await LocalStoreDataFetch(storageConstants.LOCATION_COORDS),
    );

    console.log(coords);

    setLatitude(coords.latitude);
    setLongitude(coords.longitude);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text>Home Screen</Text>
      <Text>{address}</Text>
      <Text>{latitude}</Text>
      <Text>{longtitude}</Text>
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
});

export default HomeScreen;
