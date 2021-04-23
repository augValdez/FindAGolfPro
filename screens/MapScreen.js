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

// this is for the purpose of demo - will eventually connect database correctly
const gglenmoor =
  {
    id: 8,
    name: 'Glenmoor Golf Course',
    address: '9800 S 4800 W, South Jordan, UT 84095',
    latitude: 40.5722237,
    longitude: -112.0018521,
    courseimage: 'https://golfglenmoor.com/wp-content/uploads/2021/04/golf-course-and-rates.jpg'
  }
const sstonebridge =
  {
    id: 9,
    name: 'Stonebridge Golf Club',
    address: '4415 Links Drive, West Valley City, UT 8412',
    latitude: 40.713998,
    longitude: -111.9977157,
    courseimage: 'https://www.golfstonebridgeutah.com/media/com_twojtoolbox/stonebridge%2023.jpg'
  }
const mmickriley =
  {
    id: 10,
    name: 'Mick Riley Golf Course',
    address: '421 Vine St, Murray, UT 84107',
    latitude: 40.65882111,
    longitude: -111.8763123,
    courseimage: 'https://lh5.googleusercontent.com/p/AF1QipOEOubhmYdMjoGx1xMufu_ZqBsciVG7HqhCascA=w408-h271-k-no'
  }
const ffourlakes =
  {
    id: 11,
    name: 'Fore Lakes Golf Course',
    address: '1285 W 4700 S, Taylorsville, UT 84123',
    latitude: 40.6657527,
    longitude: -111.9285117,
    courseimage: 'https://lirp.cdn-website.com/cf374a4f/dms3rep/multi/opt/180727-TA-Barker-112_%283%29-1920w.jpg'
  }
const mmeadowbrook =
  {
    id: 12,
    name: 'Meadow Brook Golf Course',
    address: '4197 1300 W, Taylorsville, UT 84123',
    latitude: 40.67988,
    longitude: -111.929224,
    courseimage: 'https://lh5.googleusercontent.com/p/AF1QipPgGejTymuF6PRWoMW3quQPjhn6T2-0lhRAh3FB=w408-h306-k-no'
  }
const nnibley =
  {
    id: 13,
    name: 'Nibley Park Golf Course',
    address: '2780 S 700 E, Salt Lake City, UT 84106',
    latitude: 40.7101352,
    longitude: -111.8713814,
    courseimage: 'https://lh5.googleusercontent.com/p/AF1QipNw4WxXDXFY5Epp7-O58M50-zIrS30sHERRgSQW=w408-h272-k-no'
  }
const mmurray =
  {
    id: 14,
    name: 'Murray Parkway Golf Course',
    address: '6345 Murray Pkwy Ave, Murray, UT 84123',
    latitude: 40.6337758,
    longitude: -111.9216766,
    courseimage: 'https://parkwaygolf.org/wp-content/uploads/2014/06/DSC01996-e1403823586140.jpg'
  }
const fforestdale =
  {
    id: 15,
    name: 'Forest Dale Golf Course',
    address: '2375 S 900 E, Salt Lake City, UT 84106',
    latitude: 40.7186665,
    longitude: -111.8645524,
    courseimage: 'https://www.slc-golf.com/wp-content/uploads/2020/02/SLC_ForestDale_07A_5-18-Kelsey-Chugg.jpg'
  }
const ttheridge =
  {
    id: 16,
    name: 'The Ridge Golf Club',
    address: '5055 Westridge Blvd, West Valley City, UT 84118',
    latitude: 40.655758,
    longitude: -112.006243,
    courseimage: 'https://www.golftheridgegc.com/media/com_twojtoolbox/The-Ridge%2007.jpg'
  }
const ooldmill =
  {
    id: 17,
    name: 'Old Mill Golf Course',
    address: '6080 Wasatch Blvd, Holladay, UT 84121',
    latitude: 40.638787,
    longitude: -111.798596,
    courseimage: 'https://lh5.googleusercontent.com/p/AF1QipPLrWdRfxdypNIp3IWuL3JY0AiES5gs7rCuuxrT=w426-h240-k-no'
  }
const gglendale =
  {
    id: 18,
    name: 'Glendale Golf Course',
    address: '1630 2100 S, Salt Lake City, UT 84119',
    latitude: 40.7258069,
    longitude: -111.9370477,
    courseimage: 'https://www.slc-golf.com/wp-content/uploads/2020/02/glendale07.jpg'
  }
const mmountainview =
  {
    id: 19,
    name: 'Mountain View Golf Course',
    address: '2400 Gardner Ln, West Jordan, UT 84088',
    latitude: 40.594107,
    longitude: -111.952459,
    courseimage: 'https://slco.org/globalassets/2-parks--rec/facilities/golf/mountainview.jpg'
  }



function MapsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
        <Text style={styles.headertext}>Maps Screen</Text>
        <MapView style={styles.map}
            initialRegion={{
                    latitude: 40.5621704,
                    longitude: -112.0018521,
                    latitudeDelta: 0.45,
                    longitudeDelta: 0.45
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}>

            <MapView.Marker
                coordinate={{latitude: gglenmoor.latitude, longitude: gglenmoor.longitude}}
                title={gglenmoor.name}
                description={gglenmoor.address}/>
            <MapView.Marker
                coordinate={{latitude: sstonebridge.latitude, longitude: sstonebridge.longitude}}
                title={sstonebridge.name}
                description={sstonebridge.address}/>
            <MapView.Marker
                coordinate={{latitude: mmickriley.latitude, longitude: mmickriley.longitude}}
                title={mmickriley.name}
                description={mmickriley.address}/>
            <MapView.Marker
                coordinate={{latitude: ffourlakes.latitude, longitude: ffourlakes.longitude }}
                title={ffourlakes.name}
                description={ffourlakes.address}/>
            <MapView.Marker
                coordinate={{latitude: mmeadowbrook.latitude, longitude: mmeadowbrook.longitude }}
                title={mmeadowbrook.name}
                description={mmeadowbrook.address}/>
            <MapView.Marker
                coordinate={{latitude: nnibley.latitude, longitude: nnibley.longitude}}
                title={nnibley.name}
                description={nnibley.address}/>
            <MapView.Marker
                coordinate={{latitude: mmurray.latitude, longitude: mmurray.longitude}}
                title={mmurray.name}
                description={mmurray.address}/>
            <MapView.Marker
                coordinate={{latitude: fforestdale.latitude, longitude: fforestdale.longitude}}
                title={fforestdale.name}
                description={fforestdale.address}/>
            <MapView.Marker
                coordinate={{latitude: ttheridge.latitude, longitude: ttheridge.longitude}}
                title={ttheridge.name}
                description={ttheridge.address}/>
            <MapView.Marker
                coordinate={{latitude: ooldmill.latitude, longitude: ooldmill.longitude}}
                title={ooldmill.name}
                description={ooldmill.address}/>
            <MapView.Marker
                coordinate={{latitude: gglendale.latitude, longitude: gglendale.longitude}}
                title={gglendale.name}
                description={gglendale.address}/>
            <MapView.Marker
                coordinate={{latitude: mmountainview.latitude, longitude: mmountainview.longitude}}
                title={mmountainview.name}
                description={mmountainview.address}/>







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