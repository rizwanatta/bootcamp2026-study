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
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../services";
import styles from "./Register.styles";
import { Button } from "../../components";

const GENDERS = ["Female", "Male", "Other"];

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const navigation = useNavigation();

  async function onRegisterPressed() {
    const error =
      (!username && "Please enter a username") ||
      (!email && "Please enter your email") ||
      (!email.includes("@") && "Please enter a valid email") ||
      (!password && "Please enter a password") ||
      (!age && "Please enter your age") ||
      (!gender && "Please select your gender");

    if (error) return alert(error);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  }

  const onLoginPressed = () => {
    navigation.navigate("Signin");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://cdn.pixabay.com/photo/2025/12/03/08/08/draw-9991861_1280.png",
          }}
        />

        <Text style={styles.label}>Create Account</Text>

        <View style={styles.form}>
          <Text style={styles.fieldLabel}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="username"
            placeholderTextColor="rgba(255,255,255,0.6)"
            autoCapitalize="none"
            onChangeText={setUsername}
          />

          <Text style={styles.fieldLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="rgba(255,255,255,0.6)"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={setEmail}
          />

          <Text style={styles.fieldLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.6)"
            secureTextEntry={true}
            onChangeText={setPassword}
          />

          <Text style={styles.fieldLabel}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="age"
            placeholderTextColor="rgba(255,255,255,0.6)"
            keyboardType="number-pad"
            onChangeText={setAge}
          />

          <Text style={styles.fieldLabel}>Gender</Text>
          <View style={styles.genderRow}>
            {GENDERS.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.genderOption,
                  gender === option && styles.genderOptionSelected,
                ]}
                onPress={() => setGender(option)}
              >
                <Text
                  style={[
                    styles.genderOptionText,
                    gender === option && styles.genderOptionTextSelected,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Button title="Register" onPress={onRegisterPressed} />

        <Text style={styles.loginText}>
          already have an account?{" "}
          <TouchableOpacity onPress={onLoginPressed}>
            <Text style={styles.loginLink}>login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}
