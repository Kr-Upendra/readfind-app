import { FlatList, View } from "react-native";
import React from "react";
import { GenreCard, SectionHeader } from "@/components";
import icons from "@/constants/icons";
import { router } from "expo-router";

type Props = {
  genres: any[];
};

const GenreContainer = ({ genres }: Props) => {
  return (
    <View className="horizontal-scroll-container">
      <SectionHeader
        title="Available Genres"
        onArrowPress={() => router.push("/genre")}
        arrowIcon={icons.rightArrow}
      />
      <FlatList
        data={genres.slice(0, 10)}
        horizontal
        renderItem={({ item }) => (
          <GenreCard
            genre={item.name}
            icon={item.icon}
            onPress={() =>
              router.push({
                pathname: "/(lists)/[category]",
                params: { category: item.searchWord },
              })
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={20}
      />
    </View>
  );
};

export default GenreContainer;
