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
import { Button, Card, Dialog, Portal, Provider } from "react-native-paper";
import { router } from 'expo-router';

const Profile = () => {
  const [visible, setVisible] = useState(false);

  const pressHandler = () => {
    router.navigate('/EditProfile');
  };

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const logout = () => {
    Alert.alert("Logout successful");
    hideDialog();
  };

  return (
    <Provider>
      <View>
        <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
          <View>
            <Image
              source={require("../assets/icons/google.png")}
              style={{
                padding: 10,
                width: "100%",
                backgroundColor: "#1877F2",
                height: 150,
              }}
            ></Image>
          </View>

          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/icon.png")}
              style={{
                width: 110,
                height: 110,
                borderRadius: 100,
                marginTop: -50,
              }}
            ></Image>
            <Text style={{ fontSize: 25, fontWeight: "bold", padding: 8 }}>
              4Bits
            </Text>
          </View>
          <Card
            style={{
              marginTop: 20,
              borderBottomWidth: 1,
              borderColor: "lightgray",
              borderTopLeftRadius: 23,
              borderTopRightRadius: 23,
              width: "95%",
              marginLeft: "2.5%",
              marginEnd: "1%",
            }}
          >
            <Card.Title title="User Details" style={{ alignItems: "center" }} />
            <Card.Content style={{ backgroundColor: "white" }}>
              <View style={style.text}>
                <Text style={style.text}>Phurpa Tshering</Text>
                <Text style={style.text}>02210215.cst@rub.edu.bt</Text>
                <Text style={style.text}>IT Department</Text>
                <Text style={style.text}>3rd Year</Text>
              </View>
            </Card.Content>
          </Card>
          <Card
            style={{
              marginTop: 20,
              borderBottomWidth: 1,
              borderColor: "lightgray",
              borderTopLeftRadius: 23,
              borderTopRightRadius: 23,
              width: "95%",
              marginLeft: "2.5%",
              marginEnd: "1%",
              alignContent: "center",
            }}
          >
            <Card.Title title="Actions" style={{ alignItems: "center" }} />
            <Card.Content style={{ backgroundColor: "white" }}>
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
            </Card.Content>
          </Card>
        </ScrollView>
      </View>

      {/* Dialog component */}
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
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
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
});
