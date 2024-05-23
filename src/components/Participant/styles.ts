import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F1E25",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 10,
  },
  name: { flex: 1, color: "white", fontSize: 16, paddingHorizontal: 12 },
  textButton: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  button: {
    width: 45,
    height: 45,
    backgroundColor: "#cd3232",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
});
