import { Feather, MaterialCommunityIcons, FontAwesome5, FontAwesome6, AntDesign } from '@expo/vector-icons';
import { Tabs, router } from 'expo-router';
import { View, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Role, useAuth } from '../../context/AuthContext';

//Bottom tab navigation
export default function TabLayout() {
    const { authState } = useAuth();
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarInactiveTintColor: '#116ce2',
                    tabBarActiveBackgroundColor: 'rgba(17, 108, 226, 0.05)',
                    tabBarStyle: {
                        borderRadius: 21,
                    },
                    tabBarItemStyle: {
                        borderRadius: 20,
                        margin: 5

                    },
                    tabBarShowLabel: false,
                    headerStyle: {
                        backgroundColor: '#116CE2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Tabs.Screen
                    name="Home"
                    options={{
                        title: '',
                        tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
                        headerRight: () => (
                            <TouchableOpacity onPress={() => router.navigate('/Profile')} style={{ paddingRight: 20 }}>
                                <Avatar.Image size={30} source={require('../../assets/Profile.jpg')} />
                            </TouchableOpacity>
                        ),
                    }}
                    redirect={authState?.role !== 'admin'}
                />
                <Tabs.Screen
                    name="Homeu"
                    options={{
                        title: '',
                        tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
                        headerRight: () => (
                            <TouchableOpacity onPress={() => router.navigate('/Profile')} style={{ paddingRight: 20 }}>
                                <Avatar.Image size={30} source={require('../../assets/Profile.jpg')} />
                            </TouchableOpacity>
                        ),
                    }}
                    redirect={authState?.role !== 'user'}
                />
                <Tabs.Screen
                    name="Appointment"
                    options={{
                        title: 'Appointment',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="calendar-check-outline" size={24} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="Review"
                    options={{
                        title: 'Review',
                        tabBarIcon: ({ color }) => <FontAwesome6 name="comments" size={24} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="Booking_Details"
                    options={{
                        title: 'Bookings',
                        tabBarIcon: ({ color }) => <Feather name="info" size={24} color={color} />,
                    }}
                    redirect={authState?.role !== 'user'}
                />
                <Tabs.Screen
                    name="AddService"
                    options={{
                        title: 'Service',
                        tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={24} color={color} />,
                    }}
                    redirect={authState?.role !== 'admin'}
                />
            </Tabs>
        </>

    );
}

