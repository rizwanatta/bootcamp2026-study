import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

/***
 * title: string,
 * onPress: () => void,
 * showIcon: boolean,
 * icon: string,
 * iconColor: string,
 * iconSize: number,
 * iconFamily : string,
 */

export const Button = ({
  title,
  onPress,
  showIcon = false,
  icon = "",
  iconColor = "white",
  iconSize = 20,
  iconFamily = "Ionicons",
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons
        name={icon}
        size={iconSize}
        color={iconColor}
        style={{ marginRight: 10 }}
      />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});
