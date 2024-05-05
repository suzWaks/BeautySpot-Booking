import { Stack } from 'expo-router';
import React from 'react'
import { StyleSheet, View, Image, Dimensions, ScrollView, Text } from 'react-native'
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';
import { COLORS, FONTS, SIZES } from '../utils/theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';
import { overlay } from 'react-native-paper';
import Home from './Home';


const { width } = Dimensions.get("window");
const img_height = 200;

export default function trial() {

    const scrollRef = useAnimatedRef(); 
    const scrollOffset = useScrollViewOffset(scrollRef);

    const imageAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-img_height, 0, img_height],
                        [-img_height / 2, 0, img_height * 0.75]
                    )
                },
                {
                    scale: interpolate(
                        scrollOffset.value,
                        [-img_height, 0, img_height],
                        [2, 1, 1]
                    )
                }
            ]
        };
    })


    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollOffset.value,
                [0, img_height / 1.5],
                [0, 1],
            )
        };
    })
    return (


        <View style={styles.container}>
            <Stack.Screen options={{
                headerTransparent: true,
                headerRight: () => (
                    <View style={{ paddingRight: 10 }}>
                        <FontAwesome5 onPress={() => router.navigate('/Profile')} name="user-circle" size={24} color="white" />
                    </View>
                ),
                headerBackground: () => <Animated.View style={[styles.header, headerAnimatedStyle]} />

            }} />
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
                <Animated.View style={[styles.container, imageAnimatedStyle]}>
                    <Animated.Image
                        source={{ uri: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Fsb258ZW58MHx8MHx8fDA%3D' }}
                        style={styles.image}
                    />
                    <View style={styles.overlay}>
                        <View style={styles.overlayContainer}>
                            <Text style={styles.overlayText}>
                                KuzuZangpo la
                            </Text>
                            <Text style={styles.userName}>
                                Suzal Wakhley
                            </Text>
                        </View>
                    </View>
                </Animated.View>


                <View style={{ height: 1000, backgroundColor: "#FFFFFF" }}>
                    <Home/>
                </View >
            </Animated.ScrollView>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    image: {
        width: width,
        height: img_height,
        resizeMode: 'cover',
    },
    header: {
        backgroundColor: COLORS.PRIMARY,
        height: 100,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(17, 100, 226, 0.75)'
    },
    overlayContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        padding: 10,
    },
    overlayText: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.large,
        textAlign: 'left',
        color: 'white',
        paddingBottom: 10,
    },
    userName: {
        fontSize: SIZES.xxLarge,
        fontFamily: FONTS.bold,
        textAlign: 'left',
        color: 'white',
    },
})