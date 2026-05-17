import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CampusCard = ({ name, focus, address, color, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.cardContainer, { backgroundColor: color }]}>
      <View style={styles.cardHeaderContainer}>
        <Text style={styles.cardHeader}>{name}</Text>
        <Text style={styles.cardFocus}>{focus}</Text>
      </View>
      <Text style={styles.cardAdres}>{address}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.cardButton}>Bekijk campus aanbod</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 20,
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000000a8",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  cardHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardHeader: {
    fontSize: 28,
    fontFamily: "Poppins",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  cardFocus: {
    fontSize: 14,
    fontFamily: "Arial",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  cardAdres: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Arial",
    marginBottom: 10,
  },
  cardButton: {
    fontSize: 16,
    fontFamily: "Arial",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "flex-start",
  },
});

export default CampusCard;
