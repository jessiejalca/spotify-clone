import { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-web"
import { colors, fonts } from "../styles/base"
import axios from "axios"
import Playlist from "../components/Playlist"

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

  const openPlaylist = (name, image, owner, description, id) => {
    navigation.push("PlaylistScreen", {
      name: name,
      image: image,
      owner: owner,
      description: description,
      id: id,
      token: token,
    })
  }

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View>
        <Text style={[styles.text, styles.pageTitle]}>Your Library</Text>
      </View>
      {/* List of playlists */}
      <FlatList
        data={playlists}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              openPlaylist(
                item.name,
                item.images[0].url,
                item.owner.display_name,
                item.description,
                item.id
              )
            }}>
            <Playlist {...item} />
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
})
