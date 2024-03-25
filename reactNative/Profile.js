import React from "react";
import { View, Text, Button } from "react-native";
import Statistic from "./components/profile/Statistic";
import Setting from "./components/profile/Setting";

export default function Profile({ navigation }) {
  return (
    <>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Statistic />
      </View>

      <View>
        <Setting />
      </View>

      <View >
        <Text>Profile Screen</Text>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate("ProfileEdit")}
        />
      </View>
    </View>
    </>
  );
}
