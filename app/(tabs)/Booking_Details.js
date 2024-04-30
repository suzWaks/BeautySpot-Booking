import React, { useState } from "react";
import {
    View,
    ScrollView,
    Image,
    Text,
    StyleSheet,
    TextInput,
    Alert,
} from "react-native";
import { Button, Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const BookingDetails = () => {
    const [textInputValue, setTextInputValue] = useState("11/04/2024");
    const [duration, setDuration] = useState("10hrs 30mins");
    const [time, setTime] = useState("11:00AM - 11:10 AM");
    const [service, setService] = useState("PHUR TSHE");
    const [sertype, setSerType] = useState("02210215");

    const [livetime, setLiveTime] = React.useState();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setLiveTime(new Date().toLocaleString());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <View>
            <ScrollView>
                <Text style={{ padding: 10 }}>Your current booking </Text>
                <Card style={style.cardHeader}>
                    <Card.Content style={style.cardContent}>
                        <View
                            style={{ flexDirection: "row", alignSelf: "center", padding: 27 }}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    source={require("../../assets/icon.png")}
                                    style={style.image}
                                ></Image>
                            </View>
                            <View>
                                <TextInput
                                    style={style.textHeader}
                                    value={service}
                                    onChangeText={setService}
                                    editable={false}
                                ></TextInput>
                                <TextInput
                                    style={[style.textHeader, { fontSize: 12 }]}
                                    value={sertype}
                                    onChangeText={setSerType}
                                    editable={false}
                                ></TextInput>
                            </View>
                        </View>
                    </Card.Content>

                    <Card.Content
                        style={{
                            backgroundColor: "#116CE2",
                            borderTopEndRadius: 10,
                            borderTopStartRadius: 10,
                            borderRadius: 20,
                            shadowColor: "#116CE2",
                            elevation: 20,
                            padding: 30,
                            zIndex: 999,
                        }}
                    >
                        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
                            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Ionicons
                                        name="time-outline"
                                        size={25}
                                        style={{ color: "white" }}
                                    />
                                    <Text style={style.numbers}>Duration :</Text>
                                </View>
                                <TextInput
                                    style={style.numbers}
                                    value={duration}
                                    onChangeText={setDuration}
                                    editable={false}
                                ></TextInput>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        marginTop: 15,
                                    }}
                                >
                                    <View style={{ flexDirection: "row" }}>
                                        <Ionicons
                                            name="calendar-outline"
                                            size={23}
                                            style={{ color: "white", marginRight: 5 }}
                                        />

                                        <Text style={style.numbers}>Date:</Text>
                                    </View>
                                    <TextInput
                                        style={style.numbers}
                                        value={textInputValue}
                                        onChangeText={setTextInputValue}
                                        editable={false}
                                    ></TextInput>
                                </View>
                            </View>

                            <View style={style.verticleLine}></View>
                            <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
                                {time.split("-").map((item, index, array) => (
                                    <View
                                        key={index}
                                        style={{
                                            flexDirection: "row",
                                        }}
                                    >
                                        <TextInput
                                            style={[
                                                style.numbers,
                                                {
                                                    fontWeight: "bold",
                                                    fontSize: 15,
                                                    alignSelf: "center",
                                                    marginTop: 12,
                                                },
                                            ]}
                                            editable={false}
                                            value={item.trim()}
                                            onChangeText={(text) => {
                                                {
                                                    setTime;
                                                }
                                            }}
                                        />
                                        {index !== array.length - 1 && (
                                            <Text style={[style.numbers, { marginTop: 15 }]}>
                                                {" "}
                                                -{" "}
                                            </Text>
                                        )}
                                    </View>
                                ))}
                            </View>
                        </View>
                    </Card.Content>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={style.liveTime}>Time until your turn:</Text>
                        <Text>{livetime}</Text>
                    </View>

                    <View style={style.buttonContainer}>
                        <Button
                            title="Cancel"
                            style={style.Cancelbutton}
                            onPress={() => Alert.alert("Cancellation successful")}
                        >
                            <Text
                                style={{
                                    color: "red",
                                }}
                            >
                                Cancel Booking
                            </Text>
                        </Button>
                        <Button
                            title="Reschedule"
                            style={style.schedulebutton}
                        // onPress={pressHandler}
                        >
                            <Text
                                style={{
                                    color: "#116CE2",
                                }}
                            >
                                Reschedule
                            </Text>
                        </Button>
                    </View>
                </Card>

                {/* 2 */}

                {/* 3 */}
            </ScrollView>
        </View>
    );
};
export default BookingDetails;

const style = StyleSheet.create({
    textHeader: {
        padding: 2,
        fontSize: 15,
        marginLeft: "15%",
        fontWeight: "900",
        color: "#2D7FE9",
        justifyContent: "space-between",
    },

    cardHeader: {
        backgroundColor: "white",
        padding: 10,
        marginTop: "4%",
        width: "97%",
        marginLeft: "1.5%",
        marginEnd: "1.5%",
    },
    cardContent: {
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderColor: "blue",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    image: {
        height: 50,
        width: 50,
        alignSelf: "center",
        borderRadius: 100,
    },

    liveTime: {
        alignSelf: "center",
        margin: 10,
        fontStyle: "normal",
        fontSize: 15,
    },

    buttonContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    Cancelbutton: {
        textAlign: "center",
        width: "50%",
        color: "#E30029",
        borderWidth: 1,
        borderColor: "#E30029",
        borderRadius: 15,
        marginEnd: 20,
    },
    schedulebutton: {
        textAlign: "center",
        width: "50%",
        borderWidth: 1,
        borderColor: "#116CE2",
        color: "#116CE2",
        borderRadius: 15,
        marginEnd: 4,
    },
    rowFlex: {
        padding: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
    },
    verticleLine: {
        margin: 5,
        height: "100%",
        width: 1,
        backgroundColor: "yellow",
    },
    numbers: {
        fontSize: 16,
        // color: "#31C283",
        color: "#FFFFFF",
        fontWeight: "normal",
    },
    item: {
        backgroundColor: "blue",
        fontSize: 15,
        color: "#fff",
        margin: 2,
        padding: 3,
        textAlign: "right",
    },
});
