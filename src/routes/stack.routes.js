import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Profile } from '../views/Profile';
import { Dashboard } from '../views/Dashboard';


const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      {/* Coloque a navegação "Dashboard" aqui passando o component "Dashboard" */}
      <Stack.Screen name="Dashboard" component={Dashboard} />

      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}