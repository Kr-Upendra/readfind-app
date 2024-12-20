import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList } from "react-native";
import { EmptyState, GenreCard, Header, SearchInput } from "@/components";
import { genres } from "@/utils";

const Genre = () => {
  return (
    <SafeAreaView className="bg-dark-secondary flex-1">
      <Header isSearchOn={false} />
      <FlatList
        data={genres}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <GenreCard
            extraStyle="w-[49%] mr-0"
            genre={item.name}
            icon={item.icon}
            onPress={() => {}}
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
        columnWrapperStyle={{ columnGap: 10 }}
        contentContainerStyle={{ rowGap: 10 }}
        className="px-4 py-4 bg-dark-primary flex-1"
        ListEmptyComponent={() => <EmptyState />}
      />
    </SafeAreaView>
  );
};

export default Genre;
