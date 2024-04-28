/** @format */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function ServiceButton({ onPress, text }) {
  return (
    <Button mode="outlined" onPress={onPress} style={styles.btn}>
      {text}
    </Button>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: "#fff",
    borderColor: "#1877F2",
    color: "#1877F2",
  },
});

export default ServiceButton;
