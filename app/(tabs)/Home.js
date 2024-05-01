/** @format */
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import GenderTab from "../components/GenderTab";
import Icon from "../components/Icon";
import ServiceIconList from "../components/ServiceIconList";
import ServiceButton from "../components/ServiceButton";
import { useState, useRef } from "react";

import { TabView, SceneMap } from "react-native-tab-view";
import HomeBanner from "../components/HomeBanner";
import { Button, Divider } from "react-native-paper";
import BookingSuccess from "../BookingSuccess";
import { Animated } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import ServiceIconList2 from "../components/ServiceIconList2";
import Testimonials from "../components/Testimonials";
import { NavigationContainer } from "@react-navigation/native";

export default function Home() {
  const heightValue = useRef(new Animated.Value(0)).current;

  const [allService, setAllService] = useState(true);
  const handleClick = () => {
    Animated.timing(heightValue, {
      toValue: allService ? 0 : 10,
      duration: 50000,
      useNativeDriver: true,
    }).start();
    setAllService(!allService);
  };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Male" },
    { key: "second", title: "Female" },
  ]);
  const [value, setValue] = React.useState("male");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContainer} scrollEnabled>
        <View style={styles.container}>
          <HomeBanner bookingSuccess={false} />
          <Text style={[styles.serviceQuery, { textAlign: "left" }]}>
            What are you looking for ?
          </Text>
          {/* <GenderTab /> */}
          <SegmentedButtons
            style={{ backgroundColor: "white", borderRadius: 0 }}
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: "male",
                label: "Male",
                style: {
                  borderBottomColor: value === "male" ? "#116CE2" : "white",
                  backgroundColor: "white",
                  borderColor: "white",
                  borderRadius: 0,
                },
              },
              {
                value: "female",
                label: "Female",
                style: {
                  borderBottomColor: value === "female" ? "#116CE2" : "white",
                  backgroundColor: "white",
                  borderColor: "white",
                  borderRadius: 0,
                },
              },
            ]}
          />
          <ServiceIconList2 type={value} allService={allService} />
          {allService ? (
            <ServiceButton onPress={handleClick} text={"Close All Service"} />
          ) : (
            <ServiceButton onPress={handleClick} text={"Show all Service"} />
          )}
          <Testimonials />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    fontFamily: "Times New Roman",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    backgroundColor: "#F4F7FC",
  },
  scrollContainer: {
    flex: 1,
  },
  tabcontainer: {
    marginBottom: 20,
  },
  scene: {
    flex: 1,
  },
  serviceQuery: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Times New Roman",
    textAlign: "left",
  },
});
