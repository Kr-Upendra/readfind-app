import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-2xl text-green-500 font-heading-bold">
        Home Screen{" "}
      </Text>
      <StatusBar style="auto" />
      <Link href="/search" className="text-red-500 text-xl font-body-medium">
        Go to Search
      </Link>
    </View>
  );
};

export default App;
