/** @format */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeBanner from "../app/components/HomeBanner";
import { Button, Divider } from "react-native-paper";
function BookingSuccess() {
  const handleDone = () => {
    alert("Done ");
  };
  return (
    <View style={styles.container}>
      <HomeBanner bookingSuccess={true} />
      <View style={styles.bookingMessageContainer}>
        <Text
          style={{
            textAlign: "center",
            fontSize: "20",
            color: "black",
            fontWeight: "bold",
          }}>
          Booking Succesfull
        </Text>
        <Text
          style={{ textAlign: "center", color: "#8B8B8B", fontWeight: "bold" }}>
          Thank you for booking with us!
        </Text>
      </View>
      <View style={styles.bookingResultContainer}>
        <Text style={{ fontSize: 16, color: "#116CE2" }}>Booking Detail</Text>
        <Divider />
        <View style={styles.bookingResult}>
          <View style={styles.bookingResultTitleContainer}>
            <Text style={styles.bookingResultTitle}>Services:</Text>
            <Text style={styles.bookingResultTitle}>Time:</Text>
            <Text style={styles.bookingResultTitle}>Allergies:</Text>
          </View>
          <View
            style={[
              styles.bookingResultTitleContainer,
              styles.bookingResultValueContainer,
            ]}>
            <Text style={styles.bookingResultValue}>Hair Cut</Text>
            <Text style={styles.bookingResultValue}>10:20am - 11:00am</Text>

            <Text style={styles.bookingResultValue}>Allergic to blah ...</Text>
          </View>
        </View>
      </View>
      <Button style={styles.btn} mode="contained" onPress={handleDone}>
        Done
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bookingMessageContainer: {
    display: "flex",
    gap: 5,
  },
  // Booking Result
  bookingResultContainer: {
    width: "80%",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  bookingResult: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",

    gap: 30,
    alignItems: "center",
  },
  bookingResultTitleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
  },
  bookingResultValueContainer: {
    gap: 10,
  },
  bookingResultTitle: {
    fontSize: 16,
    fontWeight: "semibold",
    overflow: "hidden",
  },
  bookingResultValue: {
    fontSize: 16,
    fontWeight: "normal",
    overflow: "hidden",
    color: "#8B8B8B",
  },
  btn: {
    backgroundColor: "#116CE2",
    width: "100%",
    color: "white",
  },
});
export default BookingSuccess;
