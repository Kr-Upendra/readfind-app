import { Header } from "@/components";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const BookDetails = () => {
  const { bookId } = useLocalSearchParams();
  console.log(bookId);

  return (
    <>
      <Header isSearchOn={false} />
      <View className="border-2 border-red-500 h-full bg-dark-secondary">
        <Text>Throne Of Glass (Throne of Glass #1)</Text>
      </View>
    </>
  );
};

export default BookDetails;

/**
 <View className="flex-row mb-6 bg-black p-4 rounded-lg shadow-lg">
        <Image
          source={{ uri: book.coverImage }}
          className="w-40 h-60 rounded-md mr-4"
        />
        <View className="flex-1">
          <Text className="text-2xl font-bold mb-2">{book.title}</Text>
          <Text className="text-lg text-gray-600 mb-1">by {book.author}</Text>
          <Text className="text-sm text-gray-500 mb-1">
            Publisher: {book.publisher}
          </Text>
          <Text className="text-sm text-gray-500 mb-1">Year: {book.year}</Text>
          <Text className="text-sm text-gray-500 mb-4">
            Genre: {book.genre}
          </Text>

          <View className="flex-row items-center mb-4">
            <Text className="text-sm text-gray-600 mr-2">Rating:</Text>
            <Text>{book.rating}</Text>
          </View>

          <Text className="text-lg font-bold mb-4">${book.price}</Text>

          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-black p-2 rounded-lg">
              <Text className="text-white text-sm font-bold">Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-800 p-2 rounded-lg">
              <Text className="text-white text-sm font-bold">
                Add to Wishlist
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <Text className="text-xl font-bold mb-2">Description</Text>
        <Text className="text-sm text-gray-700">{book.description}</Text>
      </View>
 */
