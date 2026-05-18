import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("date-desc");

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
            category:
              categoryMap[item.fieldData.categorie] || "Onbekende categorie",
            date: item.fieldData.datum,
            image: item.fieldData.foto?.url,
            content: item.fieldData.body,
          })),
        );
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  const filteredNews = news.filter(
    (n) =>
      (selectedCategory === "" || n.category === selectedCategory) &&
      n.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortOption === "date-desc") return new Date(b.date) - new Date(a.date);
    if (sortOption === "date-asc") return new Date(a.date) - new Date(b.date);
    return 0;
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nieuws</Text>

      <TextInput
        style={styles.search}
        placeholder="Zoek nieuws..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.pickerRow}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          style={styles.pickerHalf}
        >
          <Picker.Item label="Alle categorieën" value="" />
          <Picker.Item label="Nieuws" value="Nieuws" />
          <Picker.Item label="Terugblik" value="Terugblik" />
          <Picker.Item label="Activiteit" value="Activiteit" />
        </Picker>

        <Picker
          selectedValue={sortOption}
          onValueChange={setSortOption}
          style={styles.pickerHalf}
        >
          <Picker.Item label="Nieuwste eerst" value="date-desc" />
          <Picker.Item label="Oudste eerst" value="date-asc" />
        </Picker>
      </View>

      {sortedNews.map((news) => (
        <NewsCard
          key={news.id}
          title={news.title}
          summary={news.summary}
          category={news.category}
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
  search: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
  },
  pickerRow: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  pickerHalf: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default NewsScreen;
