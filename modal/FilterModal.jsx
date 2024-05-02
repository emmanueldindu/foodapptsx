import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import categories from "../assets/data/filter.json";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const FilterModal = ({ navigation }) => {
const [items, setItems] = useState(categories)

  const ItemBox = () => (
    <>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="arrow-down" size={23} color={"gray"} />
          <Text style={{ flex: 1 }}>Sort</Text>
          <Ionicons name="chevron-forward" color={"#4FAF5A"} size={22} />
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="fast-food-outline" size={23} color={"gray"} />
          <Text style={{ flex: 1 }}>Offers</Text>
          <Ionicons name="chevron-forward" color={"#4FAF5A"} size={22} />
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="pricetag-outline" size={23} color={"gray"} />
          <Text style={{ flex: 1 }}>Dietary</Text>
          <Ionicons name="chevron-forward" color={"#4FAF5A"} size={22} />
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="nutrition-outline" size={23} color={"gray"} />
          <Text style={{ flex: 1 }}>Offers</Text>
          <Ionicons name="chevron-forward" color={"#4FAF5A"} size={22} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.header}>Categories</Text>
      </View>
    </>
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.itemText}>
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        size={18}
        fillColor="#4FAF5A"
        unFillColor="#FFFFFF"
        
        iconStyle={{ borderColor: "white", borderRadius: 6 }}
        innerIconStyle={{ borderWidth: 2, borderRadius: 6 }}
        onPress={(isChecked) => {
          console.log(isChecked);
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox />}
      />
      <View style={{ height: 120 }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: "white",
  },
  footer: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    height: 100,
    padding: 12,
    width: "100%",

    backgroundColor: "#fff",
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
    // marginTop:9
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 6,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 2,
  },
  item: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: "fff",
    paddingVertical: 8,
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20,
  },
  itemText: {
    flex: 1,
  },
});

export default FilterModal;
