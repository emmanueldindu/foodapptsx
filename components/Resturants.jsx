import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { restaurants } from "../assets/data/data/home";

const Resturants = () => {
  return (
    <View className="flex h-[250px]  p-4  mt-6">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-5 justify-between">
          {restaurants.map((resturant, index) => (
            <View className="flex-row" key={index}>
              <View className="bg-gray-200 h-[190px] w-[170px] p-2 mt-4 items-center rounded-xl grid">
           <View className='w-full flex absolute z-[100]'>
                <View className='absolute z-[100] mt-3  mx-[100px] rounded-lg items-center p-1 flex-row justify-between w-[50px]  h-6  bg-white  '>
                  <Ionicons name="star" color={'gold'} className='items-center ' />
                  <Text>4.8</Text>
                </View>
                </View>
<Image source={resturant.img} className='h-[120px] w-[160px] rounded-md '/>
<Text className='mt-2 text-sm w-full p-1 font-semibold'>{resturant.name}</Text>
<View className='flex-row w-full justify-between px-1 ' >
  <Text>1.2km</Text>
  <Text>15-20minutes</Text>

   </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Resturants;
