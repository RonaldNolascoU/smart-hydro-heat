import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  content: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  card: {
    marginHorizontal: 10,
    marginTop: 60,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginVertical: 50,
  },
  btnActions: {
    backgroundColor: "#767c96",
    marginHorizontal: 30,
    marginVertical: 5,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  textCard: {
    fontSize: 64,
    fontWeight: "bold",
  },

  /* btnContentActions: {
    position: "absolute",
    width: "100%",
    bottom: 60,
  }, */
});
