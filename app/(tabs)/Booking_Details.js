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
import { Button, Card, Provider, Portal, Dialog } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const BookingDetails = () => {
  const [name, setName] = useState("Phurpa Tshering");
  const [phone, setPhone] = useState("17800681");
  const [textInputValue, setTextInputValue] = useState("11/04/2024");
  const [duration, setDuration] = useState("10hrs 30mins");
  const [starttime, setStartime] = useState("11:00 AM ");
  const [endtime, setEndime] = useState("11:10 AM");
  const [service, setService] = useState("PHUR TSHE");
  const [sertype, setSerType] = useState("U-SHAPE");
  const [visible, setVisible] = useState(false);

  const [livetime, setLiveTime] = React.useState();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLiveTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const cancel = () => {
    Alert.alert("Cancelled successfully");
    hideDialog();
  };

  return (
    <Provider>
      <View>
        <ScrollView>
          <Text style={{ padding: 10 }}>Your current booking </Text>
          <Card style={style.cardHeader}>
            <View style={style.cardContent}>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  padding: 27,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../../assets/Profile.jpg")}
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
                    style={[style.textHeader, { fontSize: 12, marginTop: -9 }]}
                    value={sertype}
                    onChangeText={setSerType}
                    editable={false}
                  ></TextInput>
                </View>
              </View>
            </View>

            <Card.Content
              style={{
                backgroundColor: "#116CE2",
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                borderRadius: 20,
                shadowColor: "#116CE2",
                marginTop: -25,
                padding: 26,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignSelf: "center",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignSelf: "center",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons
                      name="time-outline"
                      size={25}
                      style={{ color: "white" }}
                    />
                    <Text style={style.numbers}>Duration {"       "}:</Text>
                  </View>
                  <TextInput
                    style={[style.details, { marginLeft: "10%" }]}
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
                        size={25}
                        style={{ color: "white", marginRight: 5 }}
                      />

                      <Text style={style.numbers}>Date {"             "}:</Text>
                    </View>
                    <TextInput
                      style={[style.details, { marginLeft: "11%" }]}
                      value={textInputValue}
                      onChangeText={setTextInputValue}
                      editable={false}
                    ></TextInput>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "center",
                  }}
                >
                  <TextInput
                    style={style.time}
                    editable={false}
                    value={starttime}
                    onChangeText={setStartime}
                  />
                  <View style={[style.verticleLine, { marginTop: 25 }]}></View>
                  <TextInput
                    style={style.time}
                    editable={false}
                    value={endtime}
                    onChangeText={setEndime}
                  />
                </View>
              </View>
            </Card.Content>

            <View style={{ flexDirection: "row" }}>
              <Text style={style.liveTime}>Time until your turn:</Text>
              <TextInput style={{ fontSize: 15 }}>{livetime}</TextInput>
            </View>

            <View style={style.buttonContainer}>
              <Button
                title="Cancel"
                style={style.Cancelbutton}
                onPress={showDialog}
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
          <Card style={style.cardHeader}>
            <View style={style.cardContent}>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  padding: 27,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../../assets/Profile.jpg")}
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
                    style={[style.textHeader, { fontSize: 12, marginTop: -9 }]}
                    value={sertype}
                    onChangeText={setSerType}
                    editable={false}
                  ></TextInput>
                </View>
              </View>
            </View>

            <Card.Content
              style={{
                backgroundColor: "#116CE2",
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                borderRadius: 20,
                shadowColor: "#116CE2",
                marginTop: -25,
                padding: 26,
              }}
            >
              <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="person-outline"
                    size={25}
                    style={{ color: "white" }}
                  />
                  <Text style={style.numbers}>Name {"           "}:</Text>
                </View>
                <TextInput
                  style={style.details}
                  value={name}
                  onChangeText={setName}
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
                      name="call-outline"
                      size={25}
                      style={{ color: "white", marginRight: 5 }}
                    />

                    <Text style={style.numbers}>Phone No {"   "}:</Text>
                  </View>
                  <TextInput
                    style={[style.details, { marginLeft: "13%" }]}
                    value={phone}
                    onChangeText={setPhone}
                    editable={false}
                  ></TextInput>
                </View>
              </View>
              <View style={style.horizontalLine}></View>
              {/* time */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignSelf: "center",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignSelf: "center",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons
                      name="time-outline"
                      size={25}
                      style={{ color: "white" }}
                    />
                    <Text style={style.numbers}>Duration {"       "}:</Text>
                  </View>
                  <TextInput
                    style={[style.details, { marginLeft: "10%" }]}
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
                        size={25}
                        style={{ color: "white", marginRight: 5 }}
                      />

                      <Text style={style.numbers}>Date {"             "}:</Text>
                    </View>
                    <TextInput
                      style={[style.details, { marginLeft: "11%" }]}
                      value={textInputValue}
                      onChangeText={setTextInputValue}
                      editable={false}
                    ></TextInput>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "center",
                  }}
                >
                  <TextInput
                    style={style.time}
                    editable={false}
                    value={starttime}
                    onChangeText={setStartime}
                  />
                  <View style={[style.verticleLine, { marginTop: 25 }]}></View>
                  <TextInput
                    style={style.time}
                    editable={false}
                    value={endtime}
                    onChangeText={setEndime}
                  />
                </View>
              </View>
            </Card.Content>

            <View style={{ flexDirection: "row" }}>
              <Text style={style.liveTime}>Time until your turn:</Text>
              <TextInput style={{ fontSize: 15 }}>{livetime}</TextInput>
            </View>

            <View style={style.buttonContainer}>
              <Button
                title="Cancel"
                style={style.Cancelbutton}
                onPress={showDialog}
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

          {/* 3 */}
        </ScrollView>
        {/* Dialog component */}
        <Portal>
          <Dialog
            visible={visible}
            onDismiss={hideDialog}
            // dialogContainerStyle={{ backgroundColor: "white" }}
          >
            <Dialog.Title>Confirmation</Dialog.Title>
            <Dialog.Content>
              <Text>Are you sure you want to cancel the Booking?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button onPress={cancel}>Yes</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};
export default BookingDetails;

const style = StyleSheet.create({
  textHeader: {
    padding: 2,
    fontSize: 23,
    fontFamily: "sans-serif-medium",
    marginLeft: "15%",
    fontWeight: "400",
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
    borderColor: "#116CE2",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  image: {
    height: 50,
    width: 50,
    alignSelf: "center",
    borderRadius: 9,
  },
  time: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    marginTop: 0,
    paddingTop: 7,
    color: "white",
  },

  liveTime: {
    alignSelf: "center",
    margin: 20,
    // fontStyle: "bold",
    fontWeight: "bold",
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
    // height: "100%",
    height: 1,
    width: "3%",
    backgroundColor: "yellow",
  },
  numbers: {
    fontSize: 16,
    // color: "#31C283",
    color: "#FFFFFF",
    fontWeight: "normal",
    marginLeft: 10,
    alignSelf: "center",
  },
  details: {
    fontSize: 16,
    // color: "#31C283",
    color: "#FFFFFF",
    fontWeight: "normal",
    alignSelf: "center",
    marginLeft: "11%",
  },
  item: {
    backgroundColor: "blue",
    fontSize: 15,
    color: "#fff",
    margin: 2,
    padding: 3,
    textAlign: "right",
  },
  horizontalLine: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginVertical: 10,
  },
});
