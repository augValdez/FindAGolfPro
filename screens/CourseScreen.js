import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Button, TouchableOpacity, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

// default images
const defaultBackground = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultBackground.jpg';
const defaultProfile = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultProfile.jpg';
const defaultCourse = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultCourse.png';
// setting the images to their value of the individual - if null = defaults
const profile = { uri: defaultProfile };
const background = { uri: defaultBackground };
const course = { uri : defaultCourse };

// the links to the images of the courses - not to keep but to demo 4/22
const glenmoor = { uri : 'https://golfglenmoor.com/wp-content/uploads/2021/04/golf-course-and-rates.jpg' };
const stonebridge = { uri : 'https://www.golfstonebridgeutah.com/media/com_twojtoolbox/stonebridge%2023.jpg'};
const mickRiley = { uri : 'https://lh5.googleusercontent.com/p/AF1QipOEOubhmYdMjoGx1xMufu_ZqBsciVG7HqhCascA=w408-h271-k-no'};
const fourlakes = { uri : 'https://lirp.cdn-website.com/cf374a4f/dms3rep/multi/opt/180727-TA-Barker-112_%283%29-1920w.jpg' };
const meadowbrook = { uri : 'https://lh5.googleusercontent.com/p/AF1QipPgGejTymuF6PRWoMW3quQPjhn6T2-0lhRAh3FB=w408-h306-k-no' };
const nibley = { uri : 'https://lh5.googleusercontent.com/p/AF1QipNw4WxXDXFY5Epp7-O58M50-zIrS30sHERRgSQW=w408-h272-k-no' };
const murray = { uri : 'https://parkwaygolf.org/wp-content/uploads/2014/06/DSC01996-e1403823586140.jpg'};
const forestDale = { uri : 'https://www.slc-golf.com/wp-content/uploads/2020/02/SLC_ForestDale_07A_5-18-Kelsey-Chugg.jpg' };
const ridge = { uri : 'https://www.golftheridgegc.com/media/com_twojtoolbox/The-Ridge%2007.jpg' };
const oldmill = { uri : 'https://lh5.googleusercontent.com/p/AF1QipPLrWdRfxdypNIp3IWuL3JY0AiES5gs7rCuuxrT=w426-h240-k-no' };
const glendale = { uri : 'https://www.slc-golf.com/wp-content/uploads/2020/02/glendale07.jpg' };
const mountainview = { uri : 'https://slco.org/globalassets/2-parks--rec/facilities/golf/mountainview.jpg' };

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const ImageButton = ({ onPress, name }) => (
  <TouchableOpacity onPress={onPress} >
    <Image source={glenmoor} style={styles.profilepix} />
  </TouchableOpacity>
);

function CourseScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
          <View style={styles.bottomContainer}>
              <AppButton title="HOME" onPress={() => navigation.navigate('Home')}/>
              <AppButton title="MAP" onPress={() => navigation.navigate('Map')} />
          </View>
          <View style={styles.bodyContainer}>
              <ImageButton name="Glenmoor" onPress={() => navigation.navigate('golfglenmoor')} />
              <Image source={stonebridge} style={styles.profilepix} />
              <Image source={mickRiley} style={styles.profilepix} />
          </View>
          <View style={styles.textContainer}>
              <Text style={styles.bodytext}>Glenmoor</Text>
              <Text style={styles.bodytext}>   Stonebridge</Text>
              <Text style={styles.bodytext}>   Mick Riley</Text>
          </View>
          <View style={styles.bodyContainer2}>
              <Image source={fourlakes} style={styles.profilepix} />
              <Image source={meadowbrook} style={styles.profilepix} />
              <Image source={nibley} style={styles.profilepix} />
          </View>
          <View style={styles.textContainer2}>
              <Text style={styles.bodytext}>Four Lakes</Text>
              <Text style={styles.bodytext}>  Meadow Brook</Text>
              <Text style={styles.bodytext}>   Nibley </Text>
          </View>
          <View style={styles.bodyContainer3}>
              <Image source={murray} style={styles.profilepix}  />
              <Image source={forestDale} style={styles.profilepix} />
              <Image source={ridge} style={styles.profilepix} />
          </View>
          <View style={styles.textContainer3}>
              <Text style={styles.bodytext}>    Murray</Text>
              <Text style={styles.bodytext}>       Forest Dale</Text>
              <Text style={styles.bodytext}>   The Ridge</Text>
          </View>
          <View style={styles.bodyContainer4}>
              <Image source={oldmill} style={styles.profilepix} />
              <Image source={mountainview} style={styles.profilepix} />
              <Image source={glendale} style={styles.profilepix} />
          </View>
          <View style={styles.textContainer4}>
              <Text style={styles.bodytext}>    Old Mill</Text>
              <Text style={styles.bodytext}>  Mountain View</Text>
              <Text style={styles.bodytext}>  Glendale</Text>
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
    justifyContent: 'space-between',
    top: 125,
    marginLeft: 10
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

export default CourseScreen;