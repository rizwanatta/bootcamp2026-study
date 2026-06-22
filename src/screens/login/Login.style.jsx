import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 200,
  },

  label: {
    color: "white",
    fontSize: 40,
  },

  form: {
    width: "90%",
  },
  input: {
    color: "pink",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "orange",
    margin: 10,
    borderRadius: 20,
  },
});

export default styles;
