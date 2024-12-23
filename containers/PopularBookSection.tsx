import { FlatList, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { BookCard, ErrorCard, LoadingCard, SectionHeader } from "@/components";
import { placeholderData } from "@/utils";
import { getPopularBooks } from "@/services";
import icons from "@/constants/icons";
import { useRouter } from "expo-router";

const PopularBooksSection = () => {
  const router = useRouter();
  const {
    data: popularBooks,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["popular-books"],
    queryFn: getPopularBooks,
  });

  return (
    <View className="horizontal-scroll-container">
      <SectionHeader
        title="Top Books of the Month"
        onArrowPress={() =>
          router.push("/(lists)/bookLists?list=popular-books")
        }
        arrowIcon={icons.rightArrow}
      />

      {error ? (
        <ErrorCard onRefresh={() => refetch()} />
      ) : (
        <FlatList
          data={isLoading ? placeholderData : popularBooks?.data.slice(0, 10)}
          horizontal
          renderItem={({ item }) =>
            isLoading ? (
              <LoadingCard key={item.id} />
            ) : (
              <BookCard
                id={item.id}
                title={item.title}
                author={item.author}
                cover={item.image}
              />
            )
          }
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default PopularBooksSection;
