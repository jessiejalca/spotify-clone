import { useCallback } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { colors, fonts, boxes } from "../styles/base"
import Button from "../components/Button"

export default function LoginScreen({ route, navigation }) {
  const openApp = useCallback(() => {
    navigation.push("LibraryScreen")
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/spotify-logo.png")}
      />
      <Text style={[styles.text, styles.pageTitle]}>Spotify Simplicity</Text>
      <Button title="Log in with Spotify" fn={openApp} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
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
  logo: {
    width: 40,
    height: 40,
  },
})
