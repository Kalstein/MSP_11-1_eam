import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { addDoc,collection,doc, updateDoc, where } from 'firebase/firestore';
const Q3estimation = (props) => {

  const [answer,setAnswer]=useState("")

  const AddOnDB=async()=>{
    try{
      await addDoc(collection(db,'student'),{
       Q3_estimation: answer,
      })
      props.navigation.navigate("Q4")

    }catch(error){
      console.log(error)
      alert("Could'nt add the answer")
    }
  }

    return(
    <View style ={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

    <Text style={styles.text}>
    What do you think the problem is asking you to do?
    </Text>
    <TextInput placeholder='평가' style = {styles.textView} onChangeText={(answer)=>setAnswer(answer)}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          AddOnDB();
      }}
    />
    </View>);
}

const styles = StyleSheet.create({
    textView: {
      width: "95%",
      margin: 15,
      height: 40,
      borderColor: "#7a42f4",
      borderWidth: 1
    },
    text:{
      backgroundColor:'#ffaec8',
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 80,
    }
  });

  export default Q3estimation;