import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, navigation }: any) {
  return (
    <View style={s.tabBarWrapper}>
      <View style={s.tabBar}>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const iconName = route.name === "Home" ? "home-outline" : "person-outline";
          const label = route.name === "Home" ? "Explorer" : "Account";

          return (
            <TouchableOpacity
              key={route.key}
              style={s.tabItem}
              onPress={() => navigation.navigate(route.name)}
            >
              <Ionicons
                name={iconName}
                size={24}
                color={isFocused ? "#F5A623" : "gray"}
              />
              <Text style={[s.tabLabel, isFocused && s.tabLabelActive]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function MainTab() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const s = StyleSheet.create({
  tabBarWrapper: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  tabBar: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 390,
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  tabLabel: {
    fontSize: 11,
    color: "gray",
  },
  tabLabelActive: {
    color: "#F5A623",
  },
});