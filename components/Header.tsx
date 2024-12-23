import { View, Image, TouchableOpacity } from "react-native";
import icons from "@/constants/icons";

type Props = { isSearchOn?: boolean };

const Header = ({ isSearchOn = true }: Props) => {
  return (
    <View className="flex-row items-start p-4 bg-dark-secondary">
      <View className="py-2 mr-auto">
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
            tintColor={"white"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
