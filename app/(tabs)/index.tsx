import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StudentScreen() {
  const [rating, setRating] = useState<number | null>(null);
  const router = useRouter();

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Valuta la lezione</Text>
      <View style={styles.buttonsContainer}>
        {[1, 2, 3, 4, 5].map((num) => (
          <TouchableOpacity
            key={num}
            style={[styles.button, rating === num && styles.selectedButton]}
            onPress={() => setRating(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {rating && (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push(`/colorFlash?vote=${rating}`)} //Passa come parametro il voto
        >
          <Text style={styles.nextButtonText}>Avanti</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  selectedButton: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: "#FF9800",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
