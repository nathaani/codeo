import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Level({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('GameScreen')}>
        <Text>Go to Game Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
