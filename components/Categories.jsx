import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { categories } from "../assets/data/data/home";
import { StyleSheet } from "react-native";
const Categories = () => {
  return (
    <View className="grid mt-4 p-2 h-[170px] gap-y-2 ">
      {/* <Text>Categories</Text> */}
      <Text className="font-semibold text-sm p-1">categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator="false">
        <View className="flex-row gap-5 flex-wrap justify-between ">
          {categories.map((category, index) => (
            <View className="flex-row " key={index}>
              <View className="bg-gray-200 h-[80px] w-[80px] p-2 items-center rounded-full grid">
                <View className="rounded-full h-[40px] w-[40px] mt-3 items-center justify-center bg-white">
                  <Image source={category.img} className="w-[80%]  h-[80%]" />
                </View>

                <Text className="text-xs font-semibold mt-6">
                  {category.text}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    color: "red",
    fontSize: 34,
  },
});
export default Categories;
