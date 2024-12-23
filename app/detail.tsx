import { Link } from "expo-router";
import { View, Text, ScrollView, Image } from "react-native";
import LoadingBookDetail from "@/components/LoadingBookDetail";

const BookDetail = () => {
  const cover =
    "https://www.bookshare.org/cover/Fu/FuGOY9RJ1-6DZcGJTeyZLnHCBDwQ2XiZDn66V7dCkmg-MEDIUM.jpg";
  const genres = [
    "Nonfiction",
    "Computers and Internet",
    "Mathematics and Statistics",
    "Sociology",
  ];
  const isLoading = false;

  return (
    <>
      <ScrollView className="p-4 bg-dark-primary h-full">
        {isLoading ? (
          <LoadingBookDetail />
        ) : (
          <>
            <Text className="text-2xl font-body-bold text-secondary/75 leading-relaxed">
              The Hunger Games Trilogy: The Hunger Games, Catching Fire, and
              Mockingjay
            </Text>
            <View className="flex-row my-3">
              <Text className="text-lg font-body-medium text-gray-primary/80">
                Author:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                Aleš Leonardis, Elisa Ricci, Stefan Roth, Olga Russakovsky,
                Torsten Sattler, Gül Varol
              </Text>
            </View>
            <View className="h-[600px] w-full my-3">
              <Image
                source={{ uri: cover, headers: { Accept: "image/*" } }}
                resizeMode="cover"
                className={`w-full h-full mb-2.5 rounded-xl`}
              />
            </View>
            <View className="pb-1.5 w-full my-3">
              <Text className="text-lg mb-1.5 font-body-medium text-gray-primary/80">
                Description
              </Text>
              <Text className="font-body-semibold text-gray-primary/60">
                The multi-volume set of LNCS books with volume numbers 15059 up
                to 15147 constitutes the refereed proceedings of the 18th
                European Conference on Computer Vision, ECCV 2024, held in
                Milan, Italy, during September 29–October 4, 2024.\n\nThe 2387
                papers presented in these proceedings were carefully reviewed
                and selected from a total of 8585 submissions. They deal with
                topics such as computer vision; machine learning; deep neural
                networks; reinforcement learning; object recognition; image
                classification; image processing; object detection; semantic
                segmentation; human pose estimation; 3d reconstruction; stereo
                vision; computational photography; neural networks; image
                coding; image reconstruction; motion estimation.
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                Language:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                English
              </Text>
            </View>

            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                Total Page:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                255
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                Adult Content:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                YES
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                Reading Age:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                14+
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                ISBN 13:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                9783031736506
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                ISBNS:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                9783031736490
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-secondary my-3 py-4 rounded-lg px-3.5">
              <Text className="mr-auto font-body-medium text-gray-primary/80">
                Publisher:
              </Text>
              <Text className="ml-2.5 font-body-semibold text-gray-primary">
                Springer Nature Switzerland
              </Text>
            </View>
            <View className="flex-row items-center flex-wrap my-3">
              <Text className="text-lg mr-3 font-body-medium text-gray-primary/80">
                Genres:
              </Text>
              {genres.map((item, index) => (
                <Link
                  className="mr-2 font-body-semibold text-gray-primary"
                  href={"/"}
                  key={index}
                >
                  <Text>{item},</Text>
                </Link>
              ))}
            </View>
            <View className="h-14"></View>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default BookDetail;
