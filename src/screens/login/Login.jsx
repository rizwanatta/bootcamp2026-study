import { View, Image, Text, TextInput, ScrollView } from "react-native";
import { useState } from "react";

import styles from "./Login.style";

import { Button } from "../../components";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  function onLoginPressed() {
    const error =
      (!email && "Please enter your email") ||
      (!password && "Please enter your password") ||
      (!email.includes("@") && "Please enter a valid email");

    if (error) return alert(error);

    setIsValid(true);
    alert("Login pressed");
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://cdn.pixabay.com/photo/2025/12/03/08/08/draw-9991861_1280.png",
          }}
        />

        <Text style={styles.label}>Login {isValid ? "😱" : "❌"}</Text>
        <Text style={styles.label}>{email}</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="gray"
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>

        <Button
          title="testme"
          onPress={onLoginPressed}
          icon="heart"
          iconColor="pink"
          iconSize={80}
        />
        <Button
          title="test 2"
          onPress={onLoginPressed}
          icon="home"
          iconColor="red"
          iconSize={50}
        />
        <Button
          title="test 3"
          onPress={onLoginPressed}
          icon="person"
          iconColor="green"
          iconSize={10}
        />
      </View>
    </ScrollView>
  );
}
