import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate('ProfileEdit')} />
    </View>
  );
}