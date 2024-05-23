import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { backgroundColor: "black", flex: 1, padding: 30 },
  eventName: {
    color: "white",
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
  },
  eventDate: { color: "grey", fontSize: 16 },
  input: {
    flex: 1,
    height: 46,
    padding: 14,
    fontSize: 16,
    backgroundColor: "grey",
    color: "white",
    borderRadius: 6,
  },
  textButton: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  button: {
    width: 45,
    height: 45,
    backgroundColor: "#32CD32",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  form: {
    flexDirection: "row",
    marginVertical: 30,
    gap: 10,
  },
  emptyList: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  }
});
