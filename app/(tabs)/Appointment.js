import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
    SafeAreaView,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import { Icon, MD3Colors, Checkbox } from "react-native-paper";
import DatePicker from "react-native-modern-datepicker";
import getFormatedDate from "react-native-modern-datepicker";
import DateCard from "../components/Booking/DateCard";
import DropdownCom from "../components/Booking/DropdownCom";
import Time from "../components/Booking/Time";
import CheckBox from "../components//Booking/CheckBox";


const Appointment = () => {
    // Calendar for the date
    const [isModalVisible, setIsModalVisible] = useState(false);
    const today = new Date();
    const startDate = getFormatedDate(today, "YYYY/MM/DD");
    const [selectedStartDate, setSelectedStartDate] = useState("");
    const [startedDate, setStartedDate] = useState("2024/12/22");

    function handleChangeStartDate(propDate) {
        setStartedDate(propDate);
    }

    // Logic to render the date, day and week day

    const [text, setText] = React.useState("");

    return (

        <ScrollView contentContainerStyle={styles.scrollViewContent} scrollEnabled>
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                    }}
                >
                    <Text>Choose date</Text>
                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                        <Text style={{ color: "gray" }}>{startedDate}</Text>
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
                                        backgroundColor: "#116ce2",
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
                    </Modal>
                </View>

                <View style={styles.datecard}>
                    <View
                        style={{
                            width: "50%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
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

                <View style={styles.services}>
                    <Text style={{ marginLeft: 28, color: "gray", marginBottom: 10 }}>
                        Choose Service
                    </Text>
                    <DropdownCom style={styles.DropdownCom} />
                </View>

                <View style={styles.services}>
                    <Text style={{ marginLeft: 28, color: "gray", marginBottom: 10 }}>
                        Choose Category
                    </Text>
                    <DropdownCom style={styles.DropdownCom} />
                </View>
                <View style={{ width: "100%", height: "23%" }}>
                    <Text style={{ marginLeft: 28, color: "gray", marginTop: 15 }}>
                        Available Slots
                    </Text>
                    <View style={styles.slots}>
                        <Time style={styles.time} />
                        <Time style={styles.time} />
                        <Time style={styles.time} />
                        <Time style={styles.time} />
                    </View>
                </View>

                <View style={styles.allergiesContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <CheckBox />
                        <Text>Allergies?</Text>
                    </View>
                    <TextInput
                        style={{ width: "60%", alignSelf: "center" }}
                        placeholder="write your comments"
                        value={text}
                        multiline={true}
                        onChangeText={(text) => setText(text)}
                    />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <TouchableOpacity>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Appointment;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    contentcontainer: {
        flexGrow: 1, // Allow content to expand and fill available space
        paddingBottom: 20, // Add some padding for visual balance (optional)
    },
    Navigation: {
        width: "100%",
        height: "11%",
        backgroundColor: "#116ce2",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    scrollViewContent: {
        paddingBottom: 20,
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
        backgroundColor: "#116ce2",
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
        marginTop: 40,
        justifyContent: "center",
    },
    services: {
        alignContent: "flex-start",
        marginTop: 30,
    },
    slots: {
        width: "80%",
        height: "70%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "space-around",
        alignSelf: "center",
        marginTop: 10,
    },
    commentContainer: {
        backgroundColor: "purple",
        padding: 20,
        margin: 30,
    },
});


