import { StyleSheet } from "react-native";

export const signUpStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 21,
    padding: 30,
  },
  imageView: {
    height: 70,
    width: 70,
  },
  profileImage: {
    height: "100%",
    width: "100%",
  },
  mainView: {
    width: "100%",
    alignItems: "center",
    gap: 30,
  },
  formView: {
    gap: 35,
  },
  mainInputView: {
    // gap: 24,
  },

  inputView2: {
    flexDirection: "row",
    gap: 10,
    borderColor: "#D0D5DD",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    height: 50,
  },
  input: {
    width: "80%",
    backgroundColor: "white",
    borderWidth: 0,
    height: 40,
  },
  inputText: {
    // fontFamily: theme.POPPINS_REGULAR,
    fontSize: 14,
    // lineHeight: 27,
    width: "100%",
  },
  countryCode: {
    width: "22%",
    // height: 50,
    backgroundColor: "white",
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  countryCodeText: {
    fontSize: 14,
    // fontFamily: theme.POPPINS_REGULAR,
    textAlign: "center",
    lineHeight: 27,
    width: "100%",
    borderRightWidth: 1,
    borderColor: "lightgray",
  },
  registerView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
  },
  registerText: {
    fontFamily: "Lato",
    fontSize: 14,
    // fontWeight: '700',
    lineHeight: 25,
  },
  mainBtnView: {
    gap: 21,
  },
  loginText: {
    color: "#EDBD00",
    fontFamily: "Lato",
    fontSize: 14,
    // fontWeight: "900",
    lineHeight: 16.8,
  },
  error: {
    color: "red",
    fontFamily: "Lato",
    fontSize: 14,
    // fontWeight: "900",
    lineHeight: 16.8,
    marginTop: 5,
    marginLeft: 4,
  },
  readit: {
    flexDirection: "row",
    width: "38%",
  },
  term: {
    fontSize: 10,
    lineHeight: 18,
    fontFamily: "lato",
    // fontWeight:'700'
  },
  condition: {
    fontSize: 10,
    textDecorationLine: "underline",
    lineHeight: 18,
    fontFamily: "lato",
    // fontWeight: '700'
  },
});
