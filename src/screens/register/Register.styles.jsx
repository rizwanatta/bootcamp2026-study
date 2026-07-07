import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#5f4fd8",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },

  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },

  label: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },

  form: {
    width: "90%",
  },

  fieldLabel: {
    color: "white",
    fontSize: 14,
    marginLeft: 12,
    marginTop: 10,
    marginBottom: 4,
  },

  input: {
    color: "white",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },

  genderOption: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
    alignItems: "center",
  },

  genderOptionSelected: {
    backgroundColor: "white",
  },

  genderOptionText: {
    color: "white",
    fontSize: 16,
  },

  genderOptionTextSelected: {
    color: "#5f4fd8",
    fontWeight: "bold",
  },

  loginText: {
    color: "white",
    marginTop: 20,
  },

  loginLink: {
    color: "#ffd400",
    textDecorationLine: "underline",
  },
});

export default styles;
