//
// Augustine Valdez - FindAGolfPro andriod app
// npx react-native start
// npx react-native run-android
// psql -d postgres -U my_user ///// root

import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Button, TouchableOpacity, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// importing the different screen files
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import ProsScreen from './screens/ProProfileScreen'
import CourseScreen from './screens/CourseScreen'
import darciOlsen from './proProfiles/darciOlsen'
import golfglenmoor from './courseProfiles/glenmoorGolfCourse'

// COURSES
// INSERT INTO Course (name, address, latitude, longitude, courseimage) values ('Glenmoor Golf Course', '9800 S 4800 W, South Jordan, UT 84095', 40.5722237,  -112.0018521, 'https://golfglenmoor.com/wp-content/uploads/2021/04/golf-course-and-rates.jpg');
// INSERT INTO Course (name, address, latitude, longitude, courseimage) values ('Stonebridge Golf Club', '4415 Links Drive, West Valley City, UT 8412', 40.713998, -111.9977157, 'https://www.golfstonebridgeutah.com/media/com_twojtoolbox/stonebridge%2023.jpg');

// PROS
// INSERT INTO pro (name,title,homecourse,contact,imagelink,rates) VALUES ('Darci Olsen', 'Head Professional - Class A PGA Professional', 'Glenmoor Golf Course', 'email: darciolsen@pga.com', 'https://utahpga.com/wp-content/uploads/2019/10/IMG_1064-e1570833734766-scaled.jpg', 'LESSON RATES{"\n"}(Adult) Single Lesson $80/hour $40/half hour{"\n"}(Adult) 3 1-hour lesson Pack $225{"\n"}(Adult) 3 30-min lesson Pack $105{"\n"}(Junior) Single Lesson $65/hour $35/half hour{"\n"}(Junior) 3 1-hour lesson Pack $180{"\n"}(Junior) 3 30-min lesson Pack $90{"\n"}*Each additional person is $10 per lesson time{"\n"}');

// creating the stack and then each page of the stack from the imported screens
const HomeStack = createStackNavigator()

function RootStack() {
  return (
    <HomeStack.Navigator
      initialRouteName="Start"
      screenOptions={{ gestureEnabled: false }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Pro"
        component={ProsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Course"
        component={CourseScreen}
        options={{ headerShown: false }}
       />
       <HomeStack.Screen
        name="darciO"
        component={darciOlsen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="golfglenmoor"
        component={golfglenmoor}
        options={{ headerShown: false }}
       />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
