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
  TouchableOpacity,
} from 'react-native';

import MapView, {OverlayAnimated} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Marker} from 'react-native-maps';
import MapStyle from '../constants/map.style.json';
import {colors} from '../components/colors';
import MainTextInput from '../components/textinput/main.textinput';
import MainButton from '../components/buttons/main.button';
import {LocalStoreData} from '../utils/storage.manager';
import {storageConstants} from '../constants/storage.constants';

const LocationSetScreen = ({navigation}) => {
  nav = navigation;

  const [cords, setCords] = useState();
  const [address, setAddress] = useState();

  function getCurrentLocation() {
    Geolocation.getCurrentPosition(async info => {
      console.log(info.coords), setCords(info.coords);
      LocalStoreData(
        storageConstants.LOCATION_COORDS,
        JSON.stringify(info.coords),
      );
      getAddressFromCoordinates(info.coords.latitude, info.coords.longitude);
    });
  }

  async function getAddressFromCoordinates(latitude, longitude) {
    return new Promise(resolve => {
      const url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-US&apiKey=${'o309Zrm9G1HpuXMO7BsxcYwjwyJhiOfuFb7opX383RQ'}`;

      fetch(url)
        .then(res => res.json())
        .then(resJson => {
          console.log(resJson.items[0].address.label);
          setAddress(resJson.items[0].address.label);
          LocalStoreData(
            storageConstants.LOCATION_ADDRESS,
            resJson.items[0].address.label,
          );

          // // the response had a deeply nested structure :/
          // if (
          //   resJson &&
          //   resJson.Response &&
          //   resJson.Response.View &&
          //   resJson.Response.View[0] &&
          //   resJson.Response.View[0].Result &&
          //   resJson.Response.View[0].Result[0]
          // ) {
          //   let a = resolve(
          //     resJson.Response.View[0].Result[0].Location.Address.Label,
          //   );
          //   console.log('adddress', a);
          // } else {
          //   resolve();
          // }
        })
        .catch(e => {
          console.log('Error in getAddressFromCoordinates', e);
          resolve();
        });
    });
  }

  useEffect(() => {
    getCurrentLocation();
  }, [setCords, setAddress]);

  const handleOnContinueSubmit = () => {
    navigation.navigate('HomeScreen');
  };

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

      <View style={styles.viewOnMapContainer}>
        <Text style={styles.locationHeading}>Enter Location</Text>
        <Text style={styles.locationMsg}>
          Please confirm your current location
        </Text>

        <View style={styles.locationInputContainer}>
          <MainTextInput
            value={address}
            placeholderText={'Enter your Address'}
            onChangeText={text => setAddress(text)}
          />
        </View>

        <View style={styles.locationButtonContainer}>
          <MainButton
            buttonLabel={'Continue'}
            onPress={handleOnContinueSubmit}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.locationMsg}>SKIP FOR NOW</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: colors.containersBG,
    width: '90%',
    height: '33%',
    bottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  locationHeading: {
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  locationMsg: {
    color: 'gray',
    fontSize: 16,
    marginBottom: 10,
  },
  locationInputContainer: {
    width: '100%',
  },
  locationButtonContainer: {width: '100%', marginTop: 20},
});

export default LocationSetScreen;
