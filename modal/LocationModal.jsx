import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";

const LocationModal = () => {
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
        <TouchableOpacity style={styles.btn}>
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
  },
  btn: {

  },
  buttonText: {

  }
});
export default LocationModal;
