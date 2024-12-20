import { View, Text, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";

const EmptyState = () => {
  return (
    <View className="h-[50vh] justify-center mt-20">
      <Image
        className="w-full h-[35vh] rounded-md"
        resizeMode="cover"
        source={icons.empty}
      />
      <Text className="mt-4 text-2xl text-center font-heading-regular text-primary">
        Found nothing. Please try to search again.
      </Text>
    </View>
  );
};

export default EmptyState;
