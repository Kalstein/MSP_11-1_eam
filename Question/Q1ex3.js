import { Text, View, Button, TextInput } from 'react-native';     //C방식 정답 입력 화면
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import Qstyle from '../styling/Qstyle';

const Q1ex3 = (props) => {

  const [answer,setAnswer]=useState("")

  const compare = (answer) => {
   
    if(answer == 11){
      props.setScore(props.score +1);
      
      return "O"
    }else{
      
      return "X"
    }
  }

  const UpdateOnDB=async()=>{
    console.log("score:", props.score+1)
    try{
      await updateDoc(doc(db,"student", props.ID),{           //student컬렉션에 데이터베이스 업데이트
        addQ1_C: compare(answer),                             //정답 입력 시 addQ1_A에 O가 업데이트되고 오답 시 X가 업데이트
        addScore : props.score
      }) 
      props.navigation.navigate("Q1confirmation")

    }catch(error){
      console.log(error)
      alert("Could'nt add the answer")
    }
  }

    return(
    <View style ={Qstyle.mainView}>

    
    <Text style ={Qstyle.Qtext}>
    OK. Start with $85.50.
Subtract the shipping fee, then count how many times you have to subtract
$7.50 to get to 0.
    </Text>
    <TextInput placeholder='답' style = {Qstyle.input} onChangeText={(answer)=>setAnswer(answer)}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          UpdateOnDB();
      }}
    />
    </View>);
}

export default Q1ex3;