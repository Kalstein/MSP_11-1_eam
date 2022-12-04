import { Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import Qstyle from '../styling/Qstyle';

const Q4estimation = (props) => {

  const [answer,setAnswer]=useState("")

  const UpdateOnDB=async()=>{
    try{
      await updateDoc(doc(db,"student", props.ID),{
        addQ4_0: answer
      }) 
      props.navigation.navigate("MainPage")

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

export default Q4estimation;