//
// Augustine Valdez - FindAGolfPro andriod app
// npx react-native start
// npx react-native run-android

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

// INSERT INTO Course (courseName, address, latitude, longitude)    values    ('Glenmoor Golf Course', '9800 S 4800 W, South Jordan, UT 84095', 40.5722237,  -112.0018521),    ('Stonebridge Golf Club', '4415 Links Drive, West Valley City, UT 8412', 40.713998, -111.9977157)

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
