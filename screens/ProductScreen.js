import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";

const categoryNames = {
  "6a06d8853930dd58a0e94469": "Accessoires",
  "6a06d87ca873ba1cdbba176c": "Baby & kids",
  "6a06d868bb279e3f7fcd4614": "School spullen",
  "6a06d801e250df66b10ff46c": "Sweater",
  "6a06d7faef120ae92b377b6a": "Hoodie",
};

const ProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

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

  return (
    <ScrollView>
      {products.map((product) => (
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ProductScreen;
