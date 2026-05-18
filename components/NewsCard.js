import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewsCard = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Text style={styles.header}>News Title</Text>
      <Image
        source={{ uri: "https://via.placeholder.com/300" }}
        style={styles.image}
      />
      <Text style={styles.category}>Category</Text>
      <Text style={styles.summary}>This is a summary of the news article.</Text>
      <Text style={styles.date}>Date</Text>
      <TouchableOpacity>
        <Text style={styles.button}>Lees meer</Text>
      </TouchableOpacity>
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
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  summary: {
    marginTop: 6,
    fontSize: 16,
    color: "#000000",
  },
  category: {
    borderColor: "#86BC25",
    borderWidth: 1,
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 8,
    fontSize: 12,
    color: "#000000",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: "#000000",
    marginTop: 4,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#86BC25",
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default NewsCard;
