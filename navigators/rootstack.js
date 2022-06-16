import React from 'react'

//React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Login from './../Screens/Login';
import Signup from './../Screens/Signup';
import Home from './../Screens/Home';
import Betcheck from './../Screens/Betcheck';
import Makebet from './../Screens/Makebet';
import Joinbet from './../Screens/Joinbet';
import Joinbet2 from './../Screens/Joinbet2';
import test from './../Screens/test';
import Settlebet from './../Screens/Settlebet';
import Editbet from './../Screens/Editbet';


//colors
import {Colors} from './../component/styles'
const {primary, tertiary} = Colors

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: 'tertiary',
                    headerShown: false,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle : {
                        paddingLeft: 20
                    }
                }}
                initialRouteName='Home'
            >
                <Stack.Screen name='Login' component = {Login}/>
                <Stack.Screen name='Signup' component = {Signup}/>
                <Stack.Screen name='Home' component = {Home}/>
                <Stack.Screen name='Betcheck' component = {Betcheck}/>
                <Stack.Screen name='Makebet' component = {Makebet}/>
                <Stack.Screen name='Joinbet' component = {Joinbet}/>
                <Stack.Screen name='Joinbet2' component = {Joinbet2}/>
                <Stack.Screen name='test' component = {test}/>
                <Stack.Screen name='Settlebet' component = {Settlebet}/>
                <Stack.Screen name='Editbet' component = {Editbet}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;