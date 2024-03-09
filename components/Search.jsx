import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'

const Search = () => {
  return (
    <View className="  flex-row  justify-between content-center  border border-gray-300  rounded-2xl px-3 my-6 h-14 w-full">
              <View className='flex-row'>             
                   <TouchableOpacity className="my-auto">
                    <Feather name='search' color={'#D6D6D6'} size={22} className="my-auto" />
                </TouchableOpacity>
                <View className="rounded-sm ">
                    <TextInput
                        className="w-full h-full px-2"
                        value=''
                      
                        placeholder='Resturants, groceries, dishes'

 
              
                    />


                </View>
                </View>

                <View>
                    <TouchableOpacity className="w-6 h-full my-auto justify-center items-center">
                        <Ionicons name='options' size={22} color={'#4FAF5A'} />
                    </TouchableOpacity>
                </View>


            </View>
  )
}

export default Search