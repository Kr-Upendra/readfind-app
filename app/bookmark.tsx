import { BookCard, EmptyState, Header, SearchInput } from "@/components";
import { featuredBooks } from "@/utils";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BookMark = () => {
  return (
    <SafeAreaView className="bg-dark-secondary flex-1">
      <Header isSearchOn={false} />
      <FlatList
        data={featuredBooks}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <BookCard
            title={item.title}
            author={item.author}
            cover={item.cover}
            key={item.id}
            extraStyle="mr-0 w-[49%]"
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
        columnWrapperStyle={{ columnGap: 10 }}
        contentContainerStyle={{ rowGap: 10 }}
        className="px-4 py-4 bg-dark-primary flex-1"
        ListEmptyComponent={() => <EmptyState />}
      />
    </SafeAreaView>
  );
};

export default BookMark;
