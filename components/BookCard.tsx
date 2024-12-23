import { Link, router } from "expo-router";
import { Text, TouchableOpacity, Image } from "react-native";

type BookCardProps = {
  id: string;
  title: string;
  author: string;
  cover: string;

  extraStyle?: string;
  imageStyle?: string;
};

const BookCard = ({
  id,
  title,
  author,
  cover,
  extraStyle,
  imageStyle,
}: BookCardProps) => {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({ pathname: "/details/[bookId]", params: { bookId: id } })
      }
      className={`mr-6 w-[180px] bg-green-200/10 p-4 rounded-xl ${extraStyle}`}
    >
      <Image
        source={{ uri: cover, headers: { Accept: "image/*" } }}
        resizeMode="cover"
        className={`w-full h-[190px] mb-2.5 rounded-lg ${imageStyle}`}
      />
      <Text className="font-body-semibold text-white mb-2 line-clamp-2">
        {title}
      </Text>
      <Text className="text-gray-primary font-body-medium text-sm line-clamp-1">
        {author}
      </Text>
    </TouchableOpacity>
  );
};

export default BookCard;
