import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CampusCard = ({}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.cardHeader}>Campus naam</Text>
      <Text style={styles.cardAdres}>Campus adres</Text>
      <Text style={styles.cardFocus}>Campus focus</Text>
      <TouchableOpacity>
        <Text style={styles.cardButton}>Bekijk campus aanbod</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CampusCard;
