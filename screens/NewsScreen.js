import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";

import NewsCard from "../components/NewsCard";

const categoryMap = {
  "6a047ef8ba7d93597dc2d79b": "Terugblik",
  "6a047ef173e46fd33540e843": "Nieuws",
  "6a047ee83d53327ed4034efd": "Activiteit",
};

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const NewsScreen = ({ navigation }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a047dcc700d7ba0c7aa8b86/items",
      {
        headers: {
          authorization:
            "Bearer 4970d0a9d6a3f5c38c7d2fee3f0a717763c879474c73910e9d9baa15ff0b6cf2",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(
          data.items.map((item) => ({
            id: item.id,
            title: item.fieldData.name,
            summary: item.fieldData["intro-tekst"],
            category: item.fieldData.categorie,
            date: item.fieldData.datum,
            image: item.fieldData.foto?.url,
            content: item.fieldData.body,
          })),
        );
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nieuws</Text>

      {news.map((news) => (
        <NewsCard
          key={news.id}
          title={news.title}
          summary={news.summary}
          category={categoryMap[news.category] || "Onbekende categorie"}
          date={formatDate(news.date)}
          image={news.image}
          onPress={() => navigation.navigate("NewsDetail", news)}
        />
      ))}
    </ScrollView>
  );
};

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

export default NewsScreen;
