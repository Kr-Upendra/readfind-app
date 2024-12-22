import { Text, TouchableOpacity, Image } from "react-native";

type BookCardProps = {
  title: string;
  author: string;
  cover: string;
  onPress?: () => void;
  extraStyle?: string;
  imageStyle?: string;
};

const BookCard = ({
  title,
  author,
  cover,
  onPress,
  extraStyle,
  imageStyle,
}: BookCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`mr-6 w-[180px] bg-green-200/10 p-4 rounded-xl ${extraStyle}`}
    >
      <Image
        source={{ uri: cover }}
        resizeMode="cover"
        className={`w-full h-[180px] mb-2.5 rounded-lg ${imageStyle}`}
      />
      <Text className="font-body-semibold text-white mb-1 line-clamp-2">
        {title}
      </Text>
      <Text className="text-gray-primary font-body-medium text-sm">
        {author}
      </Text>
    </TouchableOpacity>
  );
};

export default BookCard;
