import { View, Image, Text, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "./Login.style";

import { Button, Icon } from "../../components";
import { api } from "../../services";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [userImage, setUserImage] = useState("");

  const navigation = useNavigation();

  async function onLoginPressed() {
    const error =
      (!email && "Please enter your email") ||
      (!password && "Please enter your password") ||
      (!email.includes("@") && "Please enter a valid email");

    if (error) return alert(error);

    setIsValid(true);

    try {
      const response = await api.get("/users");
      setUserImage(response.data[1].avatar_url);
    } catch (error) {
      alert(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }

    // navigation.navigate("Home", { email });
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {userImage ? (
          <Image
            style={styles.logo}
            source={{
              uri: userImage,
            }}
          />
        ) : (
          <Image
            style={styles.logo}
            source={{
              uri: "https://cdn.pixabay.com/photo/2025/12/03/08/08/draw-9991861_1280.png",
            }}
          />
        )}

        <Text style={styles.label}>Login {isValid ? "😱" : "❌"}</Text>
        <Text style={styles.label}>{email}</Text>

        <Icon family="FontAwesome" name="home" color="pink" size={30} />

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
          title="Login"
          onPress={onLoginPressed}
          icon="heart"
          iconColor="pink"
          iconSize={30}
        />
      </View>
    </ScrollView>
  );
}
