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
    <View className="rounded-lg space-x-4 border-2 border-secondary w-full h-16 px-4 items-center flex-row">
      <TextInput
        className="text-lg mt-0.5 text-white flex-1  placeholder:font-body-medium"
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#4B4B4B"
        onChangeText={handleChangeText}
      />

      <TouchableOpacity>
        <Image
          className="w-5 h-5"
          resizeMode="contain"
          tintColor="#A8A8A8"
          source={icons.search}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
