import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({
  title,
  description,
  price,
  image,
  category,
  onPress,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Text style={styles.category}>{category}</Text>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.divider}></Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>€{price}</Text>
      <Button title="Bekijk product" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginVertical: 10,
    borderRadius: 10,
    boxShadowColor: "#000",
    boxShadowOffset: { width: 0, height: 2 },
    boxShadowOpacity: 0.25,
    boxShadowRadius: 3.84,
    elevation: 5,
  },
  category: {
    fontSize: 14,
    color: "#000000",
    borderColor: "#86BC25",
    borderRadius: 8,
    borderWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    marginTop: 6,
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  divider: {
    borderBottomColor: "#86BC25",
    borderBottomWidth: 4,
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: "#000000",
  },
});

export default ProductCard;
