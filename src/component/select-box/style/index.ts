import { StyleSheet } from "react-native";

export const selectBoxStyle = StyleSheet.create({
  selectBox: {
    width: "100%",
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth:1,
    borderColor: '#D3D3D3',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap:8
  },
  selectBoxTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  selectBoxText: {
    fontSize: 12,
    color: 'black',
    // fontFamily: 'Lato',
    lineHeight: 20,
  },
  itemList: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
  },
  itemListText: {
    fontSize: 16,
    color: 'black',
    // fontFamily: theme.POPPINS_REGULAR,
  },
});
