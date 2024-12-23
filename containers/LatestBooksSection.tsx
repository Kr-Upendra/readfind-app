import { BookCard, ErrorCard, LoadingCard, SectionHeader } from "@/components";
import icons from "@/constants/icons";
import { getLatestBooks } from "@/services";
import { placeholderData } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";

const LatestBooksSection = () => {
  const router = useRouter();

  const {
    data: latestBooks,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["latest-books"],
    queryFn: getLatestBooks,
  });

  return (
    <View className="horizontal-scroll-container">
      <SectionHeader
        title="Newly added books"
        onArrowPress={() => {
          router.push("/(lists)/bookLists?list=new-books");
        }}
        arrowIcon={icons.rightArrow}
      />

      {error ? (
        <ErrorCard onRefresh={() => refetch()} />
      ) : (
        <FlatList
          data={isLoading ? placeholderData : latestBooks?.data.slice(0, 10)}
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
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default LatestBooksSection;
