import { Header } from "@/components";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BookMark = () => {
  return (
    <SafeAreaView className="bg-dark-secondary h-full">
      <Header />
      <View className="flex flex-1 justify-center items-center">
        <Text className="text-2xl text-green-500 font-heading-bold">
          Bookmark Screen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default BookMark;
