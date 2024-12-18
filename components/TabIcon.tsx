import { Image, ImageSourcePropType, View } from "react-native";

type Props = {
  icon: ImageSourcePropType;
  color: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, focused }: Props) => {
  return (
    <View className="">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 24, height: 24 }}
      />
    </View>
  );
};

export default TabIcon;
