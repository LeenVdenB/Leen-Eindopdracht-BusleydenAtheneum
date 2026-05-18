import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewsCard = ({ title, summary, category, date, image, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.header}>{title}</Text>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.summary}>{summary}</Text>
        <Text style={styles.date}>{date}</Text>

        <Text style={styles.button}>Lees meer</Text>
      </View>
    </TouchableOpacity>
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
