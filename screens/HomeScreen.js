import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";

import CampusCard from "../components/CampusCard";
import { useEffect } from "react";
import Checkbox from "expo-checkbox";

const focusNames = {
  "": "Alle focus",
  "6a0481bd97312491772a9221": "Integraal & Creatief",
  "6a04819777ef4a0172930c91": "Gezondheid & Wetenschap",
  "6a04817766976d2d34bc92fe": "Ondernemen & IT",
  "6a048166296cab9deced4193": "Kennis & Onderzoek",
  "6a048153ef28c803b8312e82": "Verpleegkunde",
  "6a04813a3db7ac5321446140": "Mens & Welzijn",
  "6a0480ea2ae8af2d13fd4109": "Werken & Leren",
  "6a0480abe6fc862bbabe1a0b": "Aangepast onderwijs",
};

const HomeScreen = ({ navigation }) => {
  const [campusses, setCampusses] = useState([]);
  const [selectedFocuses, setSelectedFocuses] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleFocus = (focus) => {
    setSelectedFocuses((prev) =>
      prev.includes(focus) ? prev.filter((f) => f !== focus) : [...prev, focus],
    );
  };

  //campus
  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a06c29d1cce3894b86c1e0b/items",
      {
        headers: {
          authorization:
            "Bearer 4970d0a9d6a3f5c38c7d2fee3f0a717763c879474c73910e9d9baa15ff0b6cf2",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setCampusses(
          data.items.map((item) => ({
            id: item.id,
            name: item.fieldData.name,
            adress: item.fieldData.adres,
            color: item.fieldData.kleur,
            content: item.fieldData["info-tekst"],
            image: item.fieldData.afbeelding?.url,
            focus: focusNames[item.fieldData.focus] || "Onbekende focus",
          })),
        );
      })
      .catch((error) => console.error("Error fetching campusses:", error));
  }, []);

  const filteredCampusses = campusses.filter(
    (campus) =>
      selectedFocuses.length === 0 || selectedFocuses.includes(campus.focus),
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={styles.title}>Bouw aan jouw toekomst</Text>
        <Text style={styles.subtitle}>
          Busleyden Atheneum is de grootste en meest veelzijdige secundaire
          school van Mechelen.In Busleyden Atheneum willen we dat je een
          studierichting volgt die aansluit bij jouw talenten en interesses.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Onze campussen</Text>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setDropdownOpen(!dropdownOpen)}
      >
        <Text style={styles.dropdownButtonText}>
          {selectedFocuses.length === 0
            ? "Kies één of meerdere focussen"
            : selectedFocuses.join(", ")}
        </Text>
      </TouchableOpacity>

      {dropdownOpen && (
        <View style={styles.dropdownContent}>
          {Object.values(focusNames).map((focus) => (
            <View key={focus} style={styles.checkboxRow}>
              <Checkbox
                value={selectedFocuses.includes(focus)}
                onValueChange={() => toggleFocus(focus)}
                color="#000"
              />
              <Text style={styles.checkboxLabel}>{focus}</Text>
            </View>
          ))}
        </View>
      )}

      {filteredCampusses.map((campus) => (
        <CampusCard
          key={campus.id}
          name={campus.name}
          focus={campus.focus}
          address={campus.adress}
          color={campus.color}
          onPress={() => navigation.navigate("CampusDetail", campus)}
        />
      ))}

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  heroContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  heroImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    paddingBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#000000",
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    padding: 20,
    textAlign: "center",
  },
  checkboxContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  dropdownButton: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: "#000",
  },
  dropdownContent: {
    backgroundColor: "#fafafa",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default HomeScreen;
