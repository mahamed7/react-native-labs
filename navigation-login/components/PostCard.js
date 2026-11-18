import { View, Text, StyleSheet } from "react-native";

export default function PostCard({ title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000", // Adds a slight drop shadow (iOS)
    elevation: 3, // Adds a slight drop shadow (Android)
  },
  cardText: {
    fontSize: 16,
    color: "#333",
  },
});
