import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const StudiewijzerScreen = ({}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>Hier komt de studiewijzer</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default StudiewijzerScreen;
