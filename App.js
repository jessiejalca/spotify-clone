// Spotify Client ID: 2595d0b79d404802aae4ebb44c9798cc

import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { colors, fonts } from "./styles/base"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fonts.lg,
    fontWeight: fonts.semibold,
  },
})
