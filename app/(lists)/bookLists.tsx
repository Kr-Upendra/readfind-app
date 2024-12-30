import React, { useMemo } from "react";
import { View, Text, FlatList } from "react-native";
import { BookCard, EmptyState, LoadingCard } from "@/components";
import { Stack, useLocalSearchParams } from "expo-router";
import { getLatestBooks, getPopularBooks, getTeensBooks } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { placeholderData } from "@/utils";

const BookLists = () => {
  const { list } = useLocalSearchParams();
  const queryType = useMemo(() => {
    switch (list) {
      case "new-books":
        return {
          fn: getLatestBooks,
          ky: "latest-books",
          ht: "Newly Added Books",
        };
      case "popular-books":
        return {
          fn: getPopularBooks,
          ky: "popular-books",
          ht: "Top Books of the Month",
        };
      case "teens-books":
      default:
        return {
          fn: getTeensBooks,
          ky: "teens-books",
          ht: "Teen's Favorite Books",
        };
    }
  }, [list]);

  const {
    data: bookList,
    isLoading,
    error,
  } = useQuery({
    queryKey: [queryType.ky],
    queryFn: queryType.fn,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Stack.Screen
        name="(lists)/bookLists"
        options={{
          title: "Book Lists",
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: () => (
            <Text className="text-primary font-heading-regular text-xl">
              {queryType.ht}
            </Text>
          ),
        }}
      />
      {!isLoading && error ? (
        <EmptyState
          extraStyle="h-full bg-dark-primary mt-0"
          errorType="FAILED TO LOAD"
          message="Please try again"
        />
      ) : (
        <FlatList
          data={isLoading ? placeholderData : bookList.data || []}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) =>
            isLoading ? (
              <LoadingCard
                key={item.id}
                extraStyle="w-[48%] mr-0"
                imageStyle="h-[200px]"
              />
            ) : (
              <BookCard
                id={item.id}
                title={item.title}
                author={item.author}
                cover={item.image}
                extraStyle="mr-0 w-[48%]"
                imageStyle="h-[220px]"
              />
            )
          }
          ListFooterComponent={() => <View className="h-8" />}
          contentContainerStyle={{ rowGap: 15 }}
          className="px-4 py-4 bg-dark-primary flex-1"
          ListEmptyComponent={() => <EmptyState />}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          windowSize={20}
        />
      )}
    </>
  );
};

export default BookLists;
