import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Button, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const defaultBackground = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultBackground.jpg';
const background = { uri: defaultBackground };

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

function darciOlsen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
            <View style={styles.bottomContainer}>
                <AppButton title="HOME" onPress={() => navigation.navigate('Home')} />
                <AppButton title="Their Course" onPress={() => navigation.navigate('Course')} />
                <AppButton title="Map" onPress={() => navigation.navigate('Map')} />
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
   bodyContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 0,
    top: 20
   },
   textContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 125
   },
   bodyContainer2: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 150,
    marginBottom: 5,
    top: 20
   },
   textContainer2: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 275
  },
   bodyContainer3: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 300,
    marginBottom: 5,
    top: 20
   },
   textContainer3: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 430
  },
   bodyContainer4: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 450,
    marginBottom: 5,
    top: 20
   },
   textContainer4: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 580
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
    fontSize: 16,
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

export default darciOlsen;