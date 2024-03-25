//Statistic.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import Pdata from "../ProgressData";

const sData = Pdata[0];
const sData2 = Pdata[1];

const Statistic = () => {
  return (
    <>
      <View>
        <Text>Statistic</Text>
        <View style={styles.card}>
          <Text>{sData.text}</Text>
          <ProgressBar progress={sData.progress} width={200} height={20} />
          <Text>{sData2.text}</Text>
          <ProgressBar progress={sData2.progress} width={200} height={20} />
        </View>
      </View>

      <View>
        <Text>Setting</Text>
      </View>
    </>
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

export default Statistic;
