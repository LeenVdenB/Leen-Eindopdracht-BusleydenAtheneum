import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import CampusCard from "../components/CampusCard";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <CampusCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
