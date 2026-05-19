import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "6a06d8853930dd58a0e94469": "Accessoires",
  "6a06d87ca873ba1cdbba176c": "Baby & kids",
  "6a06d868bb279e3f7fcd4614": "School spullen",
  "6a06d801e250df66b10ff46c": "Sweater",
  "6a06d7faef120ae92b377b6a": "Hoodie",
};

const ProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/6a046dc62c1f6537649e8068/products",
      {
        headers: {
          authorization:
            "Bearer 4970d0a9d6a3f5c38c7d2fee3f0a717763c879474c73910e9d9baa15ff0b6cf2",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            description: item.product.fieldData.description,
            price: (item.skus[0]?.fieldData.price.value || 0) / 100,
            image: { uri: item.skus[0]?.fieldData["main-image"]?.url },
            category:
              categoryNames[item.product.fieldData.category[0]] ||
              "Onbekende categorie",
          })),
        );
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // ⭐ SORTEREN
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Zoek producten..."
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
          <Picker.Item label="Accessoires" value="Accessoires" />
          <Picker.Item label="Baby & kids" value="Baby & kids" />
          <Picker.Item label="School spullen" value="School spullen" />
          <Picker.Item label="Sweater" value="Sweater" />
          <Picker.Item label="Hoodie" value="Hoodie" />
        </Picker>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>
            Prijs: {sortOption === "price-asc" ? "Laag → Hoog" : "Hoog → Laag"}
          </Text>

          <Switch
            value={sortOption === "price-asc"}
            onValueChange={(value) =>
              setSortOption(value ? "price-asc" : "price-desc")
            }
            thumbColor={sortOption === "price-asc" ? "#86BC25" : "#ccc"}
            trackColor={{ true: "#b7d88a", false: "#999" }}
          />
        </View>
      </View>
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          category={product.category}
          onPress={() => navigation.navigate("ProductDetail", { ...product })}
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
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 8,
  },

  switchLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});

export default ProductScreen;
