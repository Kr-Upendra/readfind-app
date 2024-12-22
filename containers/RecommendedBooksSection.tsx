import React from "react";
import { FlatList, View } from "react-native";
import { BookCard, SectionHeader } from "@/components";
import icons from "@/constants/icons";
import { featuredBooks } from "@/utils";

const RecommendedBooksSection = () => {
  return (
    <View className="horizontal-scroll-container">
      <SectionHeader
        title="Recommended Books"
        onArrowPress={() => {}}
        arrowIcon={icons.rightArrow}
      />
      <FlatList
        data={featuredBooks}
        horizontal
        renderItem={({ item }) => (
          <BookCard
            title={item.title}
            author={item.author}
            cover={item.cover}
            onPress={() => {}}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default RecommendedBooksSection;
