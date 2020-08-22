import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthContext} from '../auth/AuthContext';
import {PublicRoutes} from './PublicRoutes';
import {PrivateRoutes} from './PrivateRoutes';


export default function AppRoutes() {
    const value = useContext(AuthContext);

    return (
        <NavigationContainer>
            { value?.authState.userToken === null ? <PublicRoutes /> : <PrivateRoutes /> }
        </NavigationContainer>
    );
}