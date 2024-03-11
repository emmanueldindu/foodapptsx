import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import React, { Component } from "react";
import burger from "../assets/burger.png";
import ice from "../assets/icecream.png";
import sand from '../assets/sand.png'

import { SwiperFlatList } from "react-native-swiper-flatlist";

const Slider = () => {
  const slides = [
    {
      text: "Claim your discount 30% daily now! Order now",
      backgroundColor: "#F4FAF7",
      image: require("../assets/icecream.png"),
    },
    {
      text: "Special Offer: Buy one, get one free!",
      backgroundColor: "#FFE082",
      image: require("../assets/sand.png"),
    },
    {
      text: "Special Offer: Buy one, get one free!",
      backgroundColor: "#FFE082",
      image: require("../assets/burger.png"),
    },

    // Add more slides as needed
  ];

  return (
    <View className=" mt-3 mx-auto p-1">
      <SwiperFlatList autoplay autoplayDelay={3} 
      paginationStyle={{marginBottom : 17}}
      paginationStyleItem={{height: 3, width: 15 }}
       showPagination autoplayLoop index={0}>
        <View style={[styles.child]} className="flex-row justify-between  rounded-lg h-[182px] bg-green-400 ">
          <View className="grid w-[50%]">
            <Text className="text-xl  p-3 text-white">
              Claim Your Discount 30% daily Now!
            </Text>
         <View className='bg-black h-[30px] mx-3 text-center items-center p-1  rounded-xl w-[87px]'>
          <Text className='text-white font-semibold'>Order Now</Text>
         </View>
          </View>

          <View className="w-[50%]">
            <Image className="h-full p-3" source={ice} />
          </View>
        </View>

        <View style={[styles.child]} className="flex-row justify-between  rounded-lg h-[182px] bg-[#DDBB66] ">
          <View className="grid w-[50%] ">
            <Text className="text-xl  p-3 text-white">
             Special Offer: Buy one get one Free!
            </Text>
         <View className='bg-black h-[30px] mx-3 text-center items-center p-1 mt-3  rounded-xl w-[87px]'>
          <Text className='text-white font-semibold'>Order Now</Text>
         </View>
          </View>

          <View className="w-[50%]">
            <Image className="h-full p-3" source={burger} />
          </View>
        </View>

        <View style={[styles.child]} className="flex-row justify-between  rounded-lg h-[182px] bg-orange-400 ">
          <View className="grid p-2 w-[50%]">
            <Text className="text-xl  p-3 text-white">
              Claim Your Discount 30% daily Now!
            </Text>
         <View className='bg-black h-[30px] mx-3 text-center items-center p-1  rounded-xl w-[87px]'>
          <Text className='text-white font-semibold'>Order Now</Text>
         </View>
          </View>

          <View className="w-[50%]">
            <Image className="h-full p-3" source={sand} />
          </View>
        </View>
        
      </SwiperFlatList>
    </View>
  );
};


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  child: { width, },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default Slider;
