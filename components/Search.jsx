import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';
const Search = () => {
  const navigation = useNavigation()
  return (
    <View className="  flex-row  justify-between content-center  border border-gray-300  rounded-2xl px-3 my-6 h-14 w-full">
      <View className="flex-row">
        <TouchableOpacity className="my-auto">
          <Feather
            name="search"
            color={"#D6D6D6"}
            size={22}
            className="my-auto"
          />
        </TouchableOpacity>

        <View className="rounded-sm ">
          <TextInput
            className="w-full h-full px-2"
            placeholder="Resturants, groceries, dishes"
          />
        </View>
      </View>

        <View>
          <TouchableOpacity 
          onPress={() => navigation.navigate('FilterModal')} 
          className="w-6 h-full my-auto justify-center items-center">
            <Ionicons name="options" size={22} color={"#4FAF5A"} />
          </TouchableOpacity>
        </View>
    
    </View>
  );
};

export default Search;
