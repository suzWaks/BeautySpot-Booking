import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { FONTS, SIZES, SHADOWS, COLORS } from "../../utils/theme";

const DateCard = ({ currentDay, date, week, backgroundColor, textColor }) => {
  return (
    <TouchableWithoutFeedback onPress={()=>console.log("date pressed")}>
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <Text style={{ fontSize: SIZES.small, color: textColor ,fontFamily:FONTS.regular}}>{currentDay}</Text>
        <Text style={{ fontSize: SIZES.xxLarge, fontFamily:FONTS.bold, color: textColor }}>
          {date}
        </Text>
        <Text style={{ fontSize: SIZES.small, color: textColor,fontFamily:FONTS.regular}}>{week}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DateCard;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 95,
    backgroundColor: "#116ce2",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 3,
      height: 1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },
});
