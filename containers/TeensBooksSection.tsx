import React from "react";
import { FlatList, View } from "react-native";
import { BookCard, ErrorCard, LoadingCard, SectionHeader } from "@/components";
import icons from "@/constants/icons";
import { placeholderData } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { getTeensBooks } from "@/services";

const TeensBooksSection = () => {
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
        title="Top Books of the Month"
        onArrowPress={() => {}}
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
                title={item.title}
                author={item.author}
                cover={item.image}
                onPress={() => {}}
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
