import {View, TextInput, Button, Image} from 'react-native';
import React, { useState } from 'react';
import {db} from '../firebaseConfig';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import Logo from '../assets/Logo.png'
import Qstyle from '../styling/Qstyle';


const Log_in = (props) => {
    const [addName, setAddName] = useState(''); //이름을 받아옴
    const [addKey, setAddKey] = useState(''); //학생 인식키를 받아옴
    const [addQ1_0, setaddQ1_0] = useState(''); // 여기서부터 선생님 어플리케이션을 위한 데이터셋
    const [addQ1_A, setaddQ1_A] = useState(''); //Q'숫자'(문제 번호), _'0' 설문 조사
    const [addQ1_B, setaddQ1_B] = useState(''); //_'알파벳'(문제유형)(정답 여부)
    const [addQ1_C, setaddQ1_C] = useState('');
    const [addQ2_0, setaddQ2_0] = useState('');
    const [addQ2_A, setaddQ2_A] = useState('');
    const [addQ2_B, setaddQ2_B] = useState('');
    const [addQ2_C, setaddQ2_C] = useState(''); 
    const [addQ3_0, setaddQ3_0] = useState('');
    const [addQ3_A, setaddQ3_A] = useState('');
    const [addQ3_B, setaddQ3_B] = useState('');
    const [addQ3_C, setaddQ3_C] = useState('');
    const [addQ4_0, setaddQ4_0] = useState('');
    const [addQ4_A, setaddQ4_A] = useState('');
    const [addQ4_B, setaddQ4_B] = useState('');
    const [addQ4_C, setaddQ4_C] = useState('');
    const [addQ5_0, setaddQ5_0] = useState('');
    const [addQ5_A, setaddQ5_A] = useState('');
    const [addQ5_B, setaddQ5_B] = useState('');
    const [addQ5_C, setaddQ5_C] = useState('');
    const [addQ6_0, setaddQ6_0] = useState('');
    const [addQ6_A, setaddQ6_A] = useState('');
    const [addQ6_B, setaddQ6_B] = useState('');
    const [addQ6_C, setaddQ6_C] = useState('');
    const [addQ7_0, setaddQ7_0] = useState('');
    const [addQ7_A, setaddQ7_A] = useState('');
    const [addQ7_B, setaddQ7_B] = useState('');
    const [addQ7_C, setaddQ7_C] = useState('');
    const [addQ8_0, setaddQ8_0] = useState('');
    const [addQ8_A, setaddQ8_A] = useState('');
    const [addQ8_B, setaddQ8_B] = useState('');
    const [addQ8_C, setaddQ8_C] = useState(''); // 여기까지 데이터셋
    const [addClass, setaddClass] = useState('');// 분반 구별을 위한 데이터셋
    const [addScore, setaddScore] = useState(''); //학생들의 총 점수에 대한 데이터

  
    const onChangeInput_1 = (event) => {        //자신이 입력한 정보 출력
        setAddName(event)
    }
    const onChangeInput_2 = (event) => {        //자신이 입력한 정보 출력
        setAddKey(event)
    }
    const onChangeInput_3 = (event) => {
        setaddClass(event)
    }
    const addtoDB = async ()=>{      //로그인 정보에 대한 데이터 테이블 생성
        try{
            await addDoc(collection(db, "student"), {
                addName: addName,
                addKey: addKey,
                addQ1_0: addQ1_0,
                addQ1_A: addQ1_A,
                addQ1_B: addQ1_B,
                addQ1_C: addQ1_C,
                addQ2_0: addQ2_0,
                addQ2_A: addQ2_A,
                addQ2_B: addQ2_B,
                addQ2_C: addQ2_C,
                addQ3_0: addQ3_0,
                addQ3_A: addQ3_A,
                addQ3_B: addQ3_B,
                addQ3_C: addQ3_C,
                addQ4_0: addQ4_0,
                addQ4_A: addQ4_A,
                addQ4_B: addQ4_B,
                addQ4_C: addQ4_C,
                addQ5_0: addQ5_0,
                addQ5_A: addQ5_A,
                addQ5_B: addQ5_B,
                addQ5_C: addQ5_C,
                addQ6_0: addQ6_0,
                addQ6_A: addQ6_A,
                addQ6_B: addQ6_B,
                addQ6_C: addQ6_C,
                addQ7_0: addQ7_0,
                addQ7_A: addQ7_A,
                addQ7_B: addQ7_B,
                addQ7_C: addQ7_C,
                addQ8_0: addQ8_0,
                addQ8_A: addQ8_A,
                addQ8_B: addQ8_B,
                addQ8_C: addQ8_C,
                addClass : addClass,
                addScore: addScore,
                createdAt: new Date(), //생성일자
            });
            setAddName("")
            setAddKey("")
            setaddQ1_0("")
            setaddQ1_A("")
            setaddQ1_B("")
            setaddQ1_C("")
            setaddQ2_0("")
            setaddQ2_A("")
            setaddQ2_B("")
            setaddQ2_C("")
            setaddQ3_0("")
            setaddQ3_A("")
            setaddQ3_B("")
            setaddQ3_C("")
            setaddQ4_0("")
            setaddQ4_A("")
            setaddQ4_B("")
            setaddQ4_C("")
            setaddQ5_0("")
            setaddQ5_A("")
            setaddQ5_B("")
            setaddQ5_C("")
            setaddQ6_0("")
            setaddQ6_A("")
            setaddQ6_B("")
            setaddQ6_C("")
            setaddQ7_0("")
            setaddQ7_A("")
            setaddQ7_B("")
            setaddQ7_C("")
            setaddQ8_0("")
            setaddQ8_A("")
            setaddQ8_B("")
            setaddQ8_C("")
            setaddScore("")
            setaddClass("")

            props.navigation.navigate("Q1") // 데이터 셋을 만듦과 동시에 다음 화면으로 넘어가도록 추가
            DocID()
        } catch(error){
            console.log(error.message)
        }
    }

    const DocID = async () => {
        try {
            const q = query(collection(db, "student"), where("addKey", "==", addKey)) //컬렉션내의 student그룹에서 학번이 같은사람 찾아오기
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                props.setID(doc.id)
            });
            
        } catch(error) {
            console.log(error.message)
        }
        
    }


    return (
        <View style={Qstyle.mainView}>
            <Image          //메인 로고 이미지 가져오기
             style={Qstyle.ImageView}
             source={Logo}
             resizeMode="contain"
            />
            <TextInput          //이름 입력에 대한 TextInput
              placeholder = "name"
              value = {addName}
              style = {Qstyle.input}
              onChangeText = {onChangeInput_1}
             ></TextInput>
             <TextInput        //인식키 입력에 대한 TextInput
              placeholder = "class Number"
              value = {addKey}
              style = {Qstyle.input}
              onChangeText = {onChangeInput_2}
            ></TextInput>
            <TextInput               //분반 입력에 대한 TextnIput
             placeholder = "Class"
             value = {addClass}
             style = {Qstyle.input}
             onChangeText = {onChangeInput_3}
             ></TextInput>

            <Button title = "LogIn" onPress={addtoDB}/>
            
        </View>

    );

}

export default Log_in;
