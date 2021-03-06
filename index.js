/**
 * @format
 */

import {AppRegistry, Platform, ActivityIndicator } from 'react-native';
import Tabs from './src/scenes/tabs_screen';
import {name as appName} from './app.json';
import codePush from "react-native-code-push";
import React from 'react'
import { ThemeContext, ThemeProvider } from './src/theme/theme-context.js'


console.disableYellowBox = true;

// wrapper the component with the theme
export default function Main() {
    return (
        <ThemeProvider>
            <Tabs/>
        </ThemeProvider>
    )
}

// inject code push
AppRegistry.registerComponent(appName, () => codePush(Main));
