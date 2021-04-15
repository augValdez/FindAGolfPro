import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Button, TouchableOpacity, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


// default images
const defaultBackground = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultBackground.jpg';
const defaultProfile = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultProfile.jpg';
// setting the images to their value of the individual - if null = defaults
const profile = { uri: defaultProfile };
const background = { uri: defaultBackground };

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

function MapsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
        <Text style={styles.headertext}>Maps Screen</Text>
        <MapView style={styles.map}
            initialRegion={{
                    latitude: 40.5621704,
                    longitude: -112.0018521,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}>

            <MapView.Marker
                coordinate={{latitude: 40.5722237, longitude: -112.0018521}}
                title={"Glenmoor Golf Course"}
                description={" 9800 S 4800 W, South Jordan, UT 84095"}/>
            <MapView.Marker
                coordinate={{latitude: 40.713998, longitude: -111.9977157}}
                title={"Stonebridge Golf Club"}
                description={"4415 Links Drive, West Valley City, UT 84120"}/>
        </MapView>
        <View style={styles.bottomContainer}>
            <AppButton title="HOME PAGE" onPress={() => navigation.navigate('Home')} />
        </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  topContainer: {
    flexDirection: 'row',
    margin: 20,
    height: 50,
    justifyContent: 'space-evenly'
  },
  bottomContainer: {
    height: 50,
    position: 'absolute',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 1.5,
    bottom: 0
    },
  Sbackground: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    resizeMode: "cover"
  },
  profilepix: {
      width: 100,
      height: 100,
      paddingHorizontal: 15,
      paddingVertical: 15,
      alignSelf: "flex-start",
      margin: 20
    },
  bodytext: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
//    backgroundColor: "#000000a0",
    margin: 20
  },
  headertext: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    justifyContent: "flex-start",
    margin: 20
  },
  buttonContainer: {
    elevation: 1,
    backgroundColor: "#009688",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 120,
    margin: 5
  },
  buttonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default MapsScreen;