import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components";
import { bookmarkedBooks, featuredBooks, recommendedBooks } from "@/utils";
import {
  BookmarkedBooksSection,
  LatestBooksSection,
  RecommendedBooksSection,
} from "@/container";

const App = () => {
  return (
    <SafeAreaView className="bg-dark-secondary h-full">
      <Header />
      <ScrollView className="p-4 bg-dark-primary h-full">
        <LatestBooksSection books={featuredBooks} />
        <RecommendedBooksSection books={recommendedBooks} />
        <BookmarkedBooksSection books={bookmarkedBooks} />
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
