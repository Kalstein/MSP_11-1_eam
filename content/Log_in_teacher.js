//선생님 어플
import { View, TextInput, Image, ScrollView } from "react-native";
import React, {useState} from "react";
import { db } from "../firebaseConfig";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import Logo from '../assets/Logo.png';
import Qstyle from './Qstyle';
import Button from './Button';

const Log_in_teacher = (props) =>{
    const [addName, setaddName] = useState("");
    const [addPassword, setaddPassword] = useState("");
  
    const onChangeInput_1 = (event) => {        //자신이 입력한 정보 출력
        setaddName(event)
    }
    const onChangeInput_2 = (event) => {        //자신이 입력한 정보 출력
        setaddPassword(event)
    }  

    const outDB = async () => {
        try {
            const q = query(collection(db, "Teacher"), where("addTeacher", "==", addName)) //컬렉션내의 Teacher그룹에서 이름이 같은사람 찾아오기
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                if(doc.data().addPassword == addPassword) {       // 가져온 패스워드 데이터와 입력한 패스워드 데이터를 비교
                    props.setTeacherClass(doc.data().addClass)
                    props.setTeacherName(addName)
                    return props.navigation.navigate("Home")   //선생님 어플리케이션 내용에 따라 test1변경요망
                }
            });
        } catch(error) {
            console.log(error.message)
        }
    }

    return(
        <ScrollView>
            <Image
             style={Qstyle.ImageView}
             source={Logo}
             resizeMode="contain"
            />
            <TextInput
             placeholder="Name"
             value= {addName}
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
            <Button title="LogIn" onPress={outDB}/> 
            <Button title="ADD_TEACHER" onPress={() => {
                props.navigation.navigate("Administer")
            }}/>
        </ScrollView>
    )
}

export default Log_in_teacher;