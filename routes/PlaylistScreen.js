import { useEffect, useState } from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { FlatList } from "react-native-web"
import { colors, fonts, boxes } from "../styles/base"
import axios from "axios"

const PlaylistScreen = ({ route, navigation }) => {
  const { name, image, owner, description, id, token } = route.params

  const [tracks, setTracks] = useState([])

  // Use token to get data from API
  useEffect(() => {
    const fetchTracks = async () => {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setTracks(data.items)
      console.log(data.items)
    }

    fetchTracks()
  }, [])

  return (
    <View style={styles.container}>
      {console.log(tracks)}
      <Image style={styles.playlistImage} source={{ uri: `${image}` }} />
      <Text style={[styles.text, styles.pageTitle]}>{name}</Text>
      <Text style={styles.text}>{owner}</Text>
      <Text style={[styles.text, styles.description]}>{description}</Text>
      <FlatList
        data={tracks}
        renderItem={({ item }) => (
          <View style={styles.trackBox}>
            <Image
              style={styles.trackImage}
              source={{ uri: `${item.track.album.images[0].url}` }}
            />
            <View style={styles.trackTextBox}>
              <Text style={[styles.text, styles.trackTitle]}>
                {item.track.name}
              </Text>
              {/* List artists horizontally */}
              <View style={styles.artistList}>
                {item.track.artists.map((artist, index, row) => (
                  <Text
                    key={artist.id}
                    style={[styles.text, styles.trackArtist]}>
                    {
                      // if there are more artists, list with a comma and space
                      index + 1 === row.length
                        ? `${artist.name}`
                        : `${artist.name}, `
                    }
                  </Text>
                ))}
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.track.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 2,
    backgroundColor: colors.black,
    padding: 20,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fonts.sm,
    fontWeight: fonts.semibold,
  },
  pageTitle: {
    fontSize: fonts.lgr,
    fontWeight: fonts.bold,
    letterSpacing: fonts.kerning,
  },
  description: {
    color: colors.lightGrey,
    marginTop: 5,
    marginBottom: 10,
  },
  playlistImage: {
    width: 230,
    height: 230,
    alignSelf: "center",
    marginBottom: 20,
  },
  trackBox: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 10,
  },
  trackImage: {
    width: 50,
    height: 50,
  },
  trackTextBox: {
    justifyContent: "center",
    gap: 3,
  },
  trackTitle: {
    fontSize: fonts.md,
  },
  trackArtist: {
    color: colors.lightGrey,
    fontSize: fonts.xsm,
  },
  artistList: {
    flexDirection: "row",
  },
})

export default PlaylistScreen
