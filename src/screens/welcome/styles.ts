import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 20,
  },
  heading: {
    fontFamily: fonts.primary.extraBold,
    fontSize: 50,
    marginBottom: 10,
    letterSpacing: 1,
  },
  subheading: {
    fontFamily: fonts.primary.light,
    fontSize: 18,
    maxWidth: 300,
    textAlign: "left",
    letterSpacing: 0.31,
  },

  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 15,
  },
});
