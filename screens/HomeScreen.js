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
const stonebridge = { uri : 'https://www.golfstonebridgeutah.com/media/com_twojtoolbox/stonebridge%2023.jpg'};
const fourlakes = { uri : 'https://lirp.cdn-website.com/cf374a4f/dms3rep/multi/opt/180727-TA-Barker-112_%283%29-1920w.jpg' };
const nibley = { uri : 'https://lh5.googleusercontent.com/p/AF1QipNw4WxXDXFY5Epp7-O58M50-zIrS30sHERRgSQW=w408-h272-k-no' };


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
            <Text style={styles.headertext}>Welcome to FindAPro</Text>
            <Text style={styles.bodytext}>This app has the goal in mind for all types of golfers! </Text>
            <Text style={styles.bodytext}>Find what YOU need whether you need a Golf Pro to teach you the basics, or a specailized Pro to hone in your skills!</Text>
            <View style={styles.bottomContainer}>
                <AppButton title="Pros" onPress={() => navigation.navigate('Pro')} />
                <AppButton title="Courses" onPress={() => navigation.navigate('Course')} />
                <AppButton title="Maps" onPress={() => navigation.navigate('Map')} />
            </View>
            <View style={{alignSelf: "center", flexDirection: 'row', marginLeft: 0}}>
                <Image source={stonebridge} style={styles.profilepix} />
                <Image source={fourlakes} style={styles.profilepix} />
                <Image source={nibley} style={styles.profilepix} />
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

export default HomeScreen;