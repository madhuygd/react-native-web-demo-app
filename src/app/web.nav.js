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
        <Stack.Navigator initialRouteName="Login2" mode={"modal"} headerMode={'none'}>
            <Stack.Screen name="Login2" options={{ headerShown: false }} component={LoginSignup} />
            <Stack.Screen name="Login3" options={{ headerShown: false }} component={Login3} />
            <Stack.Screen name="Login4" options={{ headerShown: false }} component={Login4} />
            <Stack.Screen name="Login5" options={{ headerShown: true }} component={Login5} />
            <Stack.Screen name="Login6" options={{ headerShown: true }} component={Login6} />
        </Stack.Navigator>
    )
}

export const linking = {
	prefixes: [],
	config: {
		screens: {
			Login2: '/login2',
			Login3:'/login3',
			Login4: '/login4',
			Login5: '/login5',
			Login6: '/login6'
		}
	},
};
