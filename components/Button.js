import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { colors, fonts, boxes } from "../styles/base"

const Button = (props) => {
  return (
    <TouchableOpacity style={[styles.text, styles.button]} onPress={props.fn}>
      {props.title}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fonts.md,
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.green,
    color: colors.white,
    fontWeight: fonts.bold,
    borderRadius: boxes.lgRadius,
    padding: boxes.padding,
    paddingHorizontal: boxes.btnHorizontalPadding,
  },
})

export default Button
