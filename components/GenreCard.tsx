import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  genre: string;
  icon: ImageSourcePropType;
  onPress: () => void;
  extraStyle?: string;
};

const GenreCard = ({ genre, icon, onPress, extraStyle }: Props) => {
  return (
    <TouchableOpacity
      className={`mr-6 w-[180px] bg-green-200/10 p-4 rounded-xl ${extraStyle}`}
      onPress={onPress}
    >
      <View className="items-center pt-6 pb-4">
        <View className="mb-4 p-5 rounded-xl bg-secondary/10 shadow-xl shadow-black/20">
          <Image
            source={icon}
            className="w-16 h-16"
            tintColor={"#FFEB66"}
            resizeMode="contain"
          />
        </View>
        <Text className="text-center font-body-bold text-white text-lg">
          {genre}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GenreCard;
