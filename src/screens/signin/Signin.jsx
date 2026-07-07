import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../../services";
import { signInWithEmailAndPassword } from "firebase/auth";

import styles from "./Signin.style";

import { Button, Icon } from "../../components";
import { api } from "../../services";

export default function Singin() {
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
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
    // navigation.navigate("Home", { email });
  }

  const onSignupPressed = () => {
    navigation.navigate("Register");
  };

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
        <Text>
          dont have an account yet?{" "}
          <TouchableOpacity onPress={onSignupPressed}>
            <Text style={styles.signupText}>signup</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}
