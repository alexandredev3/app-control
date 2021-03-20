import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function Dashboard({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Qualquer coisa</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={{
          backgroundColor: '#5831cc',
          padding: 20,
        }}
      >
        <Text>
          Ir para o perfil! 
        </Text>
      </TouchableOpacity>
    </View>
  );
}