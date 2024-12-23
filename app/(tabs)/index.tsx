import { ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { bookmarkedBooks, genres } from "@/utils";
import {
  BookmarkedBooksSection,
  GenreContainer,
  LatestBooksSection,
  PopularBooksSection,
  TeensBooksSection,
} from "@/containers";
import { Header } from "@/components";
import { Link } from "expo-router";

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
        <BookmarkedBooksSection books={bookmarkedBooks} />
        <View className="h-6"></View>
        <GenreContainer genres={genres} />
        <View className="h-16"></View>
        <Link href={"/"}>
          <Text>Hello</Text>
        </Link>
      </ScrollView>
    </>
  );
};

export default App;
