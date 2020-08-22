import React from 'react';
import {Theme, colors, Colors} from 'react-native-elements';

interface CustomTheme extends Theme {
    theme: {
     colors: Colors,
    primaryText: string;
    secondaryText: string;
    }
}

export const customTheme: CustomTheme = {
    theme: {
        colors: {
            ...colors,
        },
        primaryText: '#000',
        secondaryText: '#9e9e9e'
    }
};

export const CustomThemeContext = React.createContext(customTheme);
export const CustomThemeProvider = CustomThemeContext.Provider;