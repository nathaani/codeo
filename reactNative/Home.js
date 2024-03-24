import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Level')}>
        <Text>Go to Level Selection</Text>
      </TouchableOpacity>
    </View>
  );
}
