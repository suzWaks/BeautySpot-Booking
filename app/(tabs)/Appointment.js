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

var { width, height } = Dimensions.get("window");
const Appointment = () => {
  // Calendar for the date
  //   const [isModalVisible, setIsModalVisible] = useState(false);
  //   const today = new Date();
  //   const startDate = getFormatedDate(today, "YYYY/MM/DD");
  //   const [selectedStartDate, setSelectedStartDate] = useState("");
  //   const [startedDate, setStartedDate] = useState("2024/12/22");

        const [time,setTime]=useState([1,2,3,4,5,6,7])

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  // Logic to render the date, day and week day

  const [text, setText] = React.useState("");

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
            {/* <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Text
                style={{
                  color: COLORS.GRAY,
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.medium,
                }}
              >
                {startedDate}
              </Text>
            </TouchableOpacity>

            <Modal
              visible={isModalVisible}
              animationType="fade"
              transparent={true}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <DatePicker
                    mode="calendar"
                    selected={startedDate}
                    onDateChange={handleChangeStartDate}
                    onSelectedChange={(date) => setSelectedStartDate(date)}
                    options={{
                      backgroundColor: "#97637",
                      textHeaderColor: "#000",
                      textDefaultColor: "#FFFFFF",
                      selectedTextColor: "#000",
                      mainColor: "#469ab6",
                      textSecondaryColor: "#FFFFFF",
                      borderColor: "rgba(122,146,156,0.1)",
                    }}
                  />
                  <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                    <Text>submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal> */}
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

        <View style={{ height: "20%", marginTop: "10%" }}>
          <Text
            style={{
              marginLeft: 28,
              color: "gray",
              marginTop: height * 0.04,
              fontFamily: FONTS.regular,
              fontSize: SIZES.medium,
            }}
          >
            Available Slots
          </Text>
          {/* Time slots */}
          <Time data={time} style={styles.slots}/>
        </View>

        <View style={styles.allergiesContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox />
            <Text>Allergies?</Text>
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
                height: "90%",
                width: "90%",
                alignSelf: "center",
                backgroundColor: "#D4D4D4",
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "#D4D4D4",
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            height: "10%",
            marginBottom: "60%",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={{ textAlign: "center", color: "#8F0000" }}>
              Submit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={{ textAlign: "center", color: "#8F0000" }}>
              Cancel
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
  slots: {
    width: width,
    height: height * 0.26,
    backgroundColor: COLORS.WHITE,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-around",
    alignSelf: "center",
    marginTop: height * 0.02,
    marginBottom: height * 0.2,
  },
  allergiesContainer: {
    marginTop: "10%",
    height: "20%",
  },
  button: {
    height: "50%",
    width: "40%",
    borderWidth: 2,
    borderColor: "#8F0000",
    justifyContent: "center",
    borderRadius: 35,
  },
});
