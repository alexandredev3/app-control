import React from 'react';
import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../hooks/AuthContext';

export function Signin() {
  const { signIn } = useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Faça login</Text>
      <TouchableOpacity
        onPress={signIn}
        style={{
          backgroundColor: '#5831cc',
          padding: 20,
        }}
      >
        <Text>
          Signin
        </Text>
      </TouchableOpacity>
    </View>
  );
}