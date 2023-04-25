import { StyleSheet, Text, Image, View } from "react-native"
import { colors, fonts } from "../styles/base"

const Playlist = (props) => {
  console.log(props)

  return (
    <View style={styles.playlistBox}>
      <Image style={styles.image} source={{ uri: `${props.images[0].url}` }} />
      <View style={styles.playlistTextBox}>
        <Text style={[styles.text, styles.playlistTitle]}>{props.name}</Text>
        <Text style={[styles.text, styles.playlistOwner]}>
          {props.owner.display_name}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: fonts.primary,
  },
  image: {
    width: 50,
    height: 50,
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
})

export default Playlist
