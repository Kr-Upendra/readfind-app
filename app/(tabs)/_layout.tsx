import { Tabs } from "expo-router";
import icons from "@/constants/icons";
import { TabIcon } from "@/components";
import { SafeAreaView } from "react-native-safe-area-context";

const TabLayout = () => {
  return (
    <>
      <SafeAreaView className="bg-dark-secondary flex-1">
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
      </SafeAreaView>
    </>
  );
};

export default TabLayout;
