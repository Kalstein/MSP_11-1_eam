import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { useState } from "react"

const Button = (props) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.onPress()
          }}
        >
          <Text>{props.title}</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#8cfffb",
      padding: 10,
      marginBottom: 20
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });

export default Button