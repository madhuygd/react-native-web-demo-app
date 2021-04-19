import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login2 from "./screens/Login2";
import Login3 from "./screens/Login3";
import Login4 from "./screens/Login4";
import Login5 from "./screens/Login5";
import Login6 from "./screens/Login6";

import {LoginSignup} from "./screens/login-signup";

const Stack = createStackNavigator();

export function AppNavigation() {
    

    return (
        <Stack.Navigator initialRouteName={"Login2"} mode={"modal"} headerMode={'none'} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Login2"} component={Login2} />
            <Stack.Screen name={"Login3"} component={Login3} />
            <Stack.Screen name={"Login4"} component={Login4} />
            <Stack.Screen name={"Login5"} component={Login5} />
            <Stack.Screen name={"Login6"} component={Login6} />
        </Stack.Navigator>
    )
}

