//Cards.js

import React from "react";
import { View, ScrollView } from "react-native";
import Card from "./Card"; // Import the Card component
import { useNavigation } from "@react-navigation/native";
import Pdata from "./ProgressData"; // Import the Pdata from ProgressData.js

const Cards = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        {Pdata.map((card, index) => (
          <Card
            key={index}
            text={card.text}
            progress={card.progress}
            navigation={navigation}
            screen={card.screen}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Cards;
