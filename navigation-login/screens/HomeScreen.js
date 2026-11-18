import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation, route }) {
  const { studentName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {studentName}!</Text>
      <Text style={styles.subtitle}>You have successfully entered the app.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "#666666",
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f02a07",
    borderRadius: 8,
    padding: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
