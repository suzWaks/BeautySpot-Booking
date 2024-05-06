/** @format */

import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const StackLayout = () => {
  const { authState } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(tabs)';

    if (!authState?.authenticated && inAuthGroup) {
      router.replace('/');
    } else if (authState?.authenticated === true) {
      router.replace('Home');
    }
  }, [authState]);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#116CE2",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      {/* Configuring title on the stack manually */}
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="BookingSuccess"
        options={{ title: "Booking", presentation: "modal" }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="Splash" options={{ headerShown: false }} />

      <Stack.Screen
        name="pages/Login"
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="pages/Register"
        options={{
          title: "Register",
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: "#FFFFFF", // Change to your desired color
          },
          headerTintColor: "#116CE2",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack>
  );
};

const RootLayoutNav = () => {
  return (
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  );
};

export default RootLayoutNav;