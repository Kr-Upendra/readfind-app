import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { bookmarkedBooks, genres } from "@/utils";
import {
  BookmarkedBooksSection,
  GenreContainer,
  LatestBooksSection,
  PopularBooksSection,
  RecommendedBooksSection,
} from "@/containers";
import { Header } from "@/components";

const App = () => {
  return (
    <SafeAreaView className="bg-dark-secondary h-full">
      <Header />
      <ScrollView className="p-4 pt-8 bg-dark-primary h-full">
        <LatestBooksSection />
        <View className="h-6"></View>
        <PopularBooksSection />
        <View className="h-6"></View>
        <RecommendedBooksSection />
        <View className="h-6"></View>
        <BookmarkedBooksSection books={bookmarkedBooks} />
        <View className="h-6"></View>
        <GenreContainer genres={genres} />
        <View className="h-16"></View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
