import { View, Text } from "react-native";
import React from "react";
import { categories } from "../assets/data/data/home";
import { StyleSheet } from "react-native";
const Categories = () => {
  return (
    <View className='grid mt-4 p-2'>
      <Text>Categories</Text>
<View className='flex-row gap-5'>
      {categories.map((category, index) => (
        <View className="flex-row" key={index}>
          <View className="bg-gray-200 h-[100px] w-[80px] rounded-lg grid">

          </View>
        </View>
      ))}
      </View>
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
