import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function ColorFlashScreen() {
  const delay = 500; //ms
  const router = useRouter();
  const params = useLocalSearchParams();

  //Prende il voto dai parametri
  const vote = parseInt(params.vote as string, 10) || 1;

  //Definisce le sequenze di colori in base al voto
  const sequences: Record<number, string[]> = {
    1: ["red", "green", "blue"],
    2: ["red", "blue", "green"],
    3: ["green", "red", "blue"],
    4: ["green", "blue", "red"],
    5: ["blue", "red", "green"],
  };

  const [colorIndex, setColorIndex] = useState(0);
  const colors = sequences[vote] || ["white"];

  useEffect(() => {
    if (colorIndex < colors.length) {
      const timer = setTimeout(() => {
        setColorIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      router.back(); // torna alla schermata studente
    }
  }, [colorIndex]);

  return (
    <View style={[styles.screen, { backgroundColor: colors[colorIndex] || "white" }]}/>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messageText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});