/** @format */

import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { useState } from "react";
import Btns from "../components/button";
import { TextInput, Button } from "react-native-paper";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { FONTS, SIZES } from "../utils/theme";

const { width } = Dimensions.get("window");

const Login = () => {
  const navigation = useNavigation();

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <TextInput
        label="Email"
        activeOutlineColor="#116CE2"
        outlineColor="#8B8B8B"
        placeholder="abcd@gmail.com"
        mode="outlined"
        style={styles.input}
        outlineStyle={{ borderRadius: 20 }}
        left={<TextInput.Icon icon="email-outline" />}
      />

      <TextInput
        label="Password"
        activeOutlineColor="#116CE2"
        outlineColor="#8B8B8B"
        placeholder="*********"
        width="width"
        mode="outlined"
        outlineStyle={{ borderRadius: 20 }}
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
      <Btns
        title="Log in"
        onPress={() => {
          navigation.navigate("(tabs)");
        }}
        margintop="20"
      />
      <Text style={styles.div}>or</Text>

      <Button
        icon={({ size }) => (
          <Image
            source={require("../../assets/icons/google.png")}
            style={{ width: size, height: size }}
          />
        )}
        mode="outlined"
        textColor="#116CE2"
        labelStyle={{ fontSize: 16 }}
        style={styles.gbtn}
        onPress={() => console.log("Pressed")}>
        Sign in with Google
      </Button>

      <Text>
        Don't have an account?{" "}
        <Link href="Pages/Register" style={{ color: "#116ce2" }}>
          Register now
        </Link>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    paddingHorizontal: 30,
  },
  input: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "transparent",
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
    fontFamily: FONTS.bold,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  div: {
    padding: 20,
  },
});
