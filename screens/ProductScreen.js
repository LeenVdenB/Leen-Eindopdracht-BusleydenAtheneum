import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Producten</Text>
      <ProductCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ProductScreen;
