import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff1493",
    letterSpacing: 2,
  },
  email: {
    fontSize: 18,
    color: "#ff69b4",
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default styles;
