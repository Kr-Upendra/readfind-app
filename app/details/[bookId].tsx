import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const BookDetails = ({ route }: any) => {
  const { bookId } = useLocalSearchParams();
  console.log(bookId);

  const book: any = {};

  return (
    <ScrollView className="flex-grow bg-gray-100 p-4">
      <View className="flex-row mb-6 bg-white p-4 rounded-lg shadow-lg">
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

          {/* Action Buttons */}
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

      {/* Book Description */}
      <View className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <Text className="text-xl font-bold mb-2">Description</Text>
        <Text className="text-sm text-gray-700">{book.description}</Text>
      </View>

      {/* Reviews Section */}
    </ScrollView>
  );
};

export default BookDetails;

/**
   
   <View className="bg-white p-4 rounded-lg shadow-lg">
          <Text className="text-xl font-bold mb-2">Reviews</Text>
  
          { {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <View key={index} className='mb-4')}>
                <Text className='text-sm font-bold')}>{review.user}:</Text>
                <Text className='text-sm text-gray-700')}>{review.reviewText}</Text>
              </View>
            ))
          ) : (
            <Text className='text-sm text-gray-500')}>No reviews yet. Be the first to review!</Text>
          )} }
  
          <TextInput
            className="h-24 p-2 border border-gray-300 rounded-lg mb-4"
            placeholder="Write your review..."
            value={review}
            onChangeText={setReview}
            multiline
          />
          <TouchableOpacity
            className="bg-blue-600 p-2 rounded-lg")}
            onPress={submitReview}
          >
            <Text className="text-white text-center text-sm font-bold")}>
              Submit Review
            </Text>
          </TouchableOpacity>
        </View>
    
   */
