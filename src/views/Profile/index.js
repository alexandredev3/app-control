import React from 'react';
import { View, Text } from 'react-native';

export function Profile() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Name: Alexandre</Text>
      <Text>Followers: 100000</Text>
      <Text>Following: 830</Text>
    </View>
  );
}