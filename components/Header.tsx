import { View, Image, TouchableOpacity } from "react-native";
import icons from "@/constants/icons";

type Props = { isSearchOn?: boolean };

const Header = ({ isSearchOn = true }: Props) => {
  return (
    <View className="flex-row justify-between items-start p-4">
      <View className="py-2">
        <Image
          source={icons.logo}
          resizeMode="cover"
          style={{ width: 100, height: 20 }}
        />
      </View>
      {isSearchOn && (
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
            tintColor="#A8A8A8"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
