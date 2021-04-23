import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Button, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const defaultBackground = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultBackground.jpg';
const background = { uri: defaultBackground };

const darci = { uri : 'https://utahpga.com/wp-content/uploads/2019/10/IMG_1064-e1570833734766-scaled.jpg' };
const sirene = { uri : 'https://goaztecs.com/images/2018/7/11/11309567.jpeg?width=300' };
const defaultP = { uri : 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultProfile.jpg' };

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const ImageButton = ({ onPress, name }) => (
  <TouchableOpacity onPress={onPress} >
    <Image source={darci} style={styles.profilepix} />
  </TouchableOpacity>
);

const examplecourse = (
      {
        id: 8,
        name: 'Glenmoor Golf Course',
        address: '9800 S 4800 W, South Jordan, UT 84095',
        latitude: '40.5722237',
        longitude: '-112.0018521',
        courseimage: 'https://golfglenmoor.com/wp-content/uploads/2021/04/golf-course-and-rates.jpg'
      }
)
const quote = ( { value : '\n\nGolf Pros at Glenmoor!' } )

function golfglenmoor({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
            <View style={styles.bottomContainer}>
                <AppButton title="HOME" onPress={() => navigation.navigate('Home')} />
                <AppButton title="all courses" onPress={() => navigation.navigate('Course')} />
                <AppButton title="Map" onPress={() => navigation.navigate('Map')} />
            </View>
            <Text style={styles.headertext}>{examplecourse.name}</Text>
            <Text style={styles.bodytext}>{examplecourse.address}</Text>
            <Image source={{uri: examplecourse.courseimage}} style={styles.profileImage} />
            <Text style={styles.headertext}>{quote.value}</Text>
            <View style={styles.bodyContainer4}>
                <ImageButton name="darci" onPress={() => navigation.navigate('darciO')} />
                <Image source={sirene} style={styles.profilepix} />
                <Image source={defaultP} style={styles.profilepix} />
            </View>
            <View style={styles.textContainer4}>
                <Text style={styles.bodytext}>     Darci Olsen</Text>
                <Text style={styles.bodytext}>             Sirene Blair</Text>
                <Text style={styles.bodytext}>        Weston Wheeler</Text>
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
    justifyContent: 'space-between',
    top: 440
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
    top: 590
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
  profileImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    margin: 10
  },
  ratestext: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 30
  },
  bodytext: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
//    backgroundColor: "#000000a0",
    margin: 0
  },
  headertext: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    justifyContent: "flex-start",
    margin: 5,
    marginLeft: 20
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

export default golfglenmoor;