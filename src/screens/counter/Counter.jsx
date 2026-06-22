import { View, Text, TouchableOpacity } from "react-native";

import { useState } from "react";

import styles from "./Counter.styles";
import { Button } from "../../components";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <View style={styles.contiainer}>
      {/*  a counter - button and + button and number in between them */}
      <View style={styles.countCon}>
        <Button title="" onPress={decrement} icon="remove" />

        <Text style={styles.countText}>{count}</Text>

        <Button title="" onPress={increment} icon="add" />
      </View>
    </View>
  );
}
