import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";

type Props = {
  title: string;
  onArrowPress?: () => void;
  arrowIcon: ImageSourcePropType;
};

const SectionHeader = ({ title, onArrowPress, arrowIcon }: Props) => {
  return (
    <View className="mb-3 flex-row items-center">
      <Text className="text-primary mr-auto font-heading-regular text-2xl">
        {title}
      </Text>
      <TouchableOpacity
        onPress={onArrowPress}
        className="border-2 border-gray-primary rounded-full p-2"
      >
        <Image
          source={arrowIcon}
          resizeMode="contain"
          tintColor="white"
          className="w-5 h-5"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;
