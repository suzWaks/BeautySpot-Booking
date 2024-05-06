/** @format */

import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { useState } from "react";
import Btns from "../components/button";
import { TextInput, Button } from "react-native-paper";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { FONTS, SIZES, COLORS } from "../utils/theme";
import { useAuth } from '../../context/AuthContext';

const { width } = Dimensions.get("window");

const Login = () => {
  const navigation = useNavigation();

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };


  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const { onLogin } = useAuth();

  const onSignInPress = async () => {
    onLogin(username, password);
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
        outlineStyle={{ borderRadius: 20, backgroundColor: "#ffffff" }}
        left={<TextInput.Icon icon="email-outline" />}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        label="Password"
        activeOutlineColor="#116CE2"
        outlineColor="#8B8B8B"
        placeholder="*********"
        width="width"
        mode="outlined"
        outlineStyle={{ borderRadius: 20, backgroundColor: "#ffffff" }}
        style={styles.input}
        right={
          <TextInput.Icon
            icon={secureTextEntry ? "eye" : "eye-off"}
            onPress={togglePasswordVisibility}
          />
        }
        left={<TextInput.Icon icon="lock-outline" />}
        secureTextEntry={secureTextEntry}
        value={password}
        onChangeText={setPassword}
      />
      <Btns
        title="Log in"
        onPress={onSignInPress}
        margintop={50}
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
        labelStyle={{ fontSize: SIZES.medium, fontFamily: FONTS.medium }}
        style={styles.gbtn}
        onPress={() => console.log("Pressed")}>
        Login with Google
      </Button>

      <Text>
        Don't have an account?{" "}
        <Link href="pages/Register" style={{ color: "#116ce2" }}>
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
    backgroundColor: COLORS.WHITE_BG,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    paddingHorizontal: 30,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "transparent",
  },
  gbtn: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#ffffff"

  },
  header: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xxLarge,
    marginBottom: 50,
  },
  div: {
    padding: 10,
    fontSize: SIZES.medium
  },
});
