import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Button, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const examplepro =
      {
        name: 'Darci Olsen',
        title: 'Head Professional - Class A PGA Professional',
        homecourse: 'Glenmoor Golf Course',
        contact: 'email: darciolsen@pga.com',
        imagelink: 'https://utahpga.com/wp-content/uploads/2019/10/IMG_1064-e1570833734766-scaled.jpg',
        rates: 'LESSON RATES{"\\n"}(Adult) Single Lesson $80/hour $40/half hour{"\\n"}(Adult) 3 1-hour lesson Pack $225{"\\n"}(Adult) 3 30-min lesson Pack $105{"\\n"}(Junior) Single Lesson $65/hour $35/half hour{"\\n"}(Junior) 3 1-hour lesson Pack $180{"\\n"}(Junior) 3 30-min lesson Pack $90{"\\n"}*Each additional person is $10 per lesson time{"\\n"}',
        id: 1
      }

const sirenelink = 'https://goaztecs.com/images/2018/7/11/11309567.jpeg?width=300';
const sirene = { uri : sirenelink };
const paullink = 'https://media-exp1.licdn.com/dms/image/C5603AQH6n7TcEXaBDg/profile-displayphoto-shrink_800_800/0/1517363368264?e=1624492800&v=beta&t=_Fzd_Kb-ohPJtBHlKmGb7KrBoo31g-xX72P5ma2IouE';
const paul = { uri : paullink };
const chrislink = 'https://utahutes.com/images/2016/4/15/2317965.jpeg?width=300';
const chris = { uri : chrislink };
const troylink = 'https://photos.bluegolf.com/40/8d/3d/18/5b484d109678611eda50c410_s.jpg';
const troy = { uri : troylink };

// default images
const defaultBackground = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultBackground.jpg';
const defaultProfile = 'https://raw.githubusercontent.com/augValdez/FindAGolfPro/main/defaultProfile.jpg';
// setting the images to their value of the individual - if null = defaults
const userImage = 'https://utahpga.com/wp-content/uploads/2019/10/IMG_1064-e1570833734766-scaled.jpg';
const darci = { uri: userImage };
const defaultP = { uri : defaultProfile };
const background = { uri: defaultBackground };

// the bottom navigatoin bar buttons
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// the pros indiviual image buttons
const ImageButton = ({ onPress, name }) => (
  <TouchableOpacity onPress={onPress} >
    <Image source={darci} style={styles.profilepix} />
  </TouchableOpacity>
);

function ProProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.Sbackground}>
            <View style={styles.bottomContainer}>
                <AppButton title="HOME" onPress={() => navigation.navigate('Home')} />
                <AppButton title="Courses" onPress={() => navigation.navigate('Course')} />
                <AppButton title="Map" onPress={() => navigation.navigate('Map')} />
            </View>
            <View style={styles.bodyContainer}>
                <ImageButton name="darci" onPress={() => navigation.navigate('darciO')} />
                <Image source={sirene} style={styles.profilepix} />
                <Image source={defaultP} style={styles.profilepix} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.bodytext}>{examplepro.name}</Text>
                <Text style={styles.bodytext}>Sirene Blair</Text>
                <Text style={styles.bodytext}>Weston Wheeler</Text>
            </View>
            <View style={styles.bodyContainer2}>
                <Image source={defaultP} style={styles.profilepix} />
                <Image source={paul} style={styles.profilepix} />
                <Image source={defaultP} style={styles.profilepix} />
            </View>
            <View style={styles.textContainer2}>
                <Text style={styles.bodytext}>Kristy Dehlin</Text>
                <Text style={styles.bodytext}>Paul Phillips</Text>
                <Text style={styles.bodytext}>Steve Young</Text>
            </View>
            <View style={styles.bodyContainer3}>
                <Image source={chris} style={styles.profilepix}  />
                <Image source={defaultP} style={styles.profilepix} />
                <Image source={troy} style={styles.profilepix} />
            </View>
            <View style={styles.textContainer3}>
                <Text style={styles.bodytext}>Chris Gresh</Text>
                <Text style={styles.bodytext}>Gavin Eckert</Text>
                <Text style={styles.bodytext}>Troy Watkins</Text>
            </View>
            <View style={styles.bodyContainer4}>
                <Image source={defaultP} style={styles.profilepix} />
                <Image source={defaultP} style={styles.profilepix} />
                <Image source={defaultP} style={styles.profilepix} />
            </View>
            <View style={styles.textContainer4}>
                <Text style={styles.bodytext}>Philip King</Text>
                <Text style={styles.bodytext}>Taylor Johnson</Text>
                <Text style={styles.bodytext}>Bryan Abney</Text>
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

export default ProProfileScreen;