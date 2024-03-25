import React from "react";
import { Box, Center, NativeBaseProvider } from "native-base";

const LinearGradient = require("expo-linear-gradient").LinearGradient;

const App = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ["lightBlue.300", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p="12"
      rounded="xl"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
        textAlign: "center",
      }}
    >
      This is a Box with Linear Gradient
    </Box>
  );
};

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

function Example() {
  return (
    <NativeBaseProvider config={config}>
      <Center flex={1} px="3">
        <App />
      </Center>
    </NativeBaseProvider>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
