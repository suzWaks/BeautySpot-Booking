import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './Login';
import UserReg from './UserReg';
import SPReg from './SPReg';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const Register = () => {
    const navigation = useNavigation();
    return (

        <Tab.Navigator>
            <Tab.Screen name="User" component={UserReg} />
            <Tab.Screen name="Service Provider" component={SPReg} />
        </Tab.Navigator>

    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
