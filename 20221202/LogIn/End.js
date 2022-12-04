import { View, Text, Button } from "react-native";
import Qstyle from "../styling/Qstyle";

const End = (props) => {
    return (
        <View style = {Qstyle.mainView}>

            <Text style = {Qstyle.EndView}>ALL QUIZS ARE END</Text>
            <Button title = "Home" onPress={() => {
                props.navigation.navigator("Log_in")
            }}/>

        </View>
    )
}

export default End;