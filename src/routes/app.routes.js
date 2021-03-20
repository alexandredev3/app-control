import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Signin } from '../views/Signin';

const Stack = createStackNavigator();

export function PublicRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}