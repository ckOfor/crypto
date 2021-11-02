// react
import React from "react";

// third-parties
import { createMaterialBottomTabNavigator, MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import { RouteProp } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, Ionicons } from 'react-native-vector-icons';

import Home from "../screens/home";
import { colors } from "../theme";


export type Routes = {
    Home: undefined;
    Wallet: undefined;
    Chat: undefined;
    User: undefined;
};

export type AuthNavigationProps<T extends keyof Routes> = {
    navigation: MaterialBottomTabScreenProps<Routes, T>;
    route: RouteProp<Routes, T>;
};

const Stack = createMaterialBottomTabNavigator<Routes>();

const HomeNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        barStyle={{
            backgroundColor: colors.black
        }}
        labeled={false}
    >
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesome
                        name="home"
                        color={focused ? colors.companyOrange : colors.whiteTwo}
                        size={24}
                    />
                ),
            }}
        />

        <Stack.Screen
            name="Wallet"
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name="wallet-outline"
                        color={focused ? colors.companyOrange : colors.whiteTwo}
                        size={24}
                    />
                ),
            }}
        />

        <Stack.Screen
            name="Chat"
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name="chatbubble-outline"
                        color={focused ? colors.companyOrange : colors.whiteTwo}
                        size={24}
                    />
                ),
            }}
        />


        <Stack.Screen
            name="User"
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5
                        name="user"
                        color={focused ? colors.companyOrange : colors.whiteTwo}
                        size={24}
                    />
                ),
            }}
        />

    </Stack.Navigator>
);

export default HomeNavigator;
