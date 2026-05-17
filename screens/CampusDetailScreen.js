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

const CampusDetailScreen = ({ route }) => {
  const { name, focus, adress, image, content, color } = route.params;
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.topContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={[styles.focusText, { backgroundColor: color }]}>
          {focus}
        </Text>
      </View>

      <View style={[styles.divider, { backgroundColor: color }]} />

      <Text style={styles.adressText}>{adress}</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
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
  divider: {
    height: 4,
    marginVertical: 15,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  focusText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: "#fff",
  },
  adressText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CampusDetailScreen;
