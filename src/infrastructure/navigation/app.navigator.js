import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../../src/components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../../src/features/map/screens/map.screen";

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};
const Tab = createBottomTabNavigator();
const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={TAB_ICON[route.name]} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);
