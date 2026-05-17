import { View, Text, Image, StyleSheet } from "react-native";

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/busleydenIcon.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ecebe9",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 500,
    height: 50,
    marginRight: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default CustomHeader;
