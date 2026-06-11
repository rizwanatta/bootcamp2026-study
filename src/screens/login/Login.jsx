import { View, Image, Text, TextInput, Button, ScrollView } from "react-native";

import styles from "./Login.style";

export default function App() {
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

        <Button title="Login" />
      </View>
    </ScrollView>
  );
}
