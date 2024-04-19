import { Feather, MaterialCommunityIcons, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { Tabs, router } from 'expo-router';
import { View } from 'react-native';

//Bottom tab navigation
export default function TabLayout() {
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
                        title: 'Home',
                        tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
                        headerRight: () => (
                            <View style={{ paddingRight: 10 }}>
                                <FontAwesome5 onPress={() => router.navigate('/Profile')} name="user-circle" size={24} color="white" />
                            </View>
                        ),
                    }}
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
                />
            </Tabs>
        </>

    );
}

