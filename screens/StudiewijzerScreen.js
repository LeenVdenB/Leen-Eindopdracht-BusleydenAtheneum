import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import RenderHTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";

const StudiewijzerScreen = ({ navigation }) => {
  const [campussen, setCampussen] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState("");
  const [selectedGraad, setSelectedGraad] = useState("");
  const { width } = useWindowDimensions();

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
        setCampussen(data.items || []);
      })
      .catch((error) => console.error("Error fetching campussen:", error));
  }, []);

  const selectedCampusObject = campussen.find((c) => c.id === selectedCampus);
  let graadContent = null;

  if (selectedCampusObject) {
    if (selectedGraad === "1-2") {
      graadContent = selectedCampusObject.fieldData.opleidingen;
    }
    if (selectedGraad === "3-4") {
      graadContent = selectedCampusObject.fieldData["3de-4de-jaar"];
    }
    if (selectedGraad === "5-6") {
      graadContent = selectedCampusObject.fieldData["5de-6de-jaar"];
    }
    if (selectedGraad === "specialisatie") {
      graadContent = selectedCampusObject.fieldData.specialisatiejaren;
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>← Terug naar home</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Studiewijzer</Text>
        <Text style={styles.label}>Kies een campus</Text>
        <Picker
          selectedValue={selectedCampus}
          onValueChange={setSelectedCampus}
          style={styles.picker}
        >
          <Picker.Item label="Selecteer een campus" value="" />
          {campussen.map((campus) => (
            <Picker.Item
              key={campus.id}
              label={campus.fieldData.name}
              value={campus.id}
            />
          ))}
        </Picker>

        <Text style={styles.label}>Kies een graad</Text>
        <Picker
          selectedValue={selectedGraad}
          onValueChange={setSelectedGraad}
          style={styles.picker}
        >
          <Picker.Item label="Selecteer een graad" value="" />
          <Picker.Item label="1ste & 2de jaar" value="1-2" />
          <Picker.Item label="3de & 4de jaar" value="3-4" />
          <Picker.Item label="5de & 6de jaar" value="5-6" />
          <Picker.Item label="Specialisatiejaren" value="specialisatie" />
        </Picker>

        <View style={styles.results}>
          {!selectedCampus || !selectedGraad ? (
            <Text style={styles.placeholder}>
              Selecteer een campus én een graad
            </Text>
          ) : (
            <View>
              <Text style={styles.resultTitle}>Opleidingen:</Text>
              <RenderHTML
                source={{ html: graadContent }}
                contentWidth={width - 40}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    padding: 20,
  },
  backButton: {
    fontSize: 16,
    color: "#86BC25",
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  results: {
    marginTop: 30,
  },
  placeholder: {
    fontSize: 16,
    color: "#888",
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  rawText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default StudiewijzerScreen;
