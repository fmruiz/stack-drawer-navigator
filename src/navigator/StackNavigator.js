import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import ConfigScreen from '../screens/ConfigScreen';

export const StackNavigator = () => {
  // initialize stack navigator
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
      <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
    </Stack.Navigator>
  );
};
