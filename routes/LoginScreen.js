// Spotify authentication & token code provided by https://dev.to/dom_the_dev/how-to-use-the-spotify-api-in-your-react-js-app-50pn#authentication

import { useCallback, useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, Linking } from "react-native"
import { colors, fonts } from "../styles/base"
import axios from "axios"
import Button from "../components/Button"

export default function LoginScreen({ route, navigation }) {
  const CLIENT_ID = "d6d826285e034c48bae4e2747477aa3f"
  const REDIRECT_URI = "http://localhost:19006/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  const [playlists, setPlaylists] = useState([])

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

  // Use token to get data from API
  const getPlaylists = async (e) => {
    e.preventDefault()
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    setPlaylists(data.items)
  }

  const openApp = useCallback(() => {
    Linking.openURL(
      `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
    )
    // navigation.push("LibraryScreen")
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/spotify-logo.png")}
      />
      <Text style={[styles.text, styles.pageTitle]}>Spotify Simplicity</Text>
      <Button title="Log in with Spotify" fn={openApp} />
      {/* Temporary button */}
      <Button title="Get Playlists" fn={getPlaylists} />
      <StatusBar style="auto" />
      {console.log(playlists)}
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
