/** @format */

import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FONTS, SIZES } from "../utils/theme";

export default function Btns(props) {
  const { onPress, title, icon, margintop, paddingright } = props;
  return (
    <Pressable style={[styles.button, { marginTop: margintop }]} onPress={onPress}>
      <Text style={[styles.text, { paddingRight: paddingright }]}>{title}</Text>
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
  },
  text: {
    fontSize: SIZES.medium,
    lineHeight: 21,
    fontFamily: FONTS.bold,
    letterSpacing: 0.25,
    color: "white",
  },
});
