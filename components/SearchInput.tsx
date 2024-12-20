import {
  Image,
  KeyboardType,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";

type Props = {
  placeholder: string;
  value?: string;
  handleChangeText?: (text: string) => void;
  keyboardType?: KeyboardType;
};

const SearchInput = ({
  placeholder,
  value,
  handleChangeText,
  keyboardType = "default",
}: Props) => {
  return (
    <View className="rounded-lg bg-dark-secondary border-secondary border-2 w-full h-16 items-center flex-row">
      <TextInput
        className="text-lg h-full text-primary font-body-bold flex-1 focus:bg-dark-secondary rounded-l-lg pl-2 border border-secondary"
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#4B4B4B"
        onChangeText={handleChangeText}
      />

      <TouchableOpacity className="w-16 bg-dark-secondary rounded-r-lg flex justify-center items-center h-full">
        <Image
          className="w-8 h-8"
          resizeMode="contain"
          tintColor="#FFFFFF"
          source={icons.search}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
