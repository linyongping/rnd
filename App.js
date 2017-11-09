/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image
} from "react-native";
import moment from "moment";
import { TabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import CountDown from "./src/route/countDown";
import MainPage from "./src/route/mainPage";
moment.locale("zh-cn");

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const timeFormat = "YYYY-MM-DD HH:mm:ss";
const newYear = moment("2018-02-16");

const App = TabNavigator({
  Main: {
    screen: MainPage,
    navigationOptions: {
      tabBarLabel: "main",
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? "iosHome" : "iosXXX"}
          size={26}
          style={{ color: "purple" }}
        />
      ),
      headerTitle: "Main Page"
    }
  },
  CountDown: {
    tabBarLabel: "app",
    screen: CountDown
  }
});

export default App;
