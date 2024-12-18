import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components";
import { Image } from "react-native";
import { featuredBooks } from "@/utils";
import icons from "@/constants/icons";

const App = () => {
  return (
    <SafeAreaView className="bg-dark-secondary h-full">
      <Header />
      <View className="p-4 bg-dark-primary h-full">
        <View className="bg-gray-secondary/40 rounded-2xl p-3 pb-5">
          <View className="mb-3 flex-row items-center">
            <Text className="text-white mr-auto font-body-semibold text-2xl">
              Latest Books
            </Text>
            <TouchableOpacity
              onPress={() => {}}
              className="border-2 border-gray-primary rounded-full p-2"
            >
              <Image
                source={icons.rightArrow}
                resizeMode="contain"
                tintColor="white"
                className="w-5 h-5"
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={featuredBooks}
            horizontal
            renderItem={({ item }) => (
              <View className="mr-6 w-[180px] bg-green-200/5 p-4 rounded-xl">
                <Image
                  source={{ uri: item.cover }}
                  style={{ width: 150, height: 180 }}
                  resizeMode="cover"
                  className="mb-2.5"
                />
                <Text className="font-heading-regular text-primary line-clamp-2">
                  {item.title}
                </Text>
                <Text className="text-xs text-gray-primary">{item.author}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
