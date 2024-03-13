import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useRef, forwardRef, useMemo } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import Search from "../components/Search";
import Slider from "../components/Slider";





const Home = () => {
 


  const renderContent = () => (
    <View>
      <Text>
        bottom
      </Text>
    </View>
  )

  return (

    <SafeAreaView>
      <View className="mt-4  mx-4">
        <View className="items-center  justify-between flex-row">

          <View className='flex-row gap-x-3'>
            <TouchableOpacity >
              <View className="h-12 bg-[#F4FAF7]  rounded-lg w-12 items-center p-3">
                <Feather name="map-pin" size={24} color={"#4FAF5A"} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity >
             <View className='grid i mt-2'>
              <View className='flex-row gap-x-1'>
                <Text className='text-gray-400'>Del. Address</Text>
                <Ionicons name="chevron-down" />
              </View>
              <Text className=''>Oladipo Str. Lugbe</Text>

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
    </SafeAreaView>


  );
};

export default Home;
