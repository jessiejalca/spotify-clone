import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { colors, fonts } from "../styles/base"
import axios from "axios"

export default function LibraryScreen({ route, navigation }) {
  const { token } = route.params
  const [playlists, setPlaylists] = useState([])

  // Use token to get data from API
  const getPlaylists = async () => {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    setPlaylists(data.items)
    console.log(data.items.map((item) => item.name))
  }

  // const renderPlaylists = () => {
  //   return playlists.map((playlist) => {
  //     ;<Text style={styles.text}>{playlist.name}</Text>
  //   })
  // }

  return (
    <View style={styles.container}>
      {getPlaylists()}
      {/* Top Bar */}
      <View>
        <Text style={[styles.text, styles.pageTitle]}>Your Library</Text>
      </View>
      {/* List of playlists */}
      <View></View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 20,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primary,
    letterSpacing: fonts.kerning,
  },
  pageTitle: {
    fontSize: fonts.lg,
    fontWeight: fonts.bold,
    marginBottom: 20,
  },
})
