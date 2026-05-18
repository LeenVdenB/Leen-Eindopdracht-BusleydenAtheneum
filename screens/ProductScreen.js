import { View, Text, StyleSheet } from "react-native";

export default function WebshopScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Webshop</Text>
    </View>
  );
}

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
