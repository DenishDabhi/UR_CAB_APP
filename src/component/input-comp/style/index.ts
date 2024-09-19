import { Platform, StyleSheet } from "react-native";

const inputStyle = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 50,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  lableStyle: {
    fontSize: 14,
    lineHeight: 25,
    color: "#344054",
    // fontFamily: Colors.martelBold,
  },
  inputField: {
    height: 45,
    alignItems: "flex-start",
    fontSize: 12,
    width: "90%",
    color: "black",
    // fontFamily: theme.POPPINS_REGULAR,
    lineHeight: 20,
    ...Platform.select({
      web: {
        outlineStyle: "none",
        width: "100%",
      },
    }),
  },
  hedeShow: {
    fontFamily: "Lato",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
    color:'#848484'
  },
});

export default inputStyle;