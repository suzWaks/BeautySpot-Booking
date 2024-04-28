/** @format */

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
function HomeBanner({ bookingSuccess }) {
  return (
    <View style={styles.banner}>
      <View style={[styles.circle, styles.circle1]}></View>
      <View style={[styles.circle, styles.circle2]}></View>
      <View style={[styles.circle, styles.circle3]}></View>
      <View style={[styles.circle, styles.circle4]}></View>
      <View style={[styles.circle, styles.circle5]}></View>
      <View style={[styles.circle, styles.circle6]}></View>
      {bookingSuccess ? (
        <View style={styles.success}>
          <Image
            source={require("../../assets/tick.gif")}
            style={styles.successTick}
          />
        </View>
      ) : (
        <>
          <Text style={styles.bookingNo}>You have 1 booking</Text>
          <View style={styles.bookingDetailContainer}>
            <Text style={styles.bookingInfo}>HairCut</Text>
            <Text style={styles.bookingInfo}>12:00am - 12:30am</Text>
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 200,
    backgroundColor: "#1877F2",
    zIndex: 1,
    overflow: "hidden",
    borderRadius: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#0E67DA",
    position: "absolute",
  },
  circle1: {
    bottom: -40,
    left: 30,
    opacity: 0.7,
    zIndex: 3,
  },
  circle2: {
    left: -20,
    bottom: -10,
    opacity: 0.45,
    zIndex: 2,
  },
  circle3: {
    left: -40,
    bottom: -50,
    opacity: 0.9,
    zIndex: 4,
  },
  circle4: {
    right: -10,
    top: -10,
    opacity: 0.9,
    zIndex: 2,
  },

  circle5: {
    right: -40,
    top: 10,
    opacity: 0.5,
    zIndex: 4,
  },
  circle6: {
    right: 30,
    top: -50,
    opacity: 0.7,
    zIndex: 3,
  },
  success: {
    width: 100,
    height: 100,
    borderRadius: 50,
    left: "40%",
    top: "25%",
    zIndex: 1,
    overflow: "hidden",
  },
  successTick: {
    width: "100%",
    height: "100%",
  },
  bookingNo: {
    position: "absolute",
    left: 30,
    top: 40,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  bookingDetailContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    alignItems: "center",
    position: "absolute",
    top: 150,
    right: 20,
    backgroundColor: "#0E6EEA",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
  },
  bookingInfo: {
    color: "white",
    fontSize: 14,
    fontFamily: "Times New Roman",
    fontWeight: "semibold",
  },
});

export default HomeBanner;
