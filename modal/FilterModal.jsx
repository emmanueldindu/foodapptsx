import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import categories from "../assets/data/filter.json";
import { Ionicons } from "@expo/vector-icons";
const FilterModal = ({ navigation }) => {
  const ItemBox = () => (
    <View style={styles.itemContainer}>
 <TouchableOpacity style={styles.item}>
<Ionicons name="arrow-down" size={23} color={'gray'} />
<Text style={{flex: 1}}>Sort</Text>
 </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={categories} renderItem={renderItem} ListHeaderComponent={<ItemBox />} />
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.fullButton}
        >
          <Text className="text-white" style={styles.footerText}>
            Done
          </Text>
        </TouchableOpacity>
        {/* <Text>Footer</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  footer: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    height: 100,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -15,
    },
  },
  fullButton: {
    backgroundColor: "#4FAF5A",
    padding: 16,
    alignItems: "center",
    borderRadius: 15,
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemContainer: {},
  item: {
    flexDirection: 'row',
    gap: 9,
    alignItems: 'center',
    backgroundColor: 'fff',
    paddingVertical:8,
    borderColor: '#ccc',
    borderBottomWidth: 1
  }
});

export default FilterModal;
