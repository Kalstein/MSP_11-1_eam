import { Text, View, Button, TextInput } from 'react-native';    //A방식 정답 입력 화면
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import Qstyle from '../styling/Qstyle';

const Q1exex1 = (props) => {

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
      await updateDoc(doc(db,"student", props.ID),{       //student컬렉션에 데이터베이스 업데이트
        addQ1_A: compare(answer),                         //정답 입력 시 addQ1_A에 O가 업데이트되고 오답 시 X가 업데이트
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
    Ok, your 
equation is equivalent
to 3.25 + 7.50p = 85.75
Can you solve to find the value of p?
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

export default Q1exex1;