import { StyleSheet, View, Image, Text } from "react-native"
import { colors, fonts } from "../styles/base"

const Track = (props) => {
  return (
    <View style={styles.trackBox}>
      <Image style={styles.image} source={{ uri: `${props.imageUrl}` }} />
      <View style={styles.trackTextBox}>
        <Text style={[styles.text, styles.trackTitle]}>{props.name}</Text>
        {/* List artists horizontally */}
        <View style={styles.artistList}>
          {props.artists.map((artist, index, row) => (
            <Text key={artist.id} style={[styles.text, styles.trackArtist]}>
              {
                // if there are more artists, list with a comma and space
                index + 1 === row.length ? `${artist.name}` : `${artist.name}, `
              }
            </Text>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fonts.sm,
    fontWeight: fonts.semibold,
  },
  image: {
    width: 50,
    height: 50,
  },
  trackBox: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 10,
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

export default Track
