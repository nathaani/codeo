//Card.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProgressBar from "react-native-progress/Bar";


const Card = ({ text, progress, navigation, screen }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <View style={styles.card}>
        <Text>{text}</Text>
        <ProgressBar progress={progress} width={200} height={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd", // Change this to the desired background color
    borderRadius: 25, // Add this for rounded corners
    margin: 15,
  },
});

export default Card;
