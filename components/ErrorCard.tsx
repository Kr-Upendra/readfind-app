import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  onRefresh: () => void;
};

const ErrorCard = ({ onRefresh }: Props) => {
  return (
    <View className="w-[190px] bg-green-200/10 h-[250px] p-4 rounded-xl justify-center items-center">
      <Text className="text-white mb-6 font-heading-regular text-center">
        Oops! Something went wrong.
      </Text>
      <TouchableOpacity
        className="bg-secondary px-4 py-2 rounded-lg"
        onPress={onRefresh}
      >
        <Text className="text-dark-primary font-body-bold">REFRESH</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorCard;
