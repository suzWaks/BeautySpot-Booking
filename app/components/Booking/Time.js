import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { FONTS, COLORS } from "../../utils/theme";

var { width, height } = Dimensions.get("window");
const Time = ({ data }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        height: height * 0.15,
        width: width * 3,
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "space-between",
        padding: 2,
      }}
    >
      {data.map((item, index) => {
        return <TimeCard key={index} time="11:30-12:30" />;
      })}
    </ScrollView>
  );
};

export default Time;

const styles = StyleSheet.create({
  container: {
    height: height * 0.06,
    width: width * 0.4,
    backgroundColor:COLORS.WHITE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 11,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 3,
  },
  time: {
    fontSize: 13,
    paddingHorizontal: 3,
    color: "white",
    alignItems: "center",
  },
});

//Color Change logic handle
const TimeCard = ({time}) => {
  const [isSelected,setIsSelected]=useState(false)
  const colorChange=()=>{
    setIsSelected(!isSelected);
  }
  const containerColor = {
    backgroundColor: isSelected? COLORS.PRIMARY:COLORS.WHITE,
  }
  const textColor ={
    color: isSelected? COLORS.WHITE : COLORS.BLACK
  }


  return (
    <TouchableOpacity
      style={[styles.container,containerColor]}
      onPress={()=>colorChange()}
    >
      <Text style={textColor}>{time}</Text>
    </TouchableOpacity>
  );
};
