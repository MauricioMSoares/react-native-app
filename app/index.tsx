import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const [text, setText] = useState("");
  const [textToPrint, setTextToPrint] = useState("");

  const handleChange = (value: string) => {
    setText(value);
  };

  const router = useRouter();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textContent}>Insert the text to be printed:</Text>

        <TextInput
          style={styles.input}
          onChangeText={handleChange}
          value={text}
          placeholder="Type something..."
        />

        <Button
          title="Test Action"
          onPress={() => {
            console.log("Pressed:", text);
            setTextToPrint(text);
          }}
        />

        <Text style={styles.output}>{textToPrint}</Text>
        <Button
          title="Go to Second screen"
          onPress={() => router.push("/screens/SecondScreen")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textContent: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    width: "80%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  output: {
    marginTop: 20,
    fontSize: 18,
    color: "black",
  },
});
