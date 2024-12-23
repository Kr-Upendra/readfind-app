import { BookCard, EmptyState, Header, SearchInput } from "@/components";
import { featuredBooks } from "@/utils";
import { View, Text, FlatList } from "react-native";

const BookMark = () => {
  return (
    <>
      <Header isSearchOn={false} />
      <FlatList
        data={featuredBooks}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <BookCard
            id={item.id}
            title={item.title}
            author={item.author}
            cover={item.cover}
            key={item.id}
            extraStyle="mr-0 w-[48%]"
            imageStyle="h-[220px]"
          />
        )}
        ListHeaderComponent={() => (
          <View className="mb-8">
            <Text className="text-primary mb-3 font-heading-regular text-2xl">
              Your bookmarked books
            </Text>
            <SearchInput placeholder="Search books..." />
          </View>
        )}
        ListFooterComponent={() => <View className="h-8" />}
        contentContainerStyle={{ rowGap: 15 }}
        className="px-4 py-4 bg-dark-primary flex-1"
        ListEmptyComponent={() => <EmptyState />}
      />
    </>
  );
};

export default BookMark;
