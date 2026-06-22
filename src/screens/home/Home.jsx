import { View, Text } from "react-native";
import React from "react";
import styles from "./Home.styles";
import { useRoute } from "@react-navigation/native";

export default function Home() {
  const route = useRoute();
  const { email } = route.params ?? {};

  return (
    <View style={styles.container}>
      <Text>{email}</Text>
    </View>
  );
}
