//
// Augustine Valdez - FindAGolfPro andriod app
// npx react-native start
// npx react-native run-android

import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Button, TouchableOpacity, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const defaultBackground = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultBackground.jpg';
const defaultProfile = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultProfile.jpg';
const profile = { uri: defaultProfile };
const background = { uri: defaultBackground };

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
            <Text style={styles.headertext}>Welcome to FindAGolfPro</Text>
            <View style={styles.bottomContainer}>
                <AppButton title="Pros" onPress={() => navigation.navigate('Pros')} />
                <AppButton title="Courses" onPress={() => navigation.navigate('Courses')} />
                <AppButton title="Maps" onPress={() => navigation.navigate('Maps')} />
            </View>

        </ImageBackground>
    </View>
  );
}

function ProProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
            <View style={styles.bottomContainer}>
                <AppButton title="HOME" onPress={() => navigation.navigate('Home')} />
                <AppButton title="Their Course" onPress={() => navigation.navigate('Courses')} />
            </View>
            <Image source={profile} style={styles.profilepix} />
            <Text style={styles.headertext}>Pro Screen</Text>
        </ImageBackground>
    </View>
  );
}

function CourseScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
          <View style={styles.bottomContainer}>
              <AppButton title="HOME" onPress={() => navigation.navigate('Home')}/>
              <AppButton title="Pros Here" onPress={() => navigation.navigate('Pros')} />
          </View>
          <Text style={styles.headertext}>Courses</Text>
        </ImageBackground>
    </View>
  );
}

function MapsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
        <Text style={styles.headertext}>Maps Screen</Text>
        <MapView style={{height: '70%', width: '90%', alignSelf: "center"}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true} />
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
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
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
//    justifyContent: "space-around"
  },
  buttonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CourseScreen} />
        <Stack.Screen name="Pros" component={ProProfileScreen} />
        <Stack.Screen name="Maps" component={MapsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;