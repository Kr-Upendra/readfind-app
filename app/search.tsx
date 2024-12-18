import { Header } from "@/components";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <SafeAreaView className="bg-dark-secondary h-full">
      <Header />
      <View className="flex flex-1 justify-center items-center">
        <Text className="text-2xl text-green-500 font-heading-regular">
          Search Screen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;
