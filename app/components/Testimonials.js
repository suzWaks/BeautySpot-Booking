/** @format */

import React from "react";

import { Dimensions, Text, View, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";

function Testimonials() {
  const width = Dimensions.get("window").width - 20;
  return (
    <Carousel
      loop
      width={width}
      height="200"
      autoPlay={true}
      data={[...new Array(5).keys()]}
      scrollAnimationDuration={5000}
      renderItem={({ index }) => (
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            display: "flex",
            flexDirection: "column",
            padding: 20,
            borderColor: "#1877F2",
            borderRadius: 10,
            justifyContent: "center",
            gap: 20,
            zIndex: 1,
            overflow: "visible",
            marginLeft: 10,
            marginRight: 25,
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Image source={require("../../assets/right.png")} style={styles.quote} />
          <Image
            source={require("../../assets/left.png")}
            style={styles.unquote}
          />
          <Text style={styles.testimonial}>
            The salon's skilled professionals provided top-notch services,
            leaving me not only looking but also feeling fantastic
          </Text>
          <View style={styles.reviewerContainer}>
            <Text style={styles.reviewer}>KINLEY DORJI</Text>
            <View style={styles.reviewerRating}>
              <Icon name="star" size={25} color="#1877F2" />
              <Icon name="star" size={25} color="#1877F2" />
              <Icon name="star" size={25} color="#1877F2" />
              <Icon name="star-outline" size={25} color="#1877F2" />
              <Icon name="star-outline" size={25} color="#1877F2" />
              {/* <Icon name="rocket" size={30} color="#900" /> */}
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  testimonial: {
    textAlign: "justify",
    fontSize: 16,
    paddingTop: 30,
  },
  reviewerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewer: {
    fontWeight: "bold",
    color: "#8B8B8B",
  },
  reviewerRating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  quote: {
    position: "absolute",
    top: -15,
    left: 20,
    zIndex: 1000,
  },
  unquote: {
    position: "absolute",
    zIndex: 1000,
    top: 140,
    right: 20,
  },
});
export default Testimonials;
