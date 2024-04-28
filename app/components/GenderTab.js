/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Import NavigationContainer
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, StyleSheet } from "react-native";
import ServiceIconList2 from "./ServiceIconList2";
import BookingSuccess from "../BookingSuccess";
import ServiceButton from "./ServiceButton";
import HomeBanner from "./HomeBanner";

function GenderTab() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={BookingSuccess} />
      <Tab.Screen name="Settings" component={HomeBanner} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});

export default GenderTab;
