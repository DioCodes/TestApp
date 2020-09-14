import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen';
import { PhotoScreen } from '../screens/PhotoScreen';

export const AppNavigation = () => {
  const Stack = createStackNavigator();

  const MainStack = () => (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0
        },
        headerShown: true,
        headerBackTitle: 'Back',
        headerTintColor: '#000'
      }}>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'Unsplash Gallery' }}
      />
      <Stack.Screen name="Photo" component={PhotoScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <MainStack />
    </NavigationContainer>
  );
};
