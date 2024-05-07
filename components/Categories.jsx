import { View, Text, Image } from "react-native";
import React from "react";
import { categories } from "../assets/data/data/home";
import { StyleSheet } from "react-native";
const Categories = () => {
  return (
    <View className='grid mt-4 p-2'>
      {/* <Text>Categories</Text> */}
<View className='flex-row gap-5 flex-wrap justify-between'>
      {categories.map((category, index) => (
        <View className="flex-row " key={index}>
          <View className="bg-gray-200 h-[100px] w-[80px] p-2 items-center rounded-xl grid">
            <View className='rounded-full h-[40px] w-[40px] mt-3 items-center justify-center bg-white'>
            <Image source={category.img} className='w-[80%]  h-[80%]' />
            </View>
            <Text className='text-xs font-semibold mt-2'>{category.text}</Text>


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
