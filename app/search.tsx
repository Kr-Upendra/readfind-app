import { EmptyState, Header, SearchInput } from "@/components";
import icons from "@/constants/icons";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const items = [1, 2, 3, 4];

const Search = () => {
  return (
    <SafeAreaView className="bg-dark-secondary flex-1">
      <Header isSearchOn={false} />
      <ScrollView className="p-4 bg-dark-primary flex-1 h-full">
        <View className="mb-8">
          <Text className="text-primary mb-4 font-heading-regular text-2xl">
            Search
          </Text>
          <SearchInput placeholder="Search genre..." />
        </View>
        <TouchableOpacity className="bg-green-200/5 h-72 w-full mb-6 rounded-lg justify-center items-center">
          <Text className="font-heading-regular text-3xl text-white">
            Browse Books
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-green-200/5 h-72 w-full mb-6 rounded-lg justify-center items-center">
          <Text className="font-heading-regular text-3xl text-white">
            Browse Authors
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-green-200/5 h-72 w-full mb-6 rounded-lg justify-center items-center">
          <Text className="font-heading-regular text-3xl text-white">
            Browse Genres
          </Text>
        </TouchableOpacity>

        <View className="h-8"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

/*

<FlatList
        data={items}
        keyExtractor={(index) => index.toString()}
        numColumns={1}
        renderItem={(_) => (
          <View>
            <Text>Hello world</Text>
          </View>
        )}
       
        ListFooterComponent={() => <View className="h-8" />}
        contentContainerStyle={{ rowGap: 10 }}
        className="px-4 py-4 bg-dark-primary flex-1"
        ListEmptyComponent={() => <EmptyState />}
      />

*/
