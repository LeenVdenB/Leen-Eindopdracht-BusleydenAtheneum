import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import { useEffect } from "react";
import RenderHTML from "react-native-render-html";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const NewsDetailScreen = ({ route }) => {
  const { title, summary, category, date, image, content } = route.params;
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.topContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.categoryText}>{category}</Text>
      </View>

      <Text style={styles.adressText}>{formatDate(date)}</Text>
      <RenderHTML
        source={{ html: content }}
        contentWidth={width}
        baseFontStyle={styles.text}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "space-between",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: "#000000",
    borderColor: "#86BC25",
    borderWidth: 1,
  },
  adressText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default NewsDetailScreen;
