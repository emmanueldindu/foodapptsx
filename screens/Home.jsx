import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useRef, forwardRef, useMemo, useState } from "react";

import { Feather, Ionicons } from "@expo/vector-icons";
import Search from "../components/Search";
import Slider from "../components/Slider";

const Home = () => {
  const screenHeight = Dimensions.get("window").height;
  const [isVisible, setIsVisible] = useState(false);
  const translateY = useRef(new Animated.Value(screenHeight)).current;

  const toggleBottomSheet = () => {
    Animated.timing(translateY, {
      toValue: isVisible ? screenHeight : 0,
      duration: 300,
      useNativeDriver: false, // Set to true if you're using Hermes
    }).start(() => {
      setIsVisible(!isVisible);
    });
  };

  return (
    <SafeAreaView>
      <View className="mt-4  mx-4">
        <View className="items-center  justify-between flex-row">
          <View className="flex-row gap-x-3">
            <TouchableOpacity onPress={toggleBottomSheet}>
              <View className="h-12 bg-[#F4FAF7]  rounded-lg w-12 items-center p-3">
                <Feather name="map-pin" size={24} color={"#4FAF5A"} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="grid i mt-2">
                <View className="flex-row gap-x-1">
                  <Text className="text-gray-400">Del. Address</Text>
                  <Ionicons name="chevron-down" />
                </View>
                <Text className="">Oladipo Str. Lugbe</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity>
            <View className="h-12 bg-gray-200 rounded-lg w-12 items-center p-3">
              <Feather name="bell" size={24} color={"black"} />
            </View>
          </TouchableOpacity>
        </View>
        <Search />
        <Slider />
      </View>
      <Animated.View
        style={[
          styles.bottomSheet,
          {
            transform: [{ translateY }],
          },
        ]}
      >
        <TouchableOpacity
          onPress={toggleBottomSheet}
          style={styles.dismissButton}
        >
          <View style={styles.dismissIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleBottomSheet}></TouchableOpacity>
        <View style={styles.toggle}>
          <TouchableOpacity
            className="bg-green-400 rounded-xl px-4"
            style={styles.toggleActive}
          >
            <Text className="text-white font-semibold p-2 ">Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" rounded-xl px-4"
            style={styles.toggleInactive}
          >
            <Text className=" font-semibold p-2 text-green-400">Pickup</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between p-3">
          <View className="flex-row gap-x-2">
            <Feather name="map-pin" size={16} color={"#4FAF5A"} />
            <Text>Location</Text>
          </View>
          <View className="flex-row gap-x-3">

            <Text className="text-gray-400 text-sm">Baywood</Text>
          </View>
        </View>

        <View className="flex-row justify-between p-3">
          <View className="flex-row gap-x-2">
          <Feather name="clock" size={16} color={"#4FAF5A"} />

            <Text>Delivery Time</Text>
          </View>
          <View className="flex-row gap-x-3">

            <Text className="text-gray-400 text-sm">15min</Text>
          </View>
        </View>
        <View className="">
          <TouchableOpacity
            className="bg-black  p-4 rounded-lg items-center"
            onPress={toggleBottomSheet}
          >
            <Text className="text-white font-bold">Confirm</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 32,
  },
  toggleInactive: {},
  toggleActive: {},
  bottomSheet: {
    position: "absolute",
    bottom: -420,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    // height: 200,
  },
  dismissButton: {
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 15,
  },
  dismissIcon: {
    backgroundColor: "#ccc",
    height: 5,
    width: 40,
    borderRadius: 10,
  },
});

export default Home;
