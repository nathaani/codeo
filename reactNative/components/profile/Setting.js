import React from "react";
import { Input, Stack, Center, NativeBaseProvider } from "native-base";

const Setting = () => {
  return <Stack space={4} w="75%" maxW="300px" mx="auto">
      <Input variant="outline" placeholder="Outline" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="underlined" placeholder="Underlined" />
      <Input variant="unstyled" placeholder="Unstyled" />
      <Input variant="rounded" placeholder="Round" />
    </Stack>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Setting />
            </Center>
          </NativeBaseProvider>
        );
    };