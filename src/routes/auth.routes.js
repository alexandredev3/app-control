import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '../views/Home';
import { StackRoutes } from './stack.routes';

const Drawer = createDrawerNavigator();

export function PrivateRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />

      {/* Passe a navegação Stack na propriedade component */}
      <Drawer.Screen name="Dashboard" component={StackRoutes} />
    </Drawer.Navigator>
  );
}