import React from "react";
import { View, Text, FlatList } from "react-native";
import { EmptyState, GenreCard, Header, SearchInput } from "@/components";
import { genres } from "@/utils";
import { router } from "expo-router";

const Genre = () => {
  return (
    <>
      <Header isSearchOn={false} />
      <FlatList
        data={genres}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <GenreCard
            extraStyle="w-[48%] mr-0"
            genre={item.name}
            icon={item.icon}
            onPress={() =>
              router.push({
                pathname: "/(lists)/[category]",
                params: { category: item.searchWord },
              })
            }
          />
        )}
        ListHeaderComponent={() => (
          <View className="mb-8">
            <Text className="text-primary mb-3 font-heading-regular text-2xl">
              Discover Your Favorite Genre
            </Text>
            <SearchInput placeholder="Search genre..." />
          </View>
        )}
        ListFooterComponent={() => <View className="h-8" />}
        contentContainerStyle={{
          rowGap: 20,
        }}
        className="p-4 bg-dark-primary"
        ListEmptyComponent={() => <EmptyState />}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={20}
      />
    </>
  );
};

export default Genre;
