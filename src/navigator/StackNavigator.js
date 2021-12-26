import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';

export const StackNavigator = () => {
  // initialize stack navigator
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
};
