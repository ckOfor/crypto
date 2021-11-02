// react
import React from "react";

// native
import { View, TouchableOpacity, Text } from "react-native";

// third-party
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RouteProp } from "@react-navigation/native";
import { Feather } from 'react-native-vector-icons';

// navigation
import HomeNavigator from "./home";

// styles
import { colors } from "../theme";

export type Routes = {
    Home: undefined;
};

export type AuthNavigationProps<T extends keyof Routes> = {
    navigation: NativeStackNavigationProp<Routes, T>;
    route: RouteProp<Routes, T>;
};

const Drawer = createDrawerNavigator<Routes>();

const DraweNavigator = () => (
    <Drawer.Navigator
        screenOptions={{
            drawerStyle: {
                backgroundColor: colors.black,
                borderWidth: 0,
            },
            headerStyle: {
                backgroundColor: colors.black,
                borderWidth: 0,
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
                borderBottomWidth: 0, // Just in case.,
            },
            drawerActiveBackgroundColor: colors.companyOrange,
            drawerActiveTintColor: colors.white,
            drawerInActiveTintColor: colors.white,
            headerTintColor: colors.white,
        }}

    >
        <Drawer.Screen
            options={{
                headerRight: () => (
                    <Feather
                        name="more-vertical"
                        color={colors.white}
                        size={24}
                    />
                ),
            }}
            name="Home"
            component={HomeNavigator}
        />
    </Drawer.Navigator>
);

export default DraweNavigator;
