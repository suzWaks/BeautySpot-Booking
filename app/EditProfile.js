import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

// import { Button, Card, Dialog, Portal, Provider } from "react-native-paper";

import {
  TextInput,
  Button,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";
// import { Link } from 'expo-router';
import { useNavigation } from "@react-navigation/native";
// const { width } = Dimensions.get("window");

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("Phurpa Tshering");
  const [email, setEmail] = useState("yamea@gmail.com");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassconfirm] = useState("");
  const [phone, setPhone] = useState("17171788");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const logout = () => {
    navigation.navigate("Book");
    hideDialog();
  };

  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureOldTextEntry, setSecureOldTextEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const toggleOldPasswordVisibility = () => {
    setSecureOldTextEntry(!secureOldTextEntry);
  };

  // Function to check if passwords match
  const comparePasswords = () => {
    if (password !== passconfirm) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 22,
      }}
    >
      <Provider>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignItems: "center",
              marginVertical: 22,
            }}
          >
            <TouchableOpacity onPress={handleImageSelection}>
              <Image
                source={{ uri: selectedImage }}
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 85,
                  borderWidth: 2,
                  borderColor: "purple",
                }}
              />

              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 10,
                  zIndex: 9999,
                }}
              >
                <MaterialIcons name="photo-camera" size={32} color="purple" />
              </View>
            </TouchableOpacity>
          </View>
          {/* suz */}

          <View style={styles.container}>
            <TextInput
              label="User Name"
              activeOutlineColor="#116CE2"
              outlineColor="#8B8B8B"
              // placeholder="Firstname Lastname"
              value={name}
              onChangeText={(value) => setName(value)}
              mode="outlined"
              style={styles.input}
              left={<TextInput.Icon icon="account-outline" />}
            />
            <TextInput
              label="Email"
              activeOutlineColor="#116CE2"
              outlineColor="#8B8B8B"
              // placeholder="abcd@gmail.com"
              value={email}
              onChangeText={(value) => setEmail(value)}
              mode="outlined"
              style={styles.input}
              left={<TextInput.Icon icon="email-outline" />}
            />
            <TextInput
              label="Phone Number"
              activeOutlineColor="#116CE2"
              outlineColor="#8B8B8B"
              value={phone}
              onChangeText={(value) => setPhone(value)}
              placeholder="17123456"
              mode="outlined"
              style={styles.input}
              left={<TextInput.Icon icon="phone-outline" />}
              keyboardType="numeric"
            />

            <TextInput
              label="Old Password"
              activeOutlineColor="#116CE2"
              outlineColor="#8B8B8B"
              placeholder="*********"
              mode="outlined"
              style={styles.input}
              right={
                <TextInput.Icon
                  icon={secureOldTextEntry ? "eye" : "eye-off"}
                  onPress={toggleOldPasswordVisibility}
                />
              }
              left={<TextInput.Icon icon="lock-outline" />}
              secureTextEntry={secureOldTextEntry}
            />
            <TextInput
              label="New Password"
              activeOutlineColor="#116CE2"
              outlineColor="#8B8B8B"
              placeholder="*********"
              value={password}
              onChangeText={(value) => setPassword(value)}
              // width="width"
              mode="outlined"
              style={styles.input}
              right={
                <TextInput.Icon
                  icon={secureTextEntry ? "eye" : "eye-off"}
                  onPress={togglePasswordVisibility}
                />
              }
              left={<TextInput.Icon icon="lock-outline" />}
              secureTextEntry={secureTextEntry}
            />
            <TextInput
              label="Confirm Password"
              activeOutlineColor="#116CE2"
              outlineColor="#8B8B8B"
              placeholder="*********"
              // width="width"
              value={passconfirm}
              onChangeText={(value) => {
                setPassconfirm(value);
                comparePasswords();
              }}
              mode="outlined"
              style={styles.input}
              right={
                <TextInput.Icon
                  icon={secureTextEntry ? "eye" : "eye-off"}
                  onPress={togglePasswordVisibility}
                />
              }
              left={<TextInput.Icon icon="lock-outline" />}
              secureTextEntry={secureTextEntry}
            />
            {!passwordsMatch && (
              <Text style={styles.errorText}>Passwords do not match</Text>
            )}

            <Button
              style={{
                backgroundColor: "#116CE2",
                height: 44,
                width: "100%",
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={showDialog}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Save Change
              </Text>
            </Button>
          </View>
        </ScrollView>
        {/* Dialog component */}
        <Portal>
          <Dialog
            visible={visible}
            onDismiss={hideDialog}
            style={{ backgroundColor: "white" }}
          >
            <Dialog.Title>Confirmation</Dialog.Title>
            <Dialog.Content>
              <Text>Are you sure you want to save the work?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button onPress={logout}>Yes, I'm sure </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  labelView: {
    height: 44,
    // width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
  },
  inputContainer: {
    flexDirection: "column",
    marginBottom: 6,
  },
  errorText: {
    color: "red",
  },

  // suz

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    padding: 10,
  },
  input: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "white",
  },
  gbtn: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
