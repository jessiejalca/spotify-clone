// Spotify Client ID: 2595d0b79d404802aae4ebb44c9798cc

import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { colors, fonts, boxes } from "../styles/base"

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/spotify-logo.png")}
      />
      <Text style={[styles.text, styles.pageTitle]}>Login to Spotify</Text>
      <View style={styles.formContainer}>
        <View>
          <Text style={[styles.text, styles.header]}>Email or username</Text>
          <TextInput style={[styles.text, styles.input]} />
        </View>
        <View>
          <Text style={[styles.text, styles.header]}>Password</Text>
          <TextInput
            style={[styles.text, styles.input]}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity style={[styles.text, styles.button]}>
        Log in
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    gap: 10,
    marginBottom: 20,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fonts.sm,
  },
  pageTitle: {
    fontSize: fonts.lgr,
    fontWeight: fonts.bold,
    marginBottom: 20,
  },
  header: {
    fontWeight: fonts.semibold,
  },
  logo: {
    width: 40,
    height: 40,
  },
  input: {
    backgroundColor: colors.grey,
    borderRadius: boxes.smRadius,
    padding: boxes.padding,
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.white,
    color: colors.black,
    fontWeight: fonts.bold,
    borderRadius: boxes.lgRadius,
    padding: boxes.padding,
    paddingHorizontal: boxes.btnHorizontalPadding,
  },
})
