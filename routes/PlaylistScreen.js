import { useEffect, useState } from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { FlatList, TouchableOpacity } from "react-native-web"
import { colors, fonts } from "../styles/base"
import axios from "axios"
import Track from "../components/Track"

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
    }

    fetchTracks()
  }, [])

  const returnToLibrary = () => {
    navigation.pop()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={returnToLibrary}>
        <Text style={styles.text}>Return to Library</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: `${image}` }} />
      <Text style={[styles.text, styles.pageTitle]}>{name}</Text>
      <Text style={styles.text}>{owner}</Text>
      <Text style={[styles.text, styles.description]}>{description}</Text>
      <FlatList
        data={tracks}
        renderItem={({ item }) => (
          <Track
            imageUrl={item.track.album.images[0].url}
            name={item.track.name}
            artists={item.track.artists}
          />
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
  image: {
    width: 230,
    height: 230,
    alignSelf: "center",
    marginBottom: 20,
  },
})

export default PlaylistScreen
