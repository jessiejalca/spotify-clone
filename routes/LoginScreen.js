// Spotify authentication & token code provided by https://dev.to/dom_the_dev/how-to-use-the-spotify-api-in-your-react-js-app-50pn#authentication

import { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, Linking } from "react-native"
import { colors, fonts } from "../styles/base"
import Button from "../components/Button"

export default function LoginScreen({ navigation }) {
  const CLIENT_ID = "d6d826285e034c48bae4e2747477aa3f"
  const REDIRECT_URI = "http://localhost:19006/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

  // Get token to access user content
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)
  }, [])

  const authorize = () => {
    Linking.openURL(
      `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
    )
  }

  const openApp = () => {
    navigation.push("LibraryScreen", {
      itemId: Math.floor(Math.random() * 100),
      token: token,
    })
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/spotify-logo.png")}
      />
      <Text style={[styles.text, styles.pageTitle]}>Spotify Simplicity</Text>
      {token ? (
        <Button title="Open App" fn={openApp} />
      ) : (
        <Button title="Log in with Spotify" fn={authorize} />
      )}
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
    letterSpacing: fonts.kerning,
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
