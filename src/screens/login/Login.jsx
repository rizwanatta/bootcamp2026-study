import { View, Image, Text, TextInput, ScrollView } from "react-native";
import { Button } from "@react-navigation/elements";
import styles from "./Login.style";

export default function Login() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://cdn.pixabay.com/photo/2025/12/03/08/08/draw-9991861_1280.png",
          }}
        />

        <Text style={styles.label}>Login</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="gray"
          />

          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="gray"
            secureTextEntry={true}
          />
        </View>

        <Button> Login </Button>
        <Button screen="Register" style={styles.button}>
          {" "}
          Create an account
        </Button>
      </View>
    </ScrollView>
  );
}

// make me an exorted button comp
export function MyButton({ title, onPress }) {
  return (
    <Button onPress={onPress} style={styles.button}>
      {title}
    </Button>
  );
}
