import React from "react";
import {
  BookCard,
  EmptyState,
  Header,
  LoadingCard,
  SearchInput,
} from "@/components";
import { getBookmarkedBooks, placeholderData, removeAllBookmarks } from "@/utils";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const BookMark = () => {
  const queryClient = useQueryClient();
  const { data: bookmarkedBooks, isLoading } = useQuery({
    queryKey: ["bookmarkedBooks"],
    queryFn: getBookmarkedBooks,
    refetchOnWindowFocus: false,
    refetchInterval: 2000,
  });

  const mutation = useMutation({
    mutationFn: removeAllBookmarks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarkedBooks"] });
    },
  });

  const handleClearAllBookmarks = async () => {
    mutation.mutate();
  };

  return (
    <>
      <Header isSearchOn={false} />
      <FlatList
        data={isLoading ? placeholderData : bookmarkedBooks}
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
        ListHeaderComponent={() => (
          <View className="mb-8">
            <Text className="text-primary mb-3 font-heading-regular text-2xl">
              Your bookmarked books
            </Text>
            <SearchInput placeholder="Search books..." />
          </View>
        )}
        ListFooterComponent={() =>
          bookmarkedBooks.length > 0 ? (
            <>
              <TouchableOpacity
                onPress={handleClearAllBookmarks}
                className="px-10 py-4 bg-red-500/70 mb-6 text-center rounded-lg"
              >
                <Text className="font-body-semibold text-white text-center">
                  Remove All
                </Text>
              </TouchableOpacity>
              <View className="h-14" />
            </>
          ) : (
            <View className="h-8" />
          )
        }
        contentContainerStyle={{ rowGap: 15 }}
        className="px-4 py-4 bg-dark-primary flex-1"
        ListEmptyComponent={() => (
          <EmptyState
            errorType="No Bookmarked Book Found."
            message="You have not bookmarked any book yet."
          />
        )}
      />
    </>
  );
};

export default BookMark;
