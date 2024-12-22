import { View } from "react-native";
import React from "react";

type Props = {
  extraStyle?: string;
};

const LoadingCard = ({ extraStyle }: Props) => {
  return (
    <View
      className={`mr-6 w-[180px] h-full bg-green-200/10 p-4 rounded-xl animate-pulse ${extraStyle}`}
    >
      <View className="w-full h-[180px] bg-gray-secondary rounded-md mx-auto mb-2.5" />
      <View className="w-full h-6 bg-gray-secondary rounded-md mx-auto mb-2" />
      <View className="w-full h-3 bg-gray-secondary rounded-md mx-auto" />
    </View>
  );
};

export default LoadingCard;
