import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={userName}
        onChangeText={setUserName}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home", { studentName: userName })}
      >
        <Text style={styles.buttonText}>Enter App</Text>
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
    marginBottom: 24,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#0e98be",
    borderRadius: 8,
    padding: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
