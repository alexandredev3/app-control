import React from 'react'
import { AuthProvider } from './src/hooks/AuthContext';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}