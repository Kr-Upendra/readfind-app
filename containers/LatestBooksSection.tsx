import { BookCard, SectionHeader } from "@/components";
import icons from "@/constants/icons";
import React from "react";
import { FlatList, View } from "react-native";

type Props = {
  books: any[];
};

const LatestBooksSection = ({ books }: Props) => {
  return (
    <View className="horizontal-scroll-container">
      <SectionHeader
        title="Latest Books"
        onArrowPress={() => {}}
        arrowIcon={icons.rightArrow}
      />

      <FlatList
        data={books}
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

export default LatestBooksSection;
