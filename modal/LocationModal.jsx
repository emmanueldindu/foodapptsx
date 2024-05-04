import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationModal = () => {
  const navigation = useNavigation()
  const [location, setLocation] = useState({
    latitude: 51.5078788,
    longitude: -0.087777,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  

  
 

  return (  
    <View style={{ flex: 1 }}>
    <MapView style={styles.map} region={location} />
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


});
export default LocationModal;
