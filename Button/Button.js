import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { useState } from "react"

const Button = (props) => {
    const [disabled, setDisabled] = useState(true)  //버튼 비활성화

    return (                                        //TouchableOpacity를 Button이란 컴포넌트로 Q1~4에 보냄
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {if(disabled){
            props.onPress()
            setDisabled(!disabled)
          }}}
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