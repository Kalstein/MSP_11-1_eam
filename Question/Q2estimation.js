import { Text, View, Button, TextInput } from 'react-native';     //2번 문제 평가 화면
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import Qstyle from '../styling/Qstyle';

const Q2estimation = (props) => {

  const [answer,setAnswer]=useState("")

  const UpdateOnDB=async()=>{
    try{
      await updateDoc(doc(db,"student", props.ID),{
        addQ2_0: answer                                       //addQ2_0에 평가 추가됨
      }) 
      props.navigation.navigate("Q3")                         //3번문제 화면 이동

    }catch(error){
      console.log(error)
      alert("Could'nt add the answer")
    }
  }

    return(
    <View style ={Qstyle.mainView}>

    <Text style={Qstyle.Qtext}>
    What do you think the problem is asking you to do?
    </Text>
    <TextInput placeholder='평가' style = {Qstyle.input} onChangeText={(answer)=>setAnswer(answer)}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          UpdateOnDB();
      }}
    />
    </View>);
}

export default Q2estimation;