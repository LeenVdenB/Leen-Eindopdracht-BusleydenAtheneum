import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import RenderHTML from "react-native-render-html";

const ProductDetail = ({ route, navigation }) => {
  const { title, description, price, image } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>← Terug naar webshop</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>Prijs per item: €{price}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalPrice}>Totaal: €{price * quantity}</Text>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
    color: "#000000",
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    marginBottom: 15,
    borderRadius: 12,
  },

  description: {
    fontSize: 15,
    color: "#000000",
    lineHeight: 22,
    textAlign: "left",
    marginBottom: 10,
  },

  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000000",
    marginVertical: 10,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  button: {
    backgroundColor: "#86BC25",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  quantityText: {
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 15,
    color: "#000000",
  },

  totalPrice: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    color: "#000000",
  },
  backButton: {
    fontSize: 16,
    color: "#86BC25",
    marginBottom: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});

export default ProductDetail;
