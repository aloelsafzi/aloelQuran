import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, HomeScreen, QuranScreen } from '../pages';
import { Colors } from '../utils';

const Stack = createStackNavigator();
const myOption = {
    title: "Al - Qur'an",
    headerTitleAlign: 'center',
    headerTintColor: Colors.Secondary,
    headerTransparent: true,
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={myOption} />
            <Stack.Screen name="Quran" component={QuranScreen} options={myOption} />
        </Stack.Navigator>
    );
};

export default Router;