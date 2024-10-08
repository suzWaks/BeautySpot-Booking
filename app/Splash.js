/** @format */

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "./components/button";
import { useNavigation } from "@react-navigation/native";
import { FONTS, SIZES } from "./utils/theme";

export default function Splash() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/LogoReduced.png")}
          // style={{ width: 200, height: 200 }}
        />
        {/* <Text style={styles.heading}>CST Beauty Spot</Text> */}
        <Text style={styles.text}>
          Book salon services {"\n"} from your fingertips
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Get started"
          icon="rightcircleo"
          onPress={() => {
            navigation.replace("pages/Login");
          }}
          paddingright={20}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 80,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 50,
    color: "grey",
  },
});
