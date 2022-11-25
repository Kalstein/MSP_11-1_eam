import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { addDoc,collection,doc, updateDoc, where } from 'firebase/firestore';
const Q3ex1ex1 = (props) => {

  const [answer,setAnswer]=useState("")

  const AddOnDB=async()=>{
    try{
      await addDoc(collection(db,'student'),{
       Q3_A: answer,
      })
      props.navigation.navigate("Q3confirmation")

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

    
    <Text style ={styles.subView}>
    Yes! So she used 64.8 yards of fabric for six curtains. Now, how much fabric did she use for one curtain?
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
    }
  });

  export default Q3ex1ex1;