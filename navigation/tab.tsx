// react
import React from "react";

// third-party
import { createMaterialBottomTabNavigator, MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import { RouteProp } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, Fontisto, Ionicons } from 'react-native-vector-icons';

// screens
// style
import { colors } from "../theme";
import HomeNavigator from "./home";

export type Routes = {
    Landing: undefined;
};

export type AuthNavigationProps<T extends keyof Routes> = {
    navigation: MaterialBottomTabScreenProps<Routes, T>;
    route: RouteProp<Routes, T>;
};

const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="LandingPage"
            activeColor={colors.transparent}
            inactiveColor={colors.white}
            barStyle={{
                backgroundColor: colors.white,
                color: 'red'
            }}
            screenOptions={{

            }}
            // labeled={false}
            style={{
                color: 'red'
            }}
            shifting
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
            />
        </Tab.Navigator>
    );
}

export default RootNavigator;