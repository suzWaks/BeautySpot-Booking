import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Icon, MD3Colors, Checkbox } from "react-native-paper";
import DatePicker from "react-native-modern-datepicker";
import getFormatedDate from "react-native-modern-datepicker";
import DateCard from "../components/Booking/DateCard";
import DropdownCom from "../components/Booking/DropdownCom";
import Time from "../components/Booking/Time";
import CheckBox from "../components/Booking/CheckBox";
import { FONTS, COLORS, SIZES } from "../utils/theme";
import {button} from '../components/button'

var { width, height } = Dimensions.get("window");
const Appointment = () => {
  const [time, setTime] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);
  const [currentDate, setCurrentDate] = useState(getDate());

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  //Function to get current date
  function getDate() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    return `${months[month]}, ${year}`;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingBottom: 80 }}>
        <View
          style={{
            backgroundColor: COLORS.WHITE,
            height: height * 0.2,
            width: width,
            justifyContent: "center",
            marginTop: height * 0.02,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontWeight: "bold",
                fontSize: SIZES.medium,
              }}
            >
              Choose date
            </Text>

            {/* current date */}
            <TouchableWithoutFeedback>
              <Text
                style={{
                  color: COLORS.GRAY,
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.medium,
                }}
              >
                {currentDate}
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.datecard}>
            <View
              style={{
                width: "50%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* Date Card */}
              <DateCard
                currentDay="Today"
                date="10"
                week="Sunday"
                backgroundColor="#116CE2"
                textColor="white"
              />
              <DateCard
                currentDay="Tommorrow"
                date="34"
                week="Monday"
                backgroundColor="white"
                textColor="#116CE2"
              />
            </View>
          </View>
        </View>

        {/* Dropdown */}
        <View style={styles.services}>
          <Text style={styles.service_text}>Choose Service</Text>
          <DropdownCom style={styles.DropdownCom} />
        </View>

        <View style={styles.services}>
          <Text style={styles.service_text}>Choose Category</Text>
          <DropdownCom style={styles.DropdownCom} />
        </View>

        <View style={{ height: height * 0.25, marginTop: height * 0.01 }}>
          <Text
            style={{
              marginLeft: 28,
              color: "gray",
              marginTop: height * 0.04,
              marginBottom: height * 0.02,
              fontFamily: FONTS.regular,
              fontSize: SIZES.medium,
            }}
          >
            Available Slots
          </Text>
          {/* Time slots */}
          <View
            style={{
              width: width,
              height: height * 0.22,
              backgroundColor: COLORS.WHITE,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Time data={time} />
          </View>
        </View>

            {/* CheckBox and Input */}
        <View style={styles.allergiesContainer}>
          <View style={{ flexDirection: "row", alignItems: "center",marginLeft:width*0.05 }}>
            <CheckBox />
            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.medium }}>
              Allergies?
            </Text>
          </View>
          <View style>
            <TextInput
              placeholder="Write the review"
              placeholderTextColor="#999"
              textAlignVertical="top"
              editable
              multiline
              numberOfLines={8}
              style={{
                padding: 10,
                height: height*0.15,
                width: width*0.9,
                alignSelf: "center",
                backgroundColor:COLORS.WHITE,
                borderRadius: 10,
                borderWidth: 1,
                borderColor:"#EEEEEE",
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: height*0.1,
            marginBottom: height*0.2,
            marginTop:height*0.00009,
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={{ textAlign: "center", color: "#8F0000",fontFamily:FONTS.medium}}>
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button,{backgroundColor:COLORS.PRIMARY}]}>
            <Text style={{ textAlign: "center", color: "white" ,fontFamily:FONTS.medium}}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: COLORS.WHITE_BG,
  },
  contentcontainer: {
    flexGrow: 1, // Allow content to expand and fill available space
    paddingBottom: 20, // Add some padding for visual balance (optional)
  },

  scrollViewContent: {
    paddingBottom: 40,
  },
  Modal: {},
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 160,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#97637",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  datecard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: height * 0.02,
    marginBottom: height * 0.02,
  },
  services: {
    flex: 1,
    alignContent: "flex-start",
    marginTop: height * 0.05,
  },
  service_text: {
    marginLeft: 28,
    color: "gray",
    marginBottom: 10,
    fontFamily: FONTS.regular,
    fontSize: SIZES.medium,
    color: COLORS.GRAY,
  },
  allergiesContainer: {
    height:height*0.26,
    backgroundColor:COLORS.WHITE_BG,
    marginTop:height*0.09
  },
  button: {
    height: height*0.06,
    width: width*0.3,
    justifyContent: "center",
    borderRadius: 35,
    borderWidth:1,
    marginHorizontal:10,
  },
});
