import { Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import Qstyle from '../styling/Qstyle';

const Q1ex2 = (props) => {

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
      await updateDoc(doc(db,"student", props.ID),{
        addQ1_B: compare(answer),
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
      OK, let’s try that. Start from $3.25. How many times do you have to add $7.50 to get to $85.75?
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

export default Q1ex2;