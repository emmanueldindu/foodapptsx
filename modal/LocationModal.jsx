import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from "axios";
const LocationModal = () => {
    const navigation = useNavigation()
  const [location, setLocation] = useState({
    latitude: 51.5078788,
    longitude: -0.087777,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,

  });


  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=pk.eyJ1Ijoib2RvaSIsImEiOiJjbHZzYW4wcG4wNXVsMnZtZjlobDl0Njh4In0.1gQK-stsJQ_7hM1S9UOzZA`
      );
      const { features } = response.data;
      if (features && features.length > 0) {
        const { center } = features[0];
        setLocation({
          latitude: center[1],
          longitude: center[0],
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        });
      }
    } catch (error) {
      console.error("Error searching location:", error);
    }
  };




  

  return (
    // imo_usual
    <View style={{ flex: 1 }}>
     
      <MapView style={styles.map} region={location} />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search location"
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.absuluteBtn}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  absuluteBtn: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  btn: {
    backgroundColor: "#4FAF5A",
    padding: 15,
    margin: 15,
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold'

  },

  searchContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },


});
export default LocationModal;
