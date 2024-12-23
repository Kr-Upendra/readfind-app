import { View, Text, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";

type Props = {
  errorType?: string;
  message?: string;
  extraStyle?: string;
};

const EmptyState = ({ errorType, message, extraStyle }: Props) => {
  return (
    <View className={`h-[50vh] justify-center bg-dark-primary ${extraStyle}`}>
      <Image
        className="w-full h-[35vh] rounded-md"
        resizeMode="cover"
        source={icons.empty}
      />
      <Text className="mt-4 text-2xl text-center font-heading-regular text-primary">
        {errorType || "INTERNAL SERVER ERROR"}
      </Text>
      <Text className="mt-4 text-2xl text-center font-heading-regular text-primary">
        {message || "Please try to search again."}
      </Text>
    </View>
  );
};

export default EmptyState;
