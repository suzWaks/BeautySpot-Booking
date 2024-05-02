import { View, Text, StyleSheet, Dimensions, Platform, KeyboardAvoidingView } from 'react-native'
import { useState } from 'react'
import Btns from '../components/button'
import { TextInput, Provider } from 'react-native-paper';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');
import { FONTS, SIZES, COLORS } from "../utils/theme";

const UserReg = () => {
    const navigation = useNavigation();
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const togglePasswordVisibility = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TextInput
                label="User Name"
                activeOutlineColor='#116CE2'
                outlineColor='#8B8B8B'
                placeholder='Firstname Lastname'
                mode='outlined'
                style={styles.input}
                left={<TextInput.Icon icon="account-outline" />}
                outlineStyle={{ borderRadius: 20, backgroundColor: "#ffffff" }}
            />
            <TextInput
                label="Email"
                activeOutlineColor='#116CE2'
                outlineColor='#8B8B8B'
                placeholder='abcd@gmail.com'
                mode='outlined'
                style={styles.input}
                left={<TextInput.Icon icon="email-outline" />}
                outlineStyle={{ borderRadius: 20, backgroundColor: "#ffffff" }}
            />
            <TextInput
                label="Phone Number"
                activeOutlineColor='#116CE2'
                outlineColor='#8B8B8B'
                placeholder='17123456'
                mode='outlined'
                style={styles.input}
                left={<TextInput.Icon icon="phone-outline" />}
                keyboardType="numeric"
                outlineStyle={{ borderRadius: 20, backgroundColor: "#ffffff" }}
            />

            <TextInput
                label="Password"
                activeOutlineColor='#116CE2'
                outlineColor='#8B8B8B'
                placeholder='*********'
                width='width'
                mode='outlined'
                style={styles.input}
                right={
                    <TextInput.Icon
                        icon={secureTextEntry ? "eye" : "eye-off"}
                        onPress={togglePasswordVisibility}
                    />
                }
                left={<TextInput.Icon icon="lock-outline" />}
                secureTextEntry={secureTextEntry}
                outlineStyle={{ borderRadius: 20, backgroundColor: "#ffffff" }}
            />
            <TextInput
                label="Confirm Password"
                activeOutlineColor='#116CE2'
                outlineColor='#8B8B8B'
                placeholder='*********'
                width='width'
                mode='outlined'
                style={styles.input}
                right={
                    <TextInput.Icon
                        icon={secureTextEntry ? "eye" : "eye-off"}
                        onPress={togglePasswordVisibility}
                    />
                }
                left={<TextInput.Icon icon="lock-outline" />}
                secureTextEntry={secureTextEntry}
                outlineStyle={{ borderRadius: 20, backgroundColor: "#ffffff" }}
            />
            <Btns
                title="Register"
                onPress={() => {
                    navigation.replace('Pages/Login');
                }}
                style={styles.input}
                margintop={30}
            />

            <Text style={{marginTop:20}}>Already have an account? <Link href='pages/Login' style={{ color: '#116ce2' }}>Login</Link></Text>
        </KeyboardAvoidingView>
    )
}

export default UserReg

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE_BG,
        alignItems: 'center',
        width: width,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    input: {
        width: '100%',
        marginBottom: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,

    },
})