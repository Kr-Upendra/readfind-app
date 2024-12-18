import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

const App = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-2xl text-green-500 font-heading-bold">
        Home Screen
      </Text>
      <StatusBar style="inverted" />
    </View>
  );
};

export default App;
