/** @format */

import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Btns(props) {
  const { onPress, title, icon, margintop } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      {icon && <AntDesign name={icon} size={24} color="white" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 82,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "#116CE2",
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    paddingRight: 15,
  },
});
