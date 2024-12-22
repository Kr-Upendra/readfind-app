import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import icons from "@/constants/icons";
import { TabIcon } from "@/components";
import "../global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "fredoka-one-regular": require("../assets/fonts/fredoka-one-regular.ttf"),
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBold": require("../assets/fonts/OpenSans-ExtraBold.ttf"),
    "OpenSans-Light": require("../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Medium": require("../assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#FFDD00",
            tabBarInactiveTintColor: "#A8A8A8",
            tabBarStyle: {
              backgroundColor: "#121212",
              borderTopWidth: 1,
              borderTopColor: "#121212",
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <TabIcon icon={icons.home} color={color} focused={focused} />
              ),
            }}
          />
          <Tabs.Screen
            name="genre"
            options={{
              title: "Genre",
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <TabIcon icon={icons.genre} color={color} focused={focused} />
              ),
            }}
          />
          <Tabs.Screen
            name="bookmark"
            options={{
              title: "Bookmark",
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <TabIcon
                  icon={icons.bookmark}
                  color={color}
                  focused={focused}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="search"
            options={{
              title: "Search",
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <TabIcon icon={icons.search} color={color} focused={focused} />
              ),
            }}
          />
        </Tabs>
      </QueryClientProvider>
    </>
  );
};

export default RootLayout;
