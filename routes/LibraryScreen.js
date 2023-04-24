// Spotify Client ID: 2595d0b79d404802aae4ebb44c9798cc

import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { colors, fonts } from "../styles/base"

export default function LibraryScreen(props) {
  console.log(props.playlists)
  return (
    <View style={styles.container}>
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
