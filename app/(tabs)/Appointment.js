import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Appointment = () => {
    return (
        <View>
            <Text>Appointment</Text>
            <Link href={'/BookingSuccess'}>Booking DONE</Link>
        </View>
    )
}

export default Appointment