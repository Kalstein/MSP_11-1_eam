//선생님 어플
import { View, StyleSheet, TextInput, Text, Button, Alert } from "react-native";
import React, {useState} from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Log_in_teacher = (props) =>{
    const [addName, setaddName] = useState("");
    const [addPassword, setaddPassword] = useState("");
    const [teachers, setTeachers] = useState();

    const onChangeInput_1 = (event) => {        //자신이 입력한 정보 출력
        setaddName(event)
    }
    const onChangeInput_2 = (event) => {        //자신이 입력한 정보 출력
        setaddPassword(event)
    }

    const readfromDB = async () => {
        try{
            const data = await getDocs(collection(db, "Teacher"))
            setTeachers(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        } catch(error) {
            console.log(error.message)
        }
    }

    const Compare = () => {
        readfromDB      //데이터 읽어오기
        {teachers?.map((row, idx) => {
            //{({row.addTeacher} == {addName}) && ({row.addPassword} == {addPassword}) ? props.navigation.navigate("test1") : Alert('Failed')}
            if(row.addTeacher == {addName} && row.addPassword == {addPassword}) {
                return props.navigation.navigate("test1")  //이름과 패스워드가 같으면 다음화면으로 넘어감
            } else { return Alert('Failed')}    //하나라도 틀리면 넘어가지 않고 알람만 보냄.
        })}

    }

    
    return(
        <View>
            <Text>QUIZ APP FOR TEACHER</Text>
            <TextInput
             placeholder="Name"
             value= {addName}
             style= {styles.input}
             onChangeText = {onChangeInput_1}
            />
            <TextInput
             placeholder="PASSWORD"
             value= {addPassword}
             style= {styles.input}
             onChangeText = {onChangeInput_2}
            />
            <Button title="LogIn" onPress={Compare}/> //버튼을 누르면 Compare실행


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
    mainView:{
        width:'80%'
    },
    buttonView: {
        width: 50,
        height: 30,
        Color: '#2c2c2c',
        marginTop: 20,
        fontSize: 20,
        padding: 10

    },
})

export default Log_in_teacher;
