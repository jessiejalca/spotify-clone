import { StyleSheet, View, Text, Image } from "react-native"
import { colors, fonts, boxes } from "../styles/base"

const PlaylistScreen = ({ route, navigation }) => {
  const { name, image, owner, description, id, token } = route.params

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: `${image}` }} />
      <Text style={[styles.text, styles.pageTitle]}>{name}</Text>
      <Text style={styles.text}>{owner}</Text>
      <Text style={[styles.text, styles.description]}>{description}</Text>
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
  },
  image: {
    width: 230,
    height: 230,
    alignSelf: "center",
    marginBottom: 20,
  },
})

export default PlaylistScreen
