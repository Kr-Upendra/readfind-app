import { View } from "react-native";
import React from "react";

const LoadingBookDetail = () => {
  return (
    <View className={"w-full h-full animate-pulse"}>
      <View className="w-full h-16 bg-dark-secondary rounded-lg mb-3.5" />
      <View className="w-full h-8 bg-dark-secondary rounded-lg mb-3.5" />
      <View className="w-full h-[350px] bg-dark-secondary rounded-lg mb-3.5" />
      <View className="w-full h-[350px] bg-dark-secondary rounded-lg mb-3.5" />
      <View className="w-full h-12 bg-dark-secondary rounded-lg mb-3.5" />
      <View className="w-full h-12 bg-dark-secondary rounded-lg" />
    </View>
  );
};

export default LoadingBookDetail;
