import React, { useEffect, useState } from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { FontAwesome } from "@expo/vector-icons";
import LoadingBookDetail from "@/components/LoadingBookDetail";
import { getBookDetails } from "@/services";
import { EmptyState } from "@/components";
import { addBookmark, isBookmarked, removeBookmark } from "@/utils";

const BookDetail = () => {
  const { bookId } = useLocalSearchParams();
  const {
    data: book,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["book-details", bookId],
    queryFn: () => getBookDetails(bookId as string),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
  const [bookmark, setBookmark] = useState(false);

  useEffect(() => {
    const checkBookmark = async () => {
      if (book) {
        const bookmarked = await isBookmarked(bookId as string);
        setBookmark(bookmarked);
      }
    };
    checkBookmark();
  }, [book]);

  const toggleBookmark = async () => {
    if (bookmark) {
      await removeBookmark(book?.data.id);
      setBookmark(false);
      Alert.alert("Unbookmarked", `Book unbookmarked successfully.`, [
        { text: "OK" },
      ]);
    } else {
      await addBookmark({
        id: book?.data.id,
        title: book?.data?.title,
        image: book?.data?.image,
        author: book?.data?.author,
      });
      setBookmark(true);
      Alert.alert("Bookmarked", `Book bookmarked successfully..`, [
        { text: "OK" },
      ]);
    }
  };

  return (
    <>
      <Stack.Screen
        name="details/[bookId]"
        options={{
          title: "Book Detail",
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "fredoka-one-regular",
          },
          headerTitle: () => (
            <Text className="text-primary font-heading-regular text-xl">
              Book Detail
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={toggleBookmark}
              style={{
                marginRight: 15,
              }}
            >
              <FontAwesome
                name={bookmark ? "bookmark" : "bookmark-o"}
                size={24}
                color={bookmark ? "#FFDD00" : "white"}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView className="p-4 bg-dark-primary h-full relative">
        {isLoading ? (
          <LoadingBookDetail />
        ) : error ? (
          <EmptyState message="Please try again later." />
        ) : (
          <>
            <Text className="text-2xl font-body-bold text-secondary/75 leading-relaxed">
              {book.data.title}
            </Text>
            <View className="flex-row items-center my-3">
              <Text className="text-lg font-body-medium text-gray-primary/80">
                Author:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                {book.data.author || "-"}
              </Text>
            </View>
            <View className="h-[600px] w-full my-3">
              <Image
                source={{
                  uri: book.data?.image,
                  headers: { Accept: "image/*" },
                }}
                resizeMode="cover"
                className={`w-full h-full mb-2.5 rounded-xl`}
              />
            </View>
            <View className="pb-1.5 w-full my-3">
              <Text className="text-lg mb-1.5 font-body-medium text-gray-primary/80">
                Synopsis
              </Text>
              <Text className="font-body-semibold text-gray-primary/60">
                {book.data?.description || "-"}
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                Language:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                {book.data?.language || "-"}
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                Total Pages:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                {book.data?.numberOfPages || "-"}
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                Adult Content:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                {book.data?.adultContent || "NO"}
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                Reading Age:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                {book.data?.readingAge || "-"}
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                ISBN 13:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                {book.data?.isbn13 || "-"}
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                ISBNS:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                {book.data?.isbns.includes(",")
                  ? book.data?.isbns.split(",")[0]
                  : book.data?.isbns || "-"}
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                Publisher:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                {book.data?.publisher || "-"}
              </Text>
            </View>
            <View className="flex-row items-center flex-wrap my-3">
              <Text className="text-lg mr-3 font-body-medium text-gray-primary/80">
                Genres:
              </Text>
              {book.data?.genres.length > 0 ? (
                book.data?.genres.map((item: string, index: number) => (
                  <React.Fragment key={index}>
                    <Link
                      className="font-body-semibold text-gray-primary"
                      href={"/"}
                    >
                      <Text>{item}</Text>
                    </Link>
                    {index < book.data?.genres.length - 1 && (
                      <Text className="text-gray-primary">, </Text>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <Text className="font-body-semibold text-gray-primary">-</Text>
              )}
            </View>
            <View className="h-14"></View>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default BookDetail;
