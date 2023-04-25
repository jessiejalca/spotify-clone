import { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { colors, fonts } from "../styles/base"
import axios from "axios"
import { FlatList } from "react-native-web"

export default function LibraryScreen({ route, navigation }) {
  const { token } = route.params
  const [playlists, setPlaylists] = useState([])

  // Use token to get data from API
  useEffect(() => {
    const fetchPlaylists = async () => {
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

    fetchPlaylists()
  }, [])

  return (
    <View style={styles.container}>
      {console.log(playlists)}
      {/* Top Bar */}
      <View>
        <Text style={[styles.text, styles.pageTitle]}>Your Library</Text>
      </View>
      {/* List of playlists */}
      <FlatList
        data={playlists}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.playlistBox}>
            <Image
              style={styles.image}
              source={{ uri: `${item.images[0].url}` }}
            />
            <View style={styles.playlistTextBox}>
              <Text style={[styles.text, styles.playlistTitle]}>
                {item.name}
              </Text>
              <Text style={[styles.text, styles.playlistOwner]}>
                {item.owner.display_name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
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
  },
  pageTitle: {
    fontSize: fonts.lg,
    fontWeight: fonts.bold,
    marginBottom: 20,
    letterSpacing: fonts.kerning,
  },
  playlistTitle: {
    fontSize: fonts.md,
    fontWeight: fonts.semibold,
  },
  playlistOwner: {
    color: colors.lightGrey,
    fontSize: fonts.sm,
    fontWeight: fonts.medium,
  },
  playlistBox: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  playlistTextBox: {
    justifyContent: "center",
    gap: 3,
  },
  image: {
    width: 50,
    height: 50,
  },
})
