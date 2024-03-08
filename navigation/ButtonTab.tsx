import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";
import Favorite from "../screens/Favorite";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();
interface ScreenOptions {
  tabBarShowLabel: boolean;
  tabBarHideOnKeyboard: boolean;
  headerShown: boolean;
  tabBarStyle: {
    position: "absolute";
    bottom: number;
    right: number;
    left: number;
    elevation: number;
    height: number;
    backgroundColor: string;
    borderRadius: number;
  };
}
const ButtonTab = () => {
  const screenOptions: ScreenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      // marginBottom: 10,
      elevation: 0,
      height: 90,
      backgroundColor: "black", // Set the background color to black
      borderRadius: 30, // Set the top-left border radius
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                // name={focused ? "home" : "home-outline"}
                name="home"
                size={24}
                color={focused ? "#4FAF5A" : "#828282"}
              />
            );
          },
        }}
      ></Tab.Screen>

<Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                // name={focused ? "home" : "home-outline"}
                name="heart"
                size={24}
                color={focused ? "#4FAF5A" : "#828282"}
              />
            );
          },
        }}
      ></Tab.Screen>


<Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                // name={focused ? "home" : "home-outline"}
                name="shopping-bag"
                size={24}
                color={focused ? "#4FAF5A" : "#828282"}
              />
            );
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default ButtonTab;
