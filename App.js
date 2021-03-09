// In App.js in a new project

import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from 'react-native-maps';


const defaultBackground = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultBackground.jpg';
const defaultProfile = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultProfile.jpg';
const profile = { uri: defaultProfile };
const background = { uri: defaultBackground };

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
          <Text style={styles.headertext}>Welcome to FindAGolfPro</Text>
          <Button title="Pros" onPress={() => navigation.navigate('Pros')} />
          <Button title="Courses" onPress={() => navigation.navigate('Courses')} />
          <Button title="Maps" onPress={() => navigation.navigate('Maps')} />
        </ImageBackground>
    </View>
  );
}

function ProProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
          <Image source={profile} style={styles.profilepix} />
          <Text style={styles.headertext}>Pro Screen</Text>
          <Button title="HOME" onPress={() => navigation.navigate('Home')} />
          <Button title="Their Course" onPress={() => navigation.navigate('Courses')} />
        </ImageBackground>
    </View>
  );
}

function CourseScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
          <Text style={styles.headertext}>Courses</Text>
          <Button title="HOME" onPress={() => navigation.navigate('Home')} />
          <Button title="Pros at this course" onPress={() => navigation.navigate('Pros')} />
        </ImageBackground>
    </View>
  );
}

function MapsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Maps Screen</Text>
      <Button title="HOME" onPress={() => navigation.navigate('Home')} />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  Sbackground: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    resizeMode: "cover"
  },
  profilepix: {
      width: 50,
      height: 50,
      alignSelf: "flex-start"
    },
  bodytext: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  headertext: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    justifyContent: "flex-start"
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