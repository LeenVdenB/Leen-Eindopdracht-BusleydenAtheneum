import { View, Text, StyleSheet } from "react-native";

const ProductCard = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Product Name</Text>
      <Text style={styles.price}>$9.99</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    marginVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    marginTop: 6,
    fontSize: 16,
    color: "#333",
  },
});
