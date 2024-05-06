import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserReg from './UserReg';
import SPReg from './SPReg';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const Register = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator >
            <Tab.Screen name="User" component={UserReg} />
            <Tab.Screen name="Service Provider" component={SPReg} />
        </Tab.Navigator>

    )
}

export default Register
