import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { addDoc,collection,doc, updateDoc, where } from 'firebase/firestore';

const Q1ex2 = (props) => {

  const [answer,setAnswer]=useState("")

  const AddOnDB=async()=>{
    try{
      await addDoc(collection(db,'student'),{
       Q1_B: answer,
      })
      props.navigation.navigate("Q1confirmation")

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

    
    <Text style ={styles.text}>
      OK, let’s try that. Start from $3.25. How many times do you have to add $7.50 to get to $85.75?
    </Text>
    <TextInput placeholder='답' style = {styles.textView} onChangeText={(answer)=>setAnswer(answer)}></TextInput>
    <Button
      title="Next?"
      onPress={()=>{
          AddOnDB();
      }}
    />
    </View>);
}

const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subView:{
      backgroundColor:'orange',
      marginBottom: 10
    },
    generator:{
      backgroundColor:'Blue Violet',
      padding:5,
      alignItems:'center',
      width:'100%'
    },
    textView: {
      width: "95%",
      margin: 15,
      height: 40,
      borderColor: "#7a42f4",
      borderWidth: 1
    },
    text: {
      backgroundColor:'#ffaec8',
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 80,
    }
  });

  export default Q1ex2;