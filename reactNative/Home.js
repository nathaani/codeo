import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Cards from "./components/Cards";
//import Example from "./components/CardColor";//test gradiant

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Level")}>
          <Text>Go to Level Selection</Text>
        </TouchableOpacity>
      </View> */}

      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Cards />
      </View>
    </ScrollView>
  );
}
