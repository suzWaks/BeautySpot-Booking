import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { useState } from 'react'
import Btns from '../components/button'
import { TextInput, Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

const UserReg = () => {
    const navigation = useNavigation();
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const togglePasswordVisibility = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <View style={styles.container}>

            <TextInput
                label="User Name"
                activeOutlineColor='#116CE2'
                outlineColor='#8B8B8B'
                placeholder='Firstname Lastname'
                mode='outlined'
                style={styles.input}
                left={<TextInput.Icon icon="account-outline" />}
            />
            <TextInput
                label="Email"
                activeOutlineColor='#116CE2'
                outlineColor='#8B8B8B'
                placeholder='abcd@gmail.com'
                mode='outlined'
                style={styles.input}
                left={<TextInput.Icon icon="email-outline" />}
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
            />
            <TextInput
                label="Salon Name"
                activeOutlineColor='#116CE2'
                outlineColor='#8B8B8B'
                mode='outlined'
                style={styles.input}
                left={<TextInput.Icon icon="home-roof" />}
            />
            <TextInput
                label="Salon License Number"
                activeOutlineColor='#116CE2'
                outlineColor='#8B8B8B'
                mode='outlined'
                style={styles.input}
                left={<TextInput.Icon icon="file-document-outline" />}
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
            />
            <Btns
                title="Register"
                onPress={() => {
                    navigation.replace('Pages/Login');
                }}
                style={styles.input}
            />

            <Text>Already have an account? <Link href='Pages/Login' style={{ color: '#116ce2' }}>Login</Link></Text>

        </View>
    )
}

export default UserReg

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        paddingHorizontal: 30,
    },
    input: {
        width: '100%',
        marginBottom: 20,
    },
    gbtn: {
        width: '100%',
        height: 50,
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,

    },
})