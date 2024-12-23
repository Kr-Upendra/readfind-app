import { BookCard, SectionHeader } from "@/components";
import icons from "@/constants/icons";
import { router } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";

type Props = {
  books: any[];
};

const BookmarkedBooksSection = ({ books }: Props) => {
  return (
    <View className="horizontal-scroll-container">
      <SectionHeader
        title="Bookmarked Books"
        onArrowPress={() => router.push("/bookmark")}
        arrowIcon={icons.rightArrow}
      />
      <FlatList
        data={books}
        horizontal
        renderItem={({ item }) => (
          <BookCard
            id={item.id}
            title={item.title}
            author={item.author}
            cover={item.cover}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default BookmarkedBooksSection;
