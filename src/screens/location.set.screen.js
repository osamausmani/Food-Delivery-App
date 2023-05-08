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
  StatusBar,
} from 'react-native';

import MapView, {OverlayAnimated} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Marker} from 'react-native-maps';
import MapStyle from '../constants/map.style.json';

const LocationSetScreen = ({navigation}) => {
  nav = navigation;

  const [cords, setCords] = useState();

  function getCurrentLocation() {
    Geolocation.getCurrentPosition(info => {
      console.log(info.coords), setCords(info.coords);
    });
  }

  useEffect(() => {
    getCurrentLocation();
  }, [setCords]);

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor="transparent" />

      {cords != undefined ? (
        <MapView
          toolbarEnabled={true}
          style={styles.mapViewContainer}
          customMapStyle={MapStyle}
          showsUserLocation={true}
          showsMyLocationButton={false}
          initialRegion={{
            latitude: cords.latitude,
            longitude: cords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {/* <Marker
            key={'index'}
            coordinate={{latitude: cords.latitude, longitude: cords.longitude}}
            title={'Current Location'}
            description={'This is your current location.'}
          /> */}
        </MapView>
      ) : (
        <Text>Loading Maps</Text>
      )}

      <View style={styles.viewOnMapContainer}></View>
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
  mapViewContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewOnMapContainer: {
    display: 'flex',
    position: 'absolute',
    backgroundColor: 'black',
    width: '90%',
    height: '30%',
    bottom: 10,
    borderRadius: 10,
  },
});

export default LocationSetScreen;
