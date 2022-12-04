//회원가입 페이지(선생님 어플)
import { View, StyleSheet, TextInput, Text, Button } from "react-native";
import React, {useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Administer = (props) => {
    const [addTeacher, setaddTeacher] = useState("");
    const [addPassword, setaddPassword] = useState("");
    const [addClass, setaddClass] = useState("");

    const onChangeInput_1 = (event) => {        //자신이 입력한 정보 출력
        setaddTeacher(event)
    }
    const onChangeInput_2 = (event) => {        //자신이 입력한 정보 출력
        setaddPassword(event)
    }
    const onChangeInput_3 = (event) => {
        setaddClass(event)
    }

    const addtoDB = async () => {
        try{
            await addDoc(collection(db, "Teacher"), {
                addTeacher: addTeacher,
                addPassword: addPassword,
                addClass: addClass,

            });
            setaddTeacher("")
            setaddPassword("")
            setaddClass("")

            props.navigation.navigate("loginteacher")

        } catch {
            console.log(error.message)
        }
    }

    return(
        <View>
            <Text>THIS IS ADMINISTERAPP</Text>
            <TextInput
             placeholder="Name"
             value= {addTeacher}
             style= {styles.input}
             onChangeText = {onChangeInput_1}
            />
            <TextInput
             placeholder="PASSWORD"
             value= {addPassword}
             style= {styles.input}
             onChangeText = {onChangeInput_2}
            />
            <TextInput
            placeholder="CLASS"
            value = {addClass}
            style = {styles.input}
            onChangeText = {onChangeInput_3}
            />
            
            <Button title="ADD" onPress={addtoDB}/>


        </View>
    )
} 


const styles = StyleSheet.create({
    input : {
        width: '80%',
        backgroundColor : "#cecece",
        marginTop:20,
        fontSize:20,
        padding:10
    },
   
})

export default Administer;