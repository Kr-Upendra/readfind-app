import React from "react";
import { FlatList, View } from "react-native";
import { BookCard, ErrorCard, LoadingCard, SectionHeader } from "@/components";
import icons from "@/constants/icons";
import { placeholderData } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { getTeensBooks } from "@/services";
import { useRouter } from "expo-router";

const TeensBooksSection = () => {
  const router = useRouter();
  const {
    data: teensBooks,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["teens-books"],
    queryFn: getTeensBooks,
  });

  return (
    <View className="horizontal-scroll-container">
      <SectionHeader
        title="Teen's Favorite Books"
        onArrowPress={() => router.push("/(lists)/bookLists?list=teens-book")}
        arrowIcon={icons.rightArrow}
      />

      {error ? (
        <ErrorCard onRefresh={() => refetch()} />
      ) : (
        <FlatList
          data={isLoading ? placeholderData : teensBooks?.data.slice(0, 10)}
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

export default TeensBooksSection;
