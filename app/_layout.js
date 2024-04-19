import { Stack } from "expo-router";

//Top - app bar
export default () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#116CE2',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            {/* Configuring title on the stack manually */}
            <Stack.Screen name='index' options={{ title: 'Home' }} />
            <Stack.Screen name='BookingSuccess' options={{ title: 'Booking', presentation: 'modal' }} />
            <Stack.Screen name='(tabs)' options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen name='Splash' options={{ headerShown: false }} />
            <Stack.Screen name='Pages/Login' options={{ title:'Login', headerShown: false }} />
            <Stack.Screen
                name='Pages/Register'
                options={{
                    title: 'Register',
                    headerLeft: ()=> null,
                    headerStyle: {
                        backgroundColor: '#FFFFFF', // Change to your desired color
                    },
                    headerTintColor: '#116CE2',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />

        </Stack>
    );
}

