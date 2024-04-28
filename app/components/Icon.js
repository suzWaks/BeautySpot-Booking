/** @format */

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

function Icon({ IconSource, IconName }) {
  const onClick = () => {
    alert("Hello World");
  };
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onClick} style={style.IconContainer}>
        <Image source={IconSource} style={style.Icon} />
      </TouchableOpacity>
      <Text style={style.text}>{IconName}</Text>
    </View>
  );
}

export default Icon;

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "gray",
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  IconContainer: {
    width: 50,
    height: 50,
  },
  Icon: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text: {
    fontSize: 16,
  },
});
