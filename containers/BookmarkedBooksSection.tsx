import { BookCard, LoadingCard, SectionHeader } from "@/components";
import icons from "@/constants/icons";
import { getBookmarkedBooks, placeholderData } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";

const BookmarkedBooksSection = () => {
  const { data: bookmarkedBooks, isLoading } = useQuery({
    queryKey: ["bookmarkedBooks"],
    queryFn: getBookmarkedBooks,
    refetchOnWindowFocus: false,
    refetchInterval: 2000,
  });

  return (
    bookmarkedBooks &&
    bookmarkedBooks.length > 0 && (
      <View className="horizontal-scroll-container">
        <SectionHeader
          title="Bookmarked Books"
          onArrowPress={() => router.push("/bookmark")}
          arrowIcon={icons.rightArrow}
        />
        <FlatList
          data={isLoading ? placeholderData : bookmarkedBooks.slice(0, 10)}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={({ item }) =>
            isLoading ? (
              <LoadingCard key={item.id} />
            ) : (
              <BookCard
                id={item.id}
                title={item.title}
                author={item.author}
                cover={item.image}
              />
            )
          }
        />
      </View>
    )
  );
};

export default BookmarkedBooksSection;
