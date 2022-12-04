//회원가입 페이지(선생님 어플)
import { View, TextInput, Text, Image } from "react-native";
import React, {useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Qstyle from './Qstyle';
import Button from './Button';

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
            props.navigation.navigate("Login")

        } catch {
            console.log(error.message)
        }
    }

    return(
        <View>
            <Text style={Qstyle.Qtext}>THIS IS Sign_Up Page</Text>
            <TextInput
             placeholder="Name"
             value= {addTeacher}
             style= {Qstyle.input}
             onChangeText = {onChangeInput_1}
            />
            <TextInput
             placeholder="PASSWORD"
             secureTextEntry={true}
             value= {addPassword}
             style= {Qstyle.input}
             onChangeText = {onChangeInput_2}
            />
            <TextInput
            placeholder="CLASS"
            value = {addClass}
            style= {Qstyle.input}
            onChangeText = {onChangeInput_3}
            />
            <Button title="ADD" onPress={addtoDB}/>
        </View>
    )
} 

export default Administer;