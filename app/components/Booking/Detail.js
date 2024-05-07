import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES } from "../../utils/theme";
import Icon from "react-native-vector-icons/Feather";

var { width, height } = Dimensions.get("window");
const Detail = ({ icon, text }) => {
    const[value,onChangeText]=useState('')
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        size={28}
        color={COLORS.GRAY}
        style={{ marginLeft: width * 0.04 }}
      />

      <TextInput
        editable
        placeholder={text}
        placeholderTextColor={COLORS.GRAY}
        maxLength={40}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={{
          fontFamily: FONTS.regular,
          color: COLORS.BLACK,
          width:width*0.6
        }}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: width * 0.84,
    height: height * 0.06,
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
});
