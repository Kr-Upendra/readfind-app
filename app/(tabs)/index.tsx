import React from "react";
import { ScrollView, View } from "react-native";
import { genres } from "@/utils";
import {
  BookmarkedBooksSection,
  GenreContainer,
  LatestBooksSection,
  PopularBooksSection,
  TeensBooksSection,
} from "@/containers";
import { Header } from "@/components";

const App = () => {
  return (
    <>
      <Header />
      <ScrollView className="p-4 pt-8 bg-dark-primary h-full">
        <LatestBooksSection />
        <View className="h-6"></View>
        <PopularBooksSection />
        <View className="h-6"></View>
        <TeensBooksSection />
        <View className="h-6"></View>
        <BookmarkedBooksSection />
        <View className="h-6"></View>
        <GenreContainer genres={genres} />
        <View className="h-16"></View>
      </ScrollView>
    </>
  );
};

export default App;
