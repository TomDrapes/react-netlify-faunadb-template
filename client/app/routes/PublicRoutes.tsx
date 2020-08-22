import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../components/screens/public/LoginScreen';
import {SignUpScreen} from '../components/screens/public/SignUpScreen';

export type PublicStackParamList = {
    Login: undefined;
    SignUp: undefined;
};

const PublicStack = createStackNavigator<PublicStackParamList>();

export const PublicRoutes = () => {
    return (
        <PublicStack.Navigator>
            <PublicStack.Screen name="Login" component={LoginScreen} />
            <PublicStack.Screen name="SignUp" component={SignUpScreen} />
        </PublicStack.Navigator>
    );
}