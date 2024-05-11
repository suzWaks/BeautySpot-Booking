import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import {
  Button,
  Dialog,
  Portal,
  TextInput,
  Provider,
} from "react-native-paper";
import { router } from "expo-router";

const Profile = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("Phurpa Tshering");
  const [email, setEmail] = useState("yamea@gmail.com");
  const [phone, setPhone] = useState("17171788");

  const pressHandler = () => {
    router.navigate("/EditProfile");
  };

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const logout = () => {
    Alert.alert("Logout successful");
    hideDialog();
  };

  return (
    <Provider>
      <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
        <View
          style={{
            padding: 10,
            width: "100%",
            backgroundColor: "#1877F2",
            height: 150,
          }}
        >
          {/* <TouchableOpacity
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop: 30,
            }}
          >
            <Image
              source={require("../assets/icon.png")}
              style={{ width: 30, height: 30, marginLeft: "auto" }}
            ></Image>
          </TouchableOpacity> */}
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/Profile.jpg")}
            style={{
              width: 110,
              height: 110,
              borderRadius: 100,
              marginTop: -60,
            }}
          ></Image>
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 8 }}>
            4Bits
          </Text>
        </View>
        <View
          style={{
            marginTop: "2%",
            borderBottomWidth: 1,
            borderColor: "lightgray",
            width: "100%",
          }}
        >
          <View style={{ backgroundColor: "white" }}>
            <View style={style.text}>
              <TextInput
                underlineColor="transparent"
                editable={false}
                value={name}
                onChangeText={(value) => setName(value)}
                style={[style.input, style.shadowProp]}
                underlineStyle={{ borderRadius: 100 }}
                left={<TextInput.Icon icon="account-outline" />}
              />
              <TextInput
                underlineColor="transparent"
                editable={false}
                value={email}
                onChangeText={(value) => setEmail(value)}
                style={style.input}
                left={<TextInput.Icon icon="email-outline" />}
              />
              <TextInput
                underlineColor="transparent"
                editable={false}
                value={phone}
                onChangeText={(value) => setPhone(value)}
                style={style.input}
                left={<TextInput.Icon icon="phone-outline" />}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        <View style={style.buttonContainer}>
          <Button
            icon={"logout"}
            title="Press me"
            style={style.button}
            onPress={showDialog}
          >
            Logout
          </Button>
          <Button
            icon={"square-edit-outline"}
            title="Press me"
            style={style.button}
            onPress={pressHandler}
          >
            Edit
          </Button>
        </View>
      </ScrollView>

      {/* Dialog component */}
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          // dialogContainerStyle={{ backgroundColor: "white" }}
        >
          <Dialog.Title>Logout</Dialog.Title>
          <Dialog.Content>
            <Text>Are you sure you want to logout?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={logout}>Logout</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default Profile;

const style = StyleSheet.create({
  textHeader: {
    padding: 3,
    fontSize: 15,
    marginLeft: "10%",
    fontWeight: "bold",
    color: "#2D7FE9",
    justifyContent: "space-between",
  },
  text: {
    padding: 10,
    backgroundColor: "rgba(17, 108, 226, 0.07)",
    marginEnd: "1%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  button: {
    textAlign: "center",
    width: 90,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 15,
    marginLeft: 20,
    marginEnd: 20,
  },
  input: {
    width: "100%",
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
