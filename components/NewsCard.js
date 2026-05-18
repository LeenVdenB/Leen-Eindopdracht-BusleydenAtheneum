import { View, Text, StyleSheet } from "react-native";

const NewsCard = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Text style={styles.title}>News Title</Text>
      <Text style={styles.summary}>This is a summary of the news article.</Text>
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
  summary: {
    marginTop: 6,
    fontSize: 14,
    color: "#555",
  },
});
