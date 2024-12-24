import { View } from "react-native";
import React from "react";

const LoadingBookDetail = () => {
  return (
    <View className={"w-full h-full animate-pulse"}>
      <View className="w-full h-16 bg-gray-secondary rounded-lg mb-3.5" />
      <View className="w-full h-8 bg-gray-secondary rounded-lg mb-3.5" />
      <View className="w-full h-[350px] bg-gray-secondary rounded-lg mb-3.5" />
      <View className="w-full h-[350px] bg-gray-secondary rounded-lg mb-3.5" />
      <View className="w-full h-12 bg-gray-secondary rounded-lg mb-3.5" />
      <View className="w-full h-12 bg-gray-secondary rounded-lg" />
    </View>
  );
};

export default LoadingBookDetail;
