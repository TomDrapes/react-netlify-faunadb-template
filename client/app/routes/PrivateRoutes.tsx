import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../components/screens/private/Home';

export type PrivateStackParamList = {
    Home: undefined
};

const PrivateStack = createStackNavigator<PrivateStackParamList>();

export function PrivateRoutes() {
    return (
        <PrivateStack.Navigator>
            <PrivateStack.Screen name="Home" component={Home} />
        </PrivateStack.Navigator>
    );
}