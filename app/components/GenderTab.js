/** @format */

import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";

import BookingSuccess from "../BookingSuccess";
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
