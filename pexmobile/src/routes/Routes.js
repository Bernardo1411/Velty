import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from '../screens/LandingScreen';
import Login from '../screens/Login';
import UserTerms from '../screens/userTerms';
import SignUp from '../screens/SignUp';
import SignUpFinal from '../screens/SignUpFinal';
import FaceId from '../screens/FaceId';
import Home from '../screens/Home';
import ProductPage from '../screens/ProductPage';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="LandingScreen"
        initialRouteName="LandingScreen"
      >
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserTerms"
          component={UserTerms}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpFinal"
          component={SignUpFinal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FaceId"
          component={FaceId}
          options={
            {
              title: '',
              headerShown: true,
              headerStyle: {
                backgroundColor: '#fff',
                shadowColor: 'transparent',
              },
              headerTintColor: '#000',
            }
        }
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductPage"
          component={ProductPage}
          options={
            {
              title: '',
              headerShown: true,
              headerStyle: {
                backgroundColor: '#fff',
                shadowColor: 'transparent',
              },
              headerTintColor: '#000',
            }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
