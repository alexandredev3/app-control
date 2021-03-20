import React from 'react';
import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../hooks/AuthContext';

export function Home() {
  const { signOut } = useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Você esta logado</Text>
      <TouchableOpacity
        onPress={signOut}
        style={{
          backgroundColor: '#5831cc',
          padding: 20,
        }}
      >
        <Text>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}